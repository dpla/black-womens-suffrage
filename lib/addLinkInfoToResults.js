import extractItemId from "./extractItemId";

const addLinkInfoToResults = (results) =>
  results.map((item) => {
    const itemId = item.id ?? extractItemId(item["@id"]);
    return Object.assign({}, item, {
      linkHref: `/item/${itemId}`,
    });
  });

export default addLinkInfoToResults;
