import React from "react";

import ItemTermValuePair from "./ItemTermValuePair";
import FacetLink from "./FacetLink";

import { joinIfArray } from "lib";

import css from "./Content.module.scss";

const OtherMetadata = ({ item }) =>
  <div className={css.otherMetadata}>
    <dl className={css.contentDL}>
      {item.subject &&
        <ItemTermValuePair className={css.subjects} heading="Subjects">
          {item.subject.map((subj, i, subjects) =>
            <span key={i}>
              <FacetLink facet="subject" value={subj.name} />
              <br />
            </span>
          )}
        </ItemTermValuePair>}

      {item.type &&
        <ItemTermValuePair heading="Type">
          {Array.isArray(item.type)
            ? item.type.map((type, i, types) =>
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
            : item.format.map((format, i, formats) =>
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

      {item.rights &&
        <ItemTermValuePair heading="Rights">
          <div
            dangerouslySetInnerHTML={{
              __html: joinIfArray(item.rights, "<br />")
            }}
          />
        </ItemTermValuePair>}

        {item.contributor &&
        <ItemTermValuePair heading="Publisher">
          {joinIfArray(item.contributor)}
        </ItemTermValuePair>}
    </dl>
  </div>;

export default OtherMetadata;
