import React, { useState } from "react";
import { useRouter } from "next/router";

import MainLayout from "components/MainLayout";
import OptionsBar from "components/SearchPage/OptionsBar";
import FiltersList from "components/SearchPage/FiltersList";
import MainContent from "components/SearchPage/MainContent";
import MaxPageError from "components/SearchPage/MaxPageError";
import SearchError from "components/SearchPage/SearchError";
import BWSHead from "components/BWSHead";

import {
    getItemThumbnail,
    splitAndURIEncodeFacet,
} from "lib";

import {
    possibleFacets,
    mapFacetsToURLPrettified,
    pageSizeOptions,
    DEFAULT_PAGE_SIZE,
    MAX_PAGE_SIZE
} from "constants/search";

import {
    SITE_TAG
} from "constants/site";

const apiVersion = process.env.API_VERSION || "v2";

const Search = ({ results, numberOfActiveFacets, pageCount, currentPage, pageSize, query, errorState }) => {
    const router = useRouter();
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleFilters = () => setShowSidebar(prev => !prev);

    let itemCount = 0;
    if ("count" in results) {
        itemCount = results.count.value !== undefined
            ? results.count.value // ElasticSearch 7
            : results.count;      // ElasticSearch 6
    }

    return (
        <MainLayout>
            <BWSHead
                pageTitle={!query ?
                    "Search Results | DPLA" :
                    `${query} | Search Results | DPLA`}
                pageDescription={!query ?
                    "Search results" :
                    `Search results for "${query}"`}
            />
            {!errorState && <OptionsBar
                showFilters={showSidebar}
                currentPage={currentPage}
                route={router}
                itemCount={itemCount}
                onClickToggleFilters={toggleFilters}
                numberOfActiveFacets={numberOfActiveFacets}
            />}
            {!errorState && <FiltersList
                showFilters={showSidebar}
                onClickToggleFilters={toggleFilters}
                route={router}
                facets={results.facets}
            />}
            {errorState && <SearchError />}
            {!errorState && currentPage <= MAX_PAGE_SIZE &&
            <MainContent
                hideSidebar={!showSidebar}
                paginationInfo={{
                    pageCount: pageCount,
                    pageSize: pageSize || DEFAULT_PAGE_SIZE,
                    currentPage: currentPage
                }}
                route={router}
                facets={results.facets}
                results={results.docs}
            />}
            {!errorState && currentPage > MAX_PAGE_SIZE &&
            <MaxPageError maxPage={MAX_PAGE_SIZE} requestedPage={currentPage} />}
        </MainLayout>
    );
};

export async function getServerSideProps(context) {
    const query = context.query;
    const rawQ = Array.isArray(query.q) ? query.q[0] : query.q;
    const normalizedQ = rawQ?.trim() || null;
    const sort_order = query.sort_order || "";

    const q = normalizedQ
        ? encodeURIComponent(normalizedQ)
            .replace(/'/g, "%27")
            .replace(/"/g, "%22")
        : "";

    let tags = [SITE_TAG];
    if (query.tags) {
        const queryTags = Array.isArray(query.tags) ? query.tags : [query.tags];
        tags = tags.concat(queryTags);
    }

    let hasDates = false;
    const facetQueries = possibleFacets
        .map(facet => {
            if (facet.indexOf("sourceResource.date") !== -1 && !hasDates) {
                hasDates = true;
                facet = facet.replace(".begin", "").replace(".end", "");
                let dateQuery = [];
                if (query.after && !isNaN(Number(query.after))) {
                    dateQuery.push(`${facet}.after=${Number(query.after)}-01-01`);
                }
                if (query.before && !isNaN(Number(query.before))) {
                    dateQuery.push(`${facet}.before=${Number(query.before)}-12-31`);
                }
                return dateQuery.join("&");
            } else if (
                query[mapFacetsToURLPrettified[facet]] &&
                facet.indexOf("sourceResource.date") === -1
            ) {
                return `${facet}=${splitAndURIEncodeFacet(query[mapFacetsToURLPrettified[facet]])}`;
            }
            return "";
        })
        .filter(q => q !== "")
        .join("&");

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

    const page = query.page || 1;

    const emptySearchProps = {
        results: { docs: [], facets: {}, count: 0 },
        numberOfActiveFacets: 0,
        currentPage: Number(page),
        pageCount: 0,
        pageSize: page_size,
        query: normalizedQ,
        errorState: false
    };

    if (page > MAX_PAGE_SIZE) {
        context.res.statusCode = 400;
        return { props: emptySearchProps };
    }

    const numberOfActiveFacets = facetQueries
        .split(/(&|\+AND\+)/)
        .filter(f => f && f !== "+AND+" && f !== "&").length;

    const facetsParam = `&facets=${possibleFacets.join(",")}&${facetQueries}`;
    const tagsParam = tags.map(x => `&tags=${x}`).join("");
    const url =
        `${process.env.API_URL}/${apiVersion}/items?api_key=${process.env.API_KEY}` +
        `&exact_field_match=true` +
        `&q=${q}` +
        `&page=${page}` +
        `&page_size=${page_size}` +
        `&sort_order=${sort_order}` +
        `&sort_by=${sort_by}` +
        facetsParam +
        tagsParam;

    let json;
    try {
        const res = await fetch(url, {
            headers: { "DPLA-INTERNAL-ACCESS": process.env.DPLA_INTERNAL_ACCESS }
        });
        if (!res.ok) {
            console.error(`[Search] API request failed: ${res.status} ${res.statusText}`);
            // Real upstream outage (rate-limited or server error): surface a
            // retryable 503 error page so it's visible but honestly labeled.
            if (res.status === 429 || res.status >= 500) {
                context.res.statusCode = 503;
                context.res.setHeader("Retry-After", "10");
                return { props: { ...emptySearchProps, errorState: true } };
            }
            // Client 4xx (usually a 400 from a faceted filter exceeding the API's
            // 200-char limit): a bad request, not a server failure — render 404,
            // not 5xx. The old 502 mapping caused sustained false 5xx alarms (#149).
            return { notFound: true };
        }
        json = await res.json();
    } catch (error) {
        const safeMsg = (error.message || String(error)).replace(/api_key=[^&\s]*/g, "api_key=[redacted]");
        console.error("[Search] Unexpected error:", safeMsg);
        context.res.statusCode = 503;
        context.res.setHeader("Retry-After", "10");
        return { props: { ...emptySearchProps, errorState: true } };
    }

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

    let newFacets = {};
    possibleFacets.forEach(facet => {
        if (json.facets && json.facets[facet]) newFacets[facet] = json.facets[facet];
    });

    if (tags) {
        newFacets["tags"] = { "_type": "terms", "terms": tags };
    }
    json.facets = newFacets;

    const maxResults = MAX_PAGE_SIZE * page_size;
    const pageCount = json.count > maxResults ? maxResults : json.count;

    return {
        props: {
            results: Object.assign({}, json, { docs }),
            numberOfActiveFacets,
            currentPage: Number(page),
            pageCount,
            pageSize: page_size,
            query: normalizedQ,
            errorState: false
        }
    };
}

export default Search;
