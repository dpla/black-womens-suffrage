import React from "react";

import ItemTermValuePair from "./ItemTermValuePair";
import FacetLink from "./FacetLink";

import { joinIfArray, readMyRights } from "lib";

import css from "./Content.module.scss";

const OtherMetadata = ({ item }) => {
  const rights = item.edmRights ? readMyRights(item.edmRights) : null;
  return (
    <div className={css.otherMetadata}>
      <dl className={css.contentDL}>
        {item.partner &&
          <ItemTermValuePair heading="Partner">
            <FacetLink facet="partner" value={item.partner} />
          </ItemTermValuePair>}

        {item.contributor &&
          <ItemTermValuePair heading="Contributing Institution">
            <FacetLink
              facet="provider"
              value={item.contributor}
              facetLabel="contributing institution"
            />
          </ItemTermValuePair>}
        {item.intermediateProvider &&
          <ItemTermValuePair heading="Supporting Institution">
            <FacetLink facet="provider" value={item.intermediateProvider} />
          </ItemTermValuePair>}

        {item.subject &&
          <ItemTermValuePair className={css.subjects} heading="Subjects">
            {item.subject.map((subj, i) =>
              <span key={subj?.name ?? i}>
                <FacetLink facet="subject" value={subj?.name} />
                <br />
              </span>
            )}
          </ItemTermValuePair>}

        {item.type &&
          <ItemTermValuePair heading="Type">
            {Array.isArray(item.type)
              ? item.type.map((type, i) =>
                  <span key={i}>
                    <FacetLink facet="type" value={type} /><br />
                  </span>
                )
              : <FacetLink facet="type" value={item.type} />}
          </ItemTermValuePair>}

        {item.format &&
          <ItemTermValuePair heading="Format">
            {!Array.isArray(item.format)
              ? <div>{item.format}</div>
              : item.format.map((format, i) =>
                  <div key={i}>{format}</div>
                )}
          </ItemTermValuePair>}

        <div className={css.divider}></div>

        {item.sourceUrl &&
          <ItemTermValuePair heading="URL">
            <a
              className="link clickThrough external"
              href={item.sourceUrl}
              target="_blank"
            >
              {item.sourceUrl}
            </a>
          </ItemTermValuePair>}

        {rights &&
          <ItemTermValuePair heading="Standardized Rights Statement">
            {rights.description}
            {rights.description !== "" && <br />}
            <a
              href={item.edmRights}
              className="link external"
              rel="noopener noreferrer"
            >
              {item.edmRights}
            </a>
          </ItemTermValuePair>}

        {item.rights &&
          <ItemTermValuePair heading="Rights">
            <div
              dangerouslySetInnerHTML={{
                __html: joinIfArray(item.rights, "<br />")
              }}
            />
          </ItemTermValuePair>}

        {item.publisher &&
          <ItemTermValuePair heading="Publisher">
            {joinIfArray(item.publisher)}
          </ItemTermValuePair>}
      </dl>
    </div>
  );
};

export default OtherMetadata;
