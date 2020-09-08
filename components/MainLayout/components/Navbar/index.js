import React, { Component } from 'react'
import Link from 'next/link'
import scss from "./Navbar.module.scss"
import SearchBar from "components/shared/SearchBar";

class Navbar extends Component {
  constructor() {
    super()

    this.state = {
      showSearchbar: false
    }

  }

  triggerSearchbar = () => {
    this.setState({
      showSearchbar: !this.state.showSearchbar
    })
  }


  render() {

    return (
      <>

        <nav className={scss.navbar}>
          <div className={scss.nav__logo}>
            <Link href="/">
              <a>
                <img src="/static/logo/dpla_bws-logo-color-nav.png" />
              </a>
            </Link>
          </div>

          <ul className={scss.nav__links}>
            <li>
            <Link href="/about">
              <a>About</a>
            </Link></li>

            <li><Link href="/timeline">
              <a>Timeline</a>
            </Link></li>

            <li><Link href="/key-figures">
              <a>Key Figures</a>
            </Link></li>

            <li><Link href="/collections">
              <a>Collections</a>
            </Link></li>

            <li><Link href="/partners">
              <a>Partners</a>
            </Link></li>
          <li><div className={scss.divider}/></li>
          <li><a href="https://dp.la" target="_blank" rel="noopener">Visit DPLA</a></li>
          <li><div className={scss.divider}/></li>
          <li><img src={"/static/icon/search/search-bar.svg"} alt="Search Bar" className={scss.searchIcon} onClick={this.triggerSearchbar} /></li>
          </ul>
        </nav>

        {this.state.showSearchbar &&
          <SearchBar />
        }
      </>
    )
  }
}

export default Navbar