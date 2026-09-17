import React from "react"
import Navbar from "./components/Navbar"
import MobileNavbar from "./components/MobileNavbar"
import GoogleAnalytics from "components/shared/GoogleAnalytics"
import Footer from "./components/Footer"
import SkipToContent from "components/shared/SkipToContent"

// Navbar, MobileNavbar and Footer are siblings of <main>, not children of it --
// repeated site-wide content does not belong inside the main landmark.
const MainLayout = ({ children }) => (
  <div className="container">
    <SkipToContent />
    <GoogleAnalytics>
      <Navbar />
      <MobileNavbar />
      {/* eslint-disable-next-line no-restricted-syntax -- the one <main> */}
      <main id="main" tabIndex="-1" className="container__curve">
        {children}
      </main>
      <Footer />
    </GoogleAnalytics>
  </div>
)

export default MainLayout
