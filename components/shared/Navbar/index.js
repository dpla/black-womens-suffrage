import React, { Component } from 'react'
import Link from 'next/link'
import scss from "../Navbar/Navbar.module.scss"

class Navbar extends Component {
  render() {

    return (
      <nav id={scss.navbar}>
        {/* logo and mobile menu icon*/}
        <div id={scss.navLogo}>
          <img src="../static/images/logo/dpla_bws-logo-color-nav.png" />
        </div>

        {/* nav links */}
          <div id={scss.navLinks}>
            <Link href="/about">
              <a>About</a>
            </Link>

            <Link href="/timeline">
              <a>Timeline</a>
            </Link>

            <Link href="/key-figures">
              <a>Key Figures</a>
            </Link>

            <Link href="/collections">
              <a>Collections</a>
            </Link>

            <Link href="/topics">
              <a>Topics</a>
            </Link>

            <Link href="/partners">
              <a>Partners</a>
            </Link>

            <a href="https://dp.la" target="_blank">Visit DPLA</a>

            <img src={"../static/images/icon/search/search-bar.svg"} alt="search-bar" id={scss.searchBar}/>
          </div>
        
      </nav>
    )
  }
}



export default Navbar