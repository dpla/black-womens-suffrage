import React from "react";
import Link from "next/link";

import ListImage from "./ListImage";

import {
  googleAnalytics,
  joinIfArray,
  truncateString
} from "lib";


import { UNTITLED_TEXT } from "constants/site";

import css from "./ListView.module.scss";

/**
 * @param description, item description object
 * @return HTML with truncated item description
 */
const ItemDescription = ({ description }) => (
  <div className={css.itemDescription}>
    <p>{truncateString(description)}</p>
  </div>
);

function getOnClickForExternalLink(item) {
  return () => {
    googleAnalytics.logEvent({
      contributor: joinIfArray(item.dataProvider, ","),
      type: "Click Through",
      partner: item.provider,
      itemId: item.id,
      title: joinIfArray(item.title, ",")
    });
  };
}

const ListView = ({ items, route, viewMode }) => (
  <div>
    <ul className={`${css.listView} ${viewMode === "grid" ? css.grid : ""}`}>
      {items.map((item, index) => (
        <li key={index} data-cy="list__item" className={css.listItem}>
          <ListImage
            item={item}
            title={item.title}
            type={item.type}
            url={item.thumbnailUrl}
            useDefaultImage={item.useDefaultImage}
          />
          <div className={css.itemInfo}>
            <h2 className={`hover-underline ${css.itemTitle}`}>
              {/* see issue #869 for details on this hack */}
              {item.id !== "http://dp.la/api/items/#sourceResource" &&
                <Link href={item.linkHref} className="internalItemLink">
                  {route.pathname.indexOf("/search") === 0 && item.title
                    ? truncateString(item.title, 150)
                    : item.title ? item.title : UNTITLED_TEXT}
                </Link>}
              {/* see issue #869 for details on this hack */}
              {item.id === "http://dp.la/api/items/#sourceResource" &&
                <span>
                  {route.pathname.indexOf("/search") === 0 && item.title
                    ? truncateString(item.title, 150)
                    : item.title ? item.title : UNTITLED_TEXT}
                </span>}
            </h2>
            {(item.date || item.creator) &&
              <span className={css.itemAuthorAndDate}>
                {route.pathname.indexOf("/search") === 0 &&
                  item.date &&
                  <span>{item.date.displayDate}</span>}
                {route.pathname.indexOf("/search") === 0 &&
                  item.date &&
                  item.date.displayDate &&
                  item.creator &&
                  <span> · </span>}
                <span>
                  {truncateString(joinIfArray(item.creator, ", "))}
                </span>
              </span>}
            <ItemDescription description={item.description} />
            <a
              href={item.sourceUrl}
              target="_blank"
              rel="noopener"
              onClick={getOnClickForExternalLink(item)}
              className={`hover-underline clickThrough external ${css.itemSource}`}
            >
              {item.type === "image"
                ? "View Full Image"
                : item.type === "text"
                  ? "View Full Text"
                  : "View Full Item"}
            </a>
            {item.dataProvider &&
              <span className={`${css.itemProvider}`}>
                &nbsp; in {item.dataProvider.name}
              </span>}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default ListView;
