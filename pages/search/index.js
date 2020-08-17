import React from "react";
import fetch from "isomorphic-fetch";
import { withRouter } from "next/router";

import MainLayout from "components/MainLayout";
import OptionsBar from "components/SearchPage/OptionsBar";
import FiltersList from "components/SearchPage/FiltersList";
import MainContent from "components/SearchPage/MainContent";
import MaxPageError from "components/SearchPage/MaxPageError";

import {
    getCurrentUrl,
    getItemThumbnail,
    getSearchPageTitle,
} from "lib";


//todo get these from next environment

// import {
//     API_ENDPOINT,
//     THUMBNAIL_ENDPOINT,
//     LOCAL_ABOUT_ENDPOINT
// } from "constants/items";

// import { SITE_ENV, LOCAL_ID } from "constants/env";
// import { LOCALS } from "constants/local";


class Search extends React.Component {

    state = {
        showSidebar: false
    };

    toggleFilters = () => {
        this.setState({ showSidebar: !this.state.showSidebar });
    };

    render() {
        const {
            router,
            results,
            numberOfActiveFacets,
            pageCount,
            currentPage,
            pageSize,
        } = this.props;

        let itemCount = 0;

        if ("count" in results) {
            itemCount = results.count.value
        }

        return (
            <MainLayout
                pageTitle={getSearchPageTitle(router.query.q)}
            >
                <OptionsBar
                    showFilters={this.state.showSidebar}
                    currentPage={currentPage}
                    route={router}
                    itemCount={itemCount}
                    onClickToggleFilters={this.toggleFilters}
                    numberOfActiveFacets={numberOfActiveFacets}
                />
                <FiltersList
                    showFilters={this.state.showSidebar}
                    onClickToggleFilters={this.toggleFilters}
                    route={router}
                    facets={results.facets}
                />
                {currentPage <= MAX_PAGE_SIZE &&
                <MainContent
                    hideSidebar={!this.state.showSidebar}
                    paginationInfo={{
                        pageCount: pageCount,
                        pageSize: pageSize || DEFAULT_PAGE_SIZE,
                        currentPage: currentPage
                    }}
                    route={router}
                    facets={results.facets}
                    results={results.docs}
                    aboutness={aboutness}
                />}
                {currentPage > MAX_PAGE_SIZE &&
                <MaxPageError maxPage={MAX_PAGE_SIZE} requestedPage={currentPage} />}
            </MainLayout>
        );
    }
}

Search.getInitialProps = async context => {
    const query = context.query;
    const req = context.req;
    const currentUrl = getCurrentUrl(req);
    const q = query.q
        ? encodeURIComponent(query.q)
            .replace(/'/g, "%27")
            .replace(/"/g, "%22")
        : "";

    // todo BWS filtering
    let filters = isLocal && local.filters ? local.filters : [];

    let tags = [];
    if (query.tags) {
        tags = Array.isArray(query.tags) ? query.tags : new Array(query.tags);
        filters = filters.concat(tags.map(tag => `tags:${tag}`));
    }

    let hasDates = false;

    const queryArray = possibleFacets
        .map(facet => {
            if (facet.indexOf("sourceResource.date") !== -1 && !hasDates) {
                hasDates = true; // do it only once for date queries
                // the date “facets” from ES do not map to the way the API expects requests
                // remove whatever is after the last periot (“begin” or “end”)
                facet = facet.replace(".begin", "");
                facet = facet.replace(".end", "");
                // dates are special (also all those pretty/uglifiers shold be one object instead of three but ¯\_(ツ)_/¯)
                let dateQuery = [];
                let beginYear = "";
                let endYear = "";
                if (query.after && !isNaN(Number(query.after))) {
                    beginYear = Number(query.after);
                    dateQuery.push(`${facet}.after=${beginYear}-01-01`);
                }
                if (query.before && !isNaN(Number(query.before))) {
                    endYear = Number(query.before);
                    dateQuery.push(`${facet}.before=${endYear}-12-31`);
                }
                return dateQuery.join("&");
            }
            // everyone else
            if (
                query[mapFacetsToURLPrettified[facet]] &&
                facet.indexOf("sourceResource.date") === -1
            ) {
                return `${facet}=${splitAndURIEncodeFacet(
                    query[mapFacetsToURLPrettified[facet]]
                )}`;
            }
            return "";
        })
        .filter(facetQuery => facetQuery !== "");

    const facetQueries = queryArray.join("&");

    let sort_by = "";
    if (query.sort_by === "title") {
        sort_by = "sourceResource.title";
    } else if (query.sort_by === "created") {
        sort_by = "sourceResource.date.begin";
    }
    const sort_order = query.sort_order || "";

    let page_size = query.page_size || DEFAULT_PAGE_SIZE;
    const acceptedPageSizes = pageSizeOptions.map(item => item.value);
    if (acceptedPageSizes.indexOf(page_size) === -1) {
        page_size = DEFAULT_PAGE_SIZE;
    }

    let page = query.page || 1;

    if (page <= MAX_PAGE_SIZE) {
        const numberOfActiveFacets = facetQueries
            .split(/(&|\+AND\+)/)
            .filter(facet => facet && facet !== "+AND+" && facet !== "&").length;

        const facetsParam = `&facets=${theseFacets.join(",")}&${facetQueries}`;
        const filtersParam = filters.map(x => `&filter=${x}`).join("");
        const url = `${currentUrl}${API_ENDPOINT}?exact_field_match=true&q=${q}&page=${page}&page_size=${page_size}&sort_order=${sort_order}&sort_by=${sort_by}${facetsParam}${filtersParam}`;

        const res = await fetch(url);

        let json = await res.json();
        const docs = json.docs.map(result => {
            const thumbnailUrl = getItemThumbnail(result);
            return Object.assign({}, result.sourceResource, {
                thumbnailUrl,
                id: result.id ? result.id : result.sourceResource["@id"],
                sourceUrl: result.isShownAt,
                provider: result.provider && result.provider.name,
                dataProvider: result.dataProvider,
                useDefaultImage: !result.object
            });
        });

        // fix facets because ES no longer returns them in the requested order
        let newFacets = {};
        possibleFacets.forEach(facet => {
            if (json.facets[facet]) newFacets[facet] = json.facets[facet];
        });

        if (tags) {
            newFacets["tags"] = {
                "_type" : "terms",
                "terms" : tags
            };
        }

        json.facets = newFacets;

        const maxResults = MAX_PAGE_SIZE * page_size;
        const pageCount = json.count > maxResults ? maxResults : json.count;

        return {
            results: Object.assign({}, json, { docs }),
            numberOfActiveFacets,
            currentPage: page,
            pageCount,
            pageSize: page_size,
        };
    }
};

import { joinIfArray } from "lib";

export const possibleFacets = [
    "sourceResource.type",
    "sourceResource.subject.name",
    "sourceResource.date.begin",
    "sourceResource.date.end",
    "sourceResource.spatial.name",
    "sourceResource.language.name",
    "admin.contributingInstitution",
    "provider.name"

];

// assumed to be a superset of possibleFacets,
// only active in QA mode
export const qaFacets = [
    "sourceResource.type",
    "sourceResource.subject.name",
    "sourceResource.date.begin",
    "sourceResource.date.end",
    "sourceResource.spatial.name",
    "sourceResource.language.name",
    "sourceResource.collection.title",
    "admin.contributingInstitution",
    "provider.name",
    "intermediateProvider",
    "rights"
];

export const mapFacetsToURLPrettified = {
    "sourceResource.type": "type",
    "sourceResource.subject.name": "subject",
    "sourceResource.date.begin": "after",
    "sourceResource.date.end": "before",
    "sourceResource.spatial.name": "location",
    "sourceResource.language.name": "language",
    "sourceResource.collection.name": "collection",
    "admin.contributingInstitution": "provider",
    "provider.name": "partner",
    intermediateProvider: "intermediateProvider",
    rights: "standardizedRightsStatement",
    tags: "tags"
};

export const mapURLPrettifiedFacetsToUgly = {
    type: "sourceResource.type",
    subject: "sourceResource.subject.name",
    after: "sourceResource.date.begin",
    before: "sourceResource.date.end",
    location: "sourceResource.spatial.name",
    language: "sourceResource.language.name",
    collection: "sourceResource.collection.title",
    provider: "admin.contributingInstitution",
    partner: "provider.name",
    intermediateProvider: "intermediateProvider",
    standardizedRightsStatement: "rights",
    tags: "tags"
};

export const prettifiedFacetMap = {
    "sourceResource.type": "Type",
    "sourceResource.subject.name": "Subject",
    "sourceResource.spatial.name": "Location",
    "sourceResource.date.begin": "Date",
    "sourceResource.date.end": "Date",
    "sourceResource.language.name": "Language",
    "sourceResource.collection.title": "Collection",
    "admin.contributingInstitution": "Contributing Institution",
    "provider.name": "Partner",
    intermediateProvider: "Intermediate Provider",
    rights: "Standardized Rights Statement"
};

export const pageSizeOptions = [
    { value: "10", label: "10" },
    { value: "20", label: "20" },
    { value: "50", label: "50" },
    { value: "100", label: "100" }
];

export const sortOptions = [
    { value: "relevance", label: "Relevance" },
    { value: "a_to_z", label: "A–Z" },
    { value: "z_to_a", label: "Z-A" },
    { value: "old_to_new", label: "Oldest to Newest" },
    { value: "new_to_old", label: "Newest to Oldest" }
];

export const mapSortOptionsToParams = {
    a_to_z: {
        sort_by: "title",
        sort_order: "asc"
    },
    z_to_a: {
        sort_by: "title",
        sort_order: "desc"
    },
    old_to_new: {
        sort_by: "created",
        sort_order: "asc"
    },
    new_to_old: {
        sort_by: "created",
        sort_order: "desc"
    },
    relevance: {
        sort_by: "",
        sort_order: ""
    }
};

export const getSortOptionFromParams = ({ sortBy, sortOrder }) => {
    if (sortBy === "created") {
        return sortOrder === "asc" ? "old_to_new" : "new_to_old";
    } else if (sortBy === "title") {
        return sortOrder === "asc" ? "a_to_z" : "z_to_a";
    } else {
        return "relevance";
    }
};

export const splitAndURIEncodeFacet = facet =>
    joinIfArray(facet, "|")
        .split("|")
        .map(param => encodeURIComponent(param))
        .join("+AND+");

export const DEFAULT_PAGE_SIZE = "20";

export const MAX_PAGE_SIZE = 100;

export default withRouter(Search);
