import React from "react";
import Link from "next/link";

import ListImage from "./ListImage";
import ListNameModal from "../../../components/ListComponents/ListNameModal";
import Alert from "../../shared/Alert";

import {
  joinIfArray,
  truncateString,
  bindLinkEvent
} from "../../../lib";


import { UNTITLED_TEXT, MESSAGE_DELAY, MAX_LIST_ITEMS } from "../../../constants/site";

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
    this.bindClickThroughEvent();
    this.bindBrowseEvent();
  }

  bindClickThroughEvent() {
    const links = document.getElementsByClassName("clickThrough");
    const items = this.props.items;

    // Iterate through links.
    Array.from(links).forEach(function(link) {
      // Find item with sourceUrl that matches link href.
      const item = items.filter(function(i) {
        return i.sourceUrl === link.href;
      })[0];

      // Sanity check
      if (item) {
        const gaEvent = {
          type: "Click Through",
          itemId: item.id,
          title: joinIfArray(item.title),
          partner: joinIfArray(item.provider),
          contributor: joinIfArray(item.dataProvider)
        };

        bindLinkEvent(gaEvent, [link]);
      }
    });
  }

  bindBrowseEvent() {
    const path = window.location.pathname;
    // Check if path starts with "/browse-by-topic" (backward compatible in IE).
    // Need to check b/c component is shared between search and browse pages.
    if (path.indexOf("/browse-by-topic") === 0) {
      const links = document.getElementsByClassName("internalItemLink");
      const items = this.props.items;

      // Iterate through links.
      Array.from(links).forEach(function(link) {
        // Find item with linkAs property that matches end of link href.
        // item.linkAs is relative URL; link.href is full URL.
        const item = items.filter(function(i) {
          const suffix = i.linkAs;
          const str = link.href;
          return str.indexOf(suffix, str.length - suffix.length) !== -1;
        })[0];

        // Sanity check
        if (item) {
          const gaEvent = {
            type: "Browse Item",
            itemId: item.id,
            title: joinIfArray(item.title),
            partner: joinIfArray(item.provider),
            contributor: joinIfArray(item.dataProvider)
          };

          bindLinkEvent(gaEvent, [link], "_self");
        }
      });
    }
  }


  componentDidUpdate(prevProps, prevState) {
    if (this.state.showMessage !== prevState.showMessage)
      setTimeout(() => this.setState({ showMessage: "" }), MESSAGE_DELAY);
    if (this.props.name !== prevProps.name)
      this.setState({ listName: this.props.name });
  }


  render() {
    const { items, route, viewMode } = this.props;
    const {
      readOnly,
      checkboxShown,
      showMessage,
      selectedHash
    } = this.state;
    const listCount = Object.keys(selectedHash).length;

    return (
      <div>

        <Alert showMessage={showMessage} />

        <ul
          className={`${css.listView} ${viewMode === "grid" ? css.grid : ""}`}
        >
          {items.map((item, index) => {
            const realId = item.itemDplaId || item.id;
            const checked = selectedHash[realId] !== undefined;
            const shouldDisable =
              (!checked && listCount >= MAX_LIST_ITEMS) ||
              realId === "http://dp.la/api/items/#sourceResource";
            const disabledMessage = `Maximum ${MAX_LIST_ITEMS} items per list.`;
            return (
              <li
                key={index}
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
                    rel="noopener noreferrer"
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
                {!readOnly &&
                  <label
                    className={`${css.checkboxLabel} ${checkboxShown
                      ? ""
                      : css.collapsed} ${shouldDisable ? css.disabled : ""}`}
                    htmlFor={`checkbox-${realId}`}
                    title={shouldDisable ? disabledMessage : ""}
                  >
                    <input
                      className={`${css.checkboxInput} ${!checked &&
                        listCount >= MAX_LIST_ITEMS
                        ? css.disabled
                        : ""}`}
                      type="checkbox"
                      title={shouldDisable ? disabledMessage : ""}
                      data-id={realId}
                      onChange={this.onCheckItem}
                      checked={selectedHash[realId] !== undefined}
                      disabled={shouldDisable ? true : false}
                      key={`checkbox-${realId}`}
                      id={`checkbox-${realId}`}
                    />
                    {!checked && listCount >= MAX_LIST_ITEMS
                      ? "Can’t add more"
                      : "Add to list"}
                  </label>}
                {readOnly &&
                  <label
                    className={`${css.checkboxLabel} ${css.remove} ${checkboxShown
                      ? ""
                      : css.collapsed} ${shouldDisable ? css.disabled : ""}`}
                    htmlFor={`checkbox-remove-${realId}`}
                    title={shouldDisable ? disabledMessage : ""}
                  >
                    <input
                      className={`${css.checkboxInput} ${css.remove}`}
                      type="checkbox"
                      data-id={realId}
                      onChange={this.onRemoveItem}
                      checked={selectedHash[realId] === undefined}
                      key={`checkbox-remove-${realId}`}
                      id={`checkbox-remove-${realId}`}
                    />
                    Remove from list
                  </label>}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ListView;
