import React from "react"
import Navbar from "./components/Navbar"
import MobileNavbar from "./components/MobileNavbar"
import Helmet from "react-helmet"
import GoogleAnalytics from "components/shared/GoogleAnalytics";
import Footer from "./components/Footer";

class MainLayout extends React.Component {

  render() {
    const {children} = this.props

    return (
      <div className="container">
        <GoogleAnalytics>
        <Helmet htmlAttributes={{ lang: "en" }} />
        {/* <DPLAHead
          additionalLinks={headLinks}
          pageTitle={pageTitle}
          pageImage={pageImage}
          seoType={seoType}
          pageDescription={pageDescription}
        /> */}
        <Navbar />
        <MobileNavbar />
        {children}
        {/* <Footer/> */}
        </GoogleAnalytics>
      </div>
    );
  }
}

export default MainLayout;
