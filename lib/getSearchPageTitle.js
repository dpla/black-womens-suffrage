// Text for meta title elements for the search page.

const getSearchPageTitle = queryTerms => {
  return queryTerms === undefined || queryTerms === ""
    ? "Search Results"
    : `${queryTerms} | Search Results`;
};

export default getSearchPageTitle;
