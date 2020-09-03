import React from "react";
import { withRouter } from "next/router";

import MainMetadata from "./MainMetadata";
import OtherMetadata from "./OtherMetadata";
import JsonLdMarkup from "./JsonLdMarkup";

import { getFullPath, joinIfArray, googleAnalytics } from "lib";
import { UNTITLED_TEXT } from "constants/site";

import css from "./Content.module.scss";
import {initGA, logPageView} from "../../../lib/googleAnalytics";

class Content extends React.Component {
  // items track the clickthroughs and the view for the partner
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    this.trackItemView();
  }

  trackItemView() {
    const fullPath = getFullPath();
    const itemId = this.props.router.query.itemId;
    const title = joinIfArray(this.props.item.title, ", ");
    const contributor = joinIfArray(this.props.item.contributor, ", ");
    const partner = joinIfArray(this.props.item.partner, ", ");

    if (fullPath !== this.lastTrackedPath) {
      const gaEvent = {
        type: "View Item",
        itemId: itemId,
        title: title,
        partner: partner,
        contributor: contributor
      };

      this.lastTrackedPath = fullPath;
      googleAnalytics.logEvent(gaEvent);
    }
  }

  render() {
    const { item, url } = this.props;
    return (
      <div className={`section__default ${css.content}`}>
        {/* <h1 className={css.title}>
          {item.title && item.title !== "" ? item.title : UNTITLED_TEXT}
        </h1> */}
        <MainMetadata item={item} />
        <OtherMetadata item={item} />
        <JsonLdMarkup item={item} url={url} />
      </div>
    );
  }
}

export default withRouter(Content);
