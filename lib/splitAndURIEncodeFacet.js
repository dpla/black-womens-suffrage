import joinIfArray from "./joinIfArray";

const splitAndURIEncodeFacet = facet =>
    joinIfArray(facet, "|")
        .split("|")
        .map(param => encodeURIComponent(param))
        .join("+AND+");

export default splitAndURIEncodeFacet;