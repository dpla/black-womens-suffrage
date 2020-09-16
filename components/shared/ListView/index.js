import React from "react";
import Link from "next/link";

import ListImage from "./ListImage";

import {
  googleAnalytics,
  joinIfArray,
  truncateString
} from "lib";


import { UNTITLED_TEXT, MESSAGE_DELAY, MAX_LIST_ITEMS } from "constants/site";

import css from "./ListView.module.scss";

const joinTruncate = str => truncateString(joinIfArray(str));

/**
 * @param description, item description object
 * @return HTML with truncated item description
 */
const ItemDescription = ({ description }) => {
  let str = joinTruncate(description);
  return (
      <div className={css.itemDescription}>
        <p>{str}</p>
      </div>
  );
};

function getOnClickForExternalLink(item) {
  return (event) => {
    googleAnalytics.logEvent({
      contributor: joinIfArray(item.dataProvider, ","),
      type: "Click Through",
      partner: item.provider,
      itemId: item.id,
      title: joinIfArray(item.title, ",")
    });
  };
}

class ListView extends React.Component {
  state = {
    readOnly: false,
    listsInitialized: false,
    listName: "",
    listUUID: "",
    selectedHash: {},
    lists: [],
    checkboxShown: false,
    hasList: false,
    listCreatedAt: 0,
    showMessage: ""
  };

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.showMessage !== prevState.showMessage)
      setTimeout(() => this.setState({ showMessage: "" }), MESSAGE_DELAY);
    if (this.props.name !== prevProps.name)
      this.setState({ listName: this.props.name });
  }



  render() {
    const { items, route, exportable, viewMode } = this.props;
    const {
      readOnly,
      listsInitialized,
      checkboxShown,
      hasList,
      lists,
      listUUID,
      showMessage,
      selectedHash
    } = this.state;
    const listCount = Object.keys(selectedHash).length;

    return (
        <div>
          <ul
              className={`${css.listView} ${viewMode === "grid" ? css.grid : ""}`}
          >
            {items.map((item, index) => {
              const realId = item.itemDplaId || item.id;
              return (
                  <li
                      key={index}
                      data-cy="list__item"
                      className={`${css.listItem} ${readOnly &&
                      selectedHash[realId] === undefined
                          ? css.deleted
                          : ""}`}
                  >
                    <ListImage
                        item={item}
                        title={item.title}
                        type={item.type}
                        url={item.thumbnailUrl}
                        useDefaultImage={item.useDefaultImage}
                        className={""}
                    />
                    <div className={css.itemInfo}>
                      <h2 className={`hover-underline ${css.itemTitle}`}>
                        {/* see issue #869 for details on this hack */}
                        {realId !== "http://dp.la/api/items/#sourceResource" &&
                        <Link href={item.linkHref} as={item.linkAs}>
                          <a className={`internalItemLink`}>
                            {route.pathname.indexOf("/search") === 0 && item.title
                                ? truncateString(item.title, 150)
                                : item.title ? item.title : UNTITLED_TEXT}
                          </a>
                        </Link>}
                        {/* see issue #869 for details on this hack */}
                        {realId === "http://dp.la/api/items/#sourceResource" &&
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
                      &nbsp; in {item.dataProvider}
                    </span>}
                    </div>
                  </li>
              );
            })}
          </ul>
        </div>
    );
  }
}

export default ListView;
