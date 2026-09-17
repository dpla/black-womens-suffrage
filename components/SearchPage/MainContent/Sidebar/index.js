import React from "react";
import Link from "next/link";
import Router from "next/router";

import Button from "components/shared/Button";
import Accordion from "components/shared/Accordion";

import {
  possibleFacets,
  mapFacetsToURLPrettified,
  prettifiedFacetMap,
  DATE_FACET_ID
} from "constants/search";

import { addCommasToNumber, escapeForRegex, removeQueryParams } from "lib";

import css from "./Sidebar.module.scss";

const FacetLink = ({ route, queryKey, termObject, disabled }) =>
  disabled
    ? <span className={[css.facet].join(" ")}>
        <span className={[css.facetName, css.activeFacetName].join(" ")}>
          {`${termObject.term} `}
        </span>
        <span className={css.facetCount}>
          {addCommasToNumber(termObject.count)}
        </span>
      </span>
    : <Link
        href={{
          pathname: route.pathname,
          query: Object.assign({}, route.query, {
            // some facet names have spaces, and we need to wrap them in " "
            [queryKey]: route.query[queryKey]
              ? [`${route.query[queryKey]}`, `"${[termObject.term]}"`].join("|")
              : `"${termObject.term}"`,
            page: 1
          })
        }}
        className={css.facet}
      >
        <span className={css.facetName}>
          {`${termObject.term} `}
        </span>
        <span className={css.facetCount}>
          {addCommasToNumber(termObject.count)}
        </span>
      </Link>;

class DateFacet extends React.Component {
  // Was componentWillMount.
  state = {
    after: this.props.after || "",
    before: this.props.before || ""
  };

  // Deliberately a behaviour change, and the correct one: the old
  // componentWillReceiveProps compared incoming props against local *state*, so
  // a parent re-render could overwrite what the user was mid-way through
  // typing. This triggers on a real props change instead. Returning null when
  // the values already match preserves the no-op bail-out the old comparison
  // got by accident -- without it, submitting a date re-renders twice.
  componentDidUpdate(prevProps) {
    if (
      prevProps.after === this.props.after &&
      prevProps.before === this.props.before
    ) {
      return;
    }
    const after = this.props.after || "";
    const before = this.props.before || "";
    this.setState(
      state =>
        state.after === after && state.before === before
          ? null
          : { after, before }
    );
  }

  cleanText(target, compare) {
    let year = target.value;
    if (isNaN(target.value)) {
      year = compare;
      target.value = year;
    }
    return year;
  }

  handleAfterText = event => {
    let year = this.cleanText(event.target, this.state.after);
    this.setState({ after: year });
  };

  validateAfter = event => {
    let year = this.cleanText(event.target, this.state.after);
    if (year !== "" && this.state.before !== "" && year > this.state.before) {
      this.setState(prevState => ({ after: prevState.before }));
    }
  };

  handleBeforeText = event => {
    let year = this.cleanText(event.target, this.state.before);
    this.setState({ before: year });
  };

  validateBefore = event => {
    let year = this.cleanText(event.target, this.state.before);
    if (year !== "" && this.state.after !== "" && year < this.state.after) {
      this.setState(prevState => ({ before: prevState.after }));
    }
  };

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      this.handleDateSubmit(e);
    }
  }

  handleDateSubmit(e) {
    e.preventDefault();
    const dateProps = this.getDateProps();
    Router.push({
      pathname: this.props.route.pathname,
      query: Object.assign(
        {},
        removeQueryParams(this.props.route.query, ["after", "before"]),
        dateProps,
        {
          page: 1
        }
      )
    });
  }

  getDateProps() {
    let dateProps = {};
    if (this.state.after !== "") dateProps.after = this.state.after;
    if (this.state.before !== "") dateProps.before = this.state.before;
    return dateProps;
  }

  render() {
    // NOTE: this form should maybe be wrapping the entire sidebar?
    const formVals = Object.assign(
      {},
      removeQueryParams(this.props.route.query, ["after", "before", "page"]),
      {
        page: 1
      }
    );
    return (
      <form
        action={this.props.route.pathname}
        method="get"
        className={css.dateRangeFacet}
        onSubmit={e => this.handleDateSubmit(e)}
      >
        <label className={css.dateFacet} htmlFor="after-date">
          <input
            id="after-date"
            type="numeric"
            name="after"
            value={this.state.after}
            onChange={e => this.handleAfterText(e)}
            onBlur={e => this.validateAfter(e)}
            onKeyDown={e => this.handleKeyDown(e)}
            placeholder="Start Year"
          />
        </label>
        <label className={css.dateFacet} htmlFor="before-date">
          <input
            id="before-date"
            type="numeric"
            name="before"
            value={this.state.before}
            onChange={e => this.handleBeforeText(e)}
            onBlur={e => this.validateBefore(e)}
            onKeyDown={e => this.handleKeyDown(e)}
            placeholder="End Year"
          />
        </label>
        {Object.entries(formVals).map(([k, v], index) => {
          return <input type="hidden" name={k} key={index} value={v} />;
        })}
        <Button type="secondary" className={css.dateButton} mustSubmit={true}>
          SET
        </Button>
      </form>
    );
  }
}

class Sidebar extends React.Component {
  render() {
    const { route, facets } = this.props;
    const isFacetValueInQuery = (facetKey, value) =>
      route.query[mapFacetsToURLPrettified[facetKey]] &&
      // handles case of sources with both
      // "moving image" and "image" as types
      new RegExp('"' + escapeForRegex(value) + '"').test(
        route.query[mapFacetsToURLPrettified[facetKey]]
      );
    const isDateKey = key => key.indexOf("sourceResource.date") === 0;
    // facets also carries "tags", a synthetic entry the search page injects to
    // hold the site filter. It is not browsable, and possibleFacets is already
    // the list of real ones, so reuse it rather than naming "tags" here.
    const displayable = Object.keys(facets).filter(key =>
      possibleFacets.includes(key)
    );
    // date.begin and date.end both describe the one Date accordion; the first
    // present key builds it and the other is dropped.
    const dateKey = displayable.find(isDateKey);

    const termItem = (key, i) => ({
      id: key,
      name: prettifiedFacetMap[key],
      // first two items should be expanded as well as any items
      // with an active subitem found in the query string
      active:
        i < 2 ||
        facets[key].terms.some(termObject =>
          isFacetValueInQuery(key, termObject.term)
        ),
      type: "term",
      subitems: facets[key].terms.map(termObject => ({
        id: termObject.term,
        content: (
          <FacetLink
            route={route}
            termObject={termObject}
            queryKey={mapFacetsToURLPrettified[key]}
            disabled={isFacetValueInQuery(key, termObject.term)}
          />
        )
      }))
    });

    const dateItem = key => {
      const dateProps = {};
      if (route.query.after) dateProps.after = route.query.after;
      if (route.query.before) dateProps.before = route.query.before;
      return {
        id: DATE_FACET_ID,
        name: prettifiedFacetMap[key],
        active: true,
        type: "date",
        subitems: <DateFacet route={route} {...dateProps} />
      };
    };

    // Accordion renders whatever it is handed, so drop anything with nothing to
    // show here rather than leaving holes for it to skip over.
    const items = displayable
      .map((key, i) => {
        if (key === dateKey) return dateItem(key);
        if (isDateKey(key)) return null;
        return facets[key].terms.length ? termItem(key, i) : null;
      })
      .filter(Boolean);

    return (
      <div className={css.sidebar}>
        <h2>REFINE YOUR SEARCH</h2>
        <Accordion items={items} />
      </div>
    );
  }
}

export default Sidebar;
