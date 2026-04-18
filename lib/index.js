// Files marked [sync] are duplicated in dpla-frontend/lib/ and should be kept
// in sync manually. When improving a [sync] file here, apply the same change
// there, and vice versa. Exception: readMyRights.js — the CC fast-path differs
// because this repo's constants/site.js uses {version} placeholders while
// dpla-frontend's constants/rights.js uses fully-versioned keys.
//
// [sync]: addCommasToNumber.js, createUUID.js, deepCopyObject.js, endsWith.js,
//         extractItemId.js, formatDate.js, getDefaultThumbnail.js,
//         getFullPath.js, getItemThumbnail.js, getSearchPageTitle.js,
//         joinIfArray.js, readMyRights.js, removeEndPunctuation.js,
//         removeQueryParams.js, truncateString.js

import getCurrentUrl from "./getCurrentUrl";
import getDefaultThumbnail from "./getDefaultThumbnail";
import getItemThumbnail from "./getItemThumbnail";
import getSearchPageTitle from "./getSearchPageTitle";
import joinIfArray from "./joinIfArray";
import addCommasToNumber from "./addCommasToNumber";
import splitAndURIEncodeFacet from "./splitAndURIEncodeFacet";
import escapeForRegex from "./escapeForRegex";
import removeQueryParams from "./removeQueryParams";
import createUUID from "./createUUID";
import deepCopyObject from "./deepCopyObject";
import truncateString from "./truncateString";
import addLinkInfoToResults from "./addLinkInfoToResults";
import getFullPath from "./getFullPath";
import removeEndPunctuation from "./removeEndPunctuation";
import formatDate from "./formatDate";
import getCurrentFullUrl from "./getCurrentFullUrl";
import readMyRights from "./readMyRights";
import googleAnalytics from "./googleAnalytics";

export {
    getCurrentUrl,
    getDefaultThumbnail,
    getItemThumbnail,
    splitAndURIEncodeFacet,
    getSearchPageTitle,
    joinIfArray,
    addCommasToNumber,
    escapeForRegex,
    removeQueryParams,
    createUUID,
    deepCopyObject,
    truncateString,
    addLinkInfoToResults,
    getFullPath,
    removeEndPunctuation,
    formatDate,
    getCurrentFullUrl,
    readMyRights,
    googleAnalytics
}

