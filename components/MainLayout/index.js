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
      <main className="container">
        <GoogleAnalytics>
        <Helmet htmlAttributes={{ lang: "en" }} />
        <Navbar />
        <MobileNavbar />
        <div className="container__curve">
          {children}
        </div>
        <Footer/>
        </GoogleAnalytics>
      </main>
    );
  }
}

export default MainLayout;
