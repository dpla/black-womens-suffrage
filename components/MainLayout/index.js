import React from "react"
import Navbar from "./components/Navbar"
import MobileNavbar from "./components/MobileNavbar"
import GoogleAnalytics from "components/shared/GoogleAnalytics"
import Footer from "./components/Footer"

const MainLayout = ({ children }) => (
  <main className="container">
    <GoogleAnalytics>
      <Navbar />
      <MobileNavbar />
      <div className="container__curve">
        {children}
      </div>
      <Footer />
    </GoogleAnalytics>
  </main>
)

export default MainLayout
