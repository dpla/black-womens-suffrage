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
    splitAndURIEncodeFacet,
    getSearchPageTitle,
} from "lib";

import {
    possibleFacets,
    mapFacetsToURLPrettified,
    pageSizeOptions,
    DEFAULT_PAGE_SIZE,
    MAX_PAGE_SIZE
} from "constants/search";

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
            if (results.count.value !== undefined) {
                console.log("VALUE!");
                itemCount = results.count.value // ElasticSearch 7
            } else {
                itemCount = results.count // ElasticSearch 6
            }
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
                />}
                {currentPage > MAX_PAGE_SIZE &&
                <MaxPageError maxPage={MAX_PAGE_SIZE} requestedPage={currentPage} />}
            </MainLayout>
        );
    }
}

const getItemCount = (results) => {
    var itemCount = 0;// default handles unexpected error
    if ("count" in results) {
        if (results.count.value !== undefined) {
            itemCount = results.count.value // ElasticSearch 7
        } else {
            itemCount = results.count // ElasticSearch 6
        }
    }
    return itemCount;
};

Search.getInitialProps = async context => {
    const query = context.query;
    const sort_order = query.sort_order || "";
    const currentUrl = getCurrentUrl(context.req);

    const q = query.q
        ? encodeURIComponent(query.q)
            .replace(/'/g, "%27")
            .replace(/"/g, "%22")
        : "";

    // filters + tags
    let filters = [ process.env.NEXT_PUBLIC_SITE_FILTER ];
    let tags = [];

    if (query.tags) {
        tags = Array.isArray(query.tags) ? query.tags : new Array(query.tags);
        filters = filters.concat(tags.map(tag => `tags:${tag}`));
    }

    // facets
    let hasDates = false;

    const facetQueries = possibleFacets
        .map(facet => {
            if (facet.indexOf("sourceResource.date") !== -1 && !hasDates) {
                hasDates = true; // do it only once for date queries
                // the date “facets” from ES do not map to the way the API expects requests
                // remove whatever is after the last period (“begin” or “end”)
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
            } else if (
                query[mapFacetsToURLPrettified[facet]] &&
                facet.indexOf("sourceResource.date") === -1
            ) {
                return `${facet}=${splitAndURIEncodeFacet(query[mapFacetsToURLPrettified[facet]])}`;
            } else {
                return "";
            }
        })
        .filter(facetQuery => facetQuery !== "")
        .join("&");

    // sort by
    let sort_by = "";
    if (query.sort_by === "title") {
        sort_by = "sourceResource.title";
    } else if (query.sort_by === "created") {
        sort_by = "sourceResource.date.begin";
    }

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

        const facetsParam = `&facets=${possibleFacets.join(",")}&${facetQueries}`;
        const filtersParam = filters.map(x => `&filter=${x}`).join("");
        const url = `${currentUrl}/api/dpla/items?exact_field_match=true&q=${q}&page=${page}&page_size=${page_size}&sort_order=${sort_order}&sort_by=${sort_by}${facetsParam}${filtersParam}`;
        const res = await fetch(url);
        let json = await res.json();

        const docs = json.docs ? json.docs.map(result => {
            const thumbnailUrl = getItemThumbnail(result);
            return Object.assign({}, result.sourceResource, {
                thumbnailUrl,
                id: result.id ? result.id : result.sourceResource["@id"],
                sourceUrl: result.isShownAt,
                provider: result.provider && result.provider.name,
                dataProvider: result.dataProvider,
                useDefaultImage: !result.object
            });
        }) : [];

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

export default withRouter(Search);
