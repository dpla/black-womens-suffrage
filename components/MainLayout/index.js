import React from "react"
import Navbar from "./components/Navbar"
import Helmet from "react-helmet"
import GoogleAnalytics from "components/shared/GoogleAnalytics";

class MainLayout extends React.Component {

  render() {
    const {children} = this.props

    return (
      <div className="container">
        <GoogleAnalytics>
            <Helmet htmlAttributes={{ lang: "en" }} />
            <Navbar />
            {children}
        </GoogleAnalytics>
      </div>
    );
  }
}

export default MainLayout;
