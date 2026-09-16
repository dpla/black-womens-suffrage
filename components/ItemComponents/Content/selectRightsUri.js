import { readMyRights } from "lib";

/**
 * The standardized rights value for an item.
 *
 * Prefers edmRights, which is where the API puts the statement URI when it has
 * one. Otherwise falls back to sourceResource.rights, which is mostly free text
 * and, when it does carry a URI, rarely carries it first -- so the array is
 * searched for the first value readMyRights recognizes rather than taking [0].
 *
 * Both metadata components select through here so the badge and the
 * "Standardized Rights Statement" block can never disagree about which value
 * they are describing.
 *
 * @param item the mapped item
 * @return a rights URI string, or null
 */
const selectRightsUri = item => {
  if (item.edmRights) return item.edmRights;
  if (Array.isArray(item.rights)) {
    return item.rights.find(value => value && readMyRights(value)) || null;
  }
  return item.rights || null;
};

export default selectRightsUri;
