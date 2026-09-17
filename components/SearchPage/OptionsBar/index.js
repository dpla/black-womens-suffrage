import React from "react";
import Link from "next/link";
import Router from "next/router";

import { addCommasToNumber } from "lib";
import {
  sortOptions,
  pageSizeOptions,
  mapSortOptionsToParams,
  getSortOptionFromParams,
  DEFAULT_PAGE_SIZE
} from "constants/search";

import css from "./OptionsBar.module.scss";

const gridViewIcon = "/static/icon/search/icon-search-view-grid-selected.svg";
const inactiveGridViewIcon = "/static/icon/search/icon-search-view-grid-inactive.svg";
const listViewIcon = "/static/icon/search/icon-search-view-list-selected.svg";
const inactiveListViewIcon = "/static/icon/search/icon-search-view-list-inactive.svg";

// Both dropdowns are pure functions of the URL query -- the change handlers only
// Router.push, they never write state -- so they are derived in render rather
// than mirrored. That removes the props-to-state sync the deprecated
// componentWillMount/componentWillReceiveProps pair existed to maintain.
class OptionsBar extends React.Component {
  onPageSizeChange = val => {
    Router.push({
      pathname: "/search",
      query: Object.assign({}, this.props.route.query, {
        page_size: val.target.value,
        page: 1
      })
    });
  };

  onSortChange = val => {
    Router.push({
      pathname: "/search",
      query: Object.assign({}, this.props.route.query, {
        sort_by: mapSortOptionsToParams[val.target.value].sort_by,
        sort_order: mapSortOptionsToParams[val.target.value].sort_order,
        page: 1
      })
    });
  };

  render() {
    const {
      currentPage,
      onClickToggleFilters,
      showFilters,
      numberOfActiveFacets
    } = this.props;
    const { sort_by, sort_order, page_size } = this.props.route.query;
    const sortValue = getSortOptionFromParams({
      sortBy: sort_by || "",
      sortOrder: sort_order || ""
    });
    const pageSizeValue = page_size || DEFAULT_PAGE_SIZE;
    return (
      <>
        <div className={css.wrapper}>
          <div className={css.optionsBar + ``}>
            <div className={css.resultsAndFilter}>
              <div className={css.optionWrapper}>
                <label
                  htmlFor="options-bar-page-size"
                  className={css.optionHeader}
                >
                  Show:
                </label>
                <select
                  id="options-bar-page-size"
                  value={pageSizeValue}
                  onChange={this.onPageSizeChange}
                >
                  {pageSizeOptions.map((item, index) =>
                    <option value={item.value} key={index}>
                      {item.label}
                    </option>
                  )}
                </select>
              </div>
              <h1 className={css.resultsCount}>
                <span>
                  of {addCommasToNumber(this.props.itemCount)} results{" "}
                </span>
                {this.props.route.query.q &&
                  <span className={css.resultsCountQuery}>
                    <span>for </span>
                    <span className={css.resultsCountQueryText}>
                      {this.props.route.query.q}
                    </span>
                  </span>}
              </h1>


              <button
                onClick={() => onClickToggleFilters()}
                aria-expanded={showFilters}
                className={`${css.toggleFilters} ${showFilters
                  ? css.showFilters
                  : ""} ${numberOfActiveFacets !== 0
                    ? css.withActiveFacets
                    : ""}`}
              >
                <span>Filters</span>
                {numberOfActiveFacets !== 0 &&
                  <span className={css.activeFacetCount}>
                    ({numberOfActiveFacets})
                </span>}
                <img className={css.filtersButtonChevron} src="static/icon/search/icon-search-dropdown.svg"
                  alt="Dropdown menu icon" />
              </button>
            </div>

            <div className={css.options}>
              <div className={css.optionWrapper}>
                <label htmlFor="options-bar-sort-by" className={css.optionHeader}>
                  Sort
                </label>
                <select
                  id="options-bar-sort-by"
                  value={sortValue}
                  onChange={this.onSortChange}
                >
                  {sortOptions.map((item, index) =>
                    <option value={item.value} key={index}>
                      {item.label}
                    </option>
                  )}
                </select>
              </div>
              <div className={css.optionWrapper}>
                <div className={css.viewButtons}>
                  <Link
                    href={{
                      pathname: this.props.route.pathname,
                      query: Object.assign({}, this.props.route.query, {
                        list_view: "list"
                      })
                    }}
                    className={[
                      css.listViewButton,
                      this.props.route.query.list_view === "grid"
                        ? css.viewButtonInactive
                        : css.viewButtonActive
                    ].join(" ")}
                  >
                    <img
                      className={css.viewButtonIcon}
                      src={this.props.route.query.list_view === "grid" ? inactiveListViewIcon : listViewIcon}
                      alt="List View"
                    />
                  </Link>
                  <Link
                    href={{
                      pathname: this.props.route.pathname,
                      query: Object.assign({}, this.props.route.query, {
                        list_view: "grid"
                      })
                    }}
                    className={[
                      css.gridViewButton,
                      this.props.route.query.list_view === "grid"
                        ? css.viewButtonActive
                        : css.viewButtonInactive
                    ].join(" ")}
                  >
                    <img
                      className={css.viewButtonIcon}
                      src={this.props.route.query.list_view === "grid" ? gridViewIcon : inactiveGridViewIcon}
                      alt="Grid View"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className={css.pageNumber}>Page {currentPage}</p>
      </>
    );
  }
}

export default OptionsBar;
