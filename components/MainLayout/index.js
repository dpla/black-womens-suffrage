import React from "react"
import Router from "next/router"
import Navbar from "./components/Navbar"
// import MobileNavbar from "../shared/MobileNavbar"
import Helmet from "react-helmet"
import DPLAHead from "../DPLAHead"
import Footer from "./components/Footer"

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
    const {children} = this.props

    return (
      <div className="container">
        <Helmet htmlAttributes={{ lang: "en" }} />
        {/* <DPLAHead
          additionalLinks={headLinks}
          pageTitle={pageTitle}
          pageImage={pageImage}
          seoType={seoType}
          pageDescription={pageDescription}
        /> */}
        <Navbar />
        {/* <MobileNavbar /> */}
        {children}

        <Footer />
      </div>
    );
  }
}

export default MainLayout;
