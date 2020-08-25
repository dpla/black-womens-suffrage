import React, { Component } from 'react'
import Link from 'next/link'
import scss from "./Navbar.module.scss"
import SearchBar from "components/shared/SearchBar";

class Navbar extends Component {
  render() {

    return (
      <nav className={scss.navbar}>
        <div className={scss.nav__logo}>
          <Link href="/">
            <a>
              <img src="/static/logo/dpla_bws-logo-color-nav.png" />
            </a>
          </Link>
        </div>

          <div className={scss.nav__links}>
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

            <img src={"/static/icon/search/search-bar.svg"} alt="search-bar" id={scss.searchbar}/>
            <SearchBar/>
          </div>
        
      </nav>
    )
  }
}



export default Navbar