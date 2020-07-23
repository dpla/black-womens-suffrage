import React from "react";
import Router from "next/router";

import * as gtag from "lib/gtag";
import { getFullPath, getCurrentFullUrl } from "lib";

import { SITE_ENV } from "constants/env";

class MainLayout extends React.Component {
  // Google Analytics tracking for MainLayout-using pages
  componentDidMount() {
    Router.onRouteChangeComplete = url => this.trackPageview();
  }

  trackPageview() {
    const fullPath = getFullPath();
    const fullUrl = getCurrentFullUrl();

    if (fullPath !== this.lastTrackedPath) {
      gtag.pageview({
        path: fullPath,
        url: fullUrl,
        title: this.props.pageTitle
      });
      this.lastTrackedPath = fullPath;
    }
  }

  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default MainLayout;
