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

class OptionsBar extends React.Component {
  componentWillMount() {
    const { sort_by, sort_order, page_size } = this.props.route.query;
    this.setState({
      sortValue: getSortOptionFromParams({
        sortBy: sort_by || "",
        sortOrder: sort_order || ""
      }),
      pageSizeValue: page_size || DEFAULT_PAGE_SIZE
    });
  }

  componentWillReceiveProps(nextProps) {
    const { sort_by, sort_order, page_size } = this.props.route.query;
    const {
      sort_by: next_sort_by,
      sort_order: next_sort_order,
      page_size: next_page_size
    } = nextProps.route.query;
    if (
      next_sort_by !== sort_by ||
      next_sort_order !== sort_order ||
      next_page_size !== page_size
    ) {
      this.setState({
        sortValue: getSortOptionFromParams({
          sortBy: next_sort_by || "",
          sortOrder: next_sort_order || ""
        }),
        pageSizeValue: next_page_size || "10"
      });
    }
  }

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

  toggleFilters = () => {
    this.setState({ showFilters: !this.state.showFilters });
  };

  render() {
    const {
      currentPage,
      onClickToggleFilters,
      showFilters,
      numberOfActiveFacets
    } = this.props;
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
                  value={this.state.pageSizeValue}
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
                  value={this.state.sortValue}
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
                  >
                    <a
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
                    </a>
                  </Link>
                  <Link
                    href={{
                      pathname: this.props.route.pathname,
                      query: Object.assign({}, this.props.route.query, {
                        list_view: "grid"
                      })
                    }}
                  >
                    <a
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
                    </a>
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
