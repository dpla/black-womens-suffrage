import React, { Component } from 'react'
import Link from 'next/link'
import scss from "./Navbar.module.scss"
import SearchBar from "components/shared/SearchBar";
import ActiveLink from './ActiveLink'

class Navbar extends Component {
  constructor() {
    super()

    this.state = {
      showSearchbar: false
    }

  }

  componentDidMount = () => {
    let path = window.location.pathname
    if (path === '/search') {
      this.setState({
        showSearchbar: true
      })
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
        <nav className={scss.navbar} data-cy="navbar">
          <div className={scss.nav__logo} data-cy="nav__logo">
            <Link href="/">
              <a>
                <img src="/static/logo/dpla_bws-logo-color-nav.png" alt="Black Women's Suffrage Logo" />
              </a>
            </Link>
          </div>

          <div className={scss.nav__links} data-cy="nav__links">

            <ActiveLink activeClassName={scss.active} href="/about">
              <a>About</a>
            </ActiveLink>

            <ActiveLink activeClassName={scss.active} href="/timeline">
              <a>Timeline</a>
            </ActiveLink>

            <ActiveLink activeClassName={scss.active} href="/key-figures">
              <a>Key Figures</a>
            </ActiveLink>

            <ActiveLink activeClassName={scss.active} href="/collections">
              <a>Collections</a>
            </ActiveLink>

            <ActiveLink activeClassName={scss.active} href="/partners">
              <a>Partners</a>
            </ActiveLink>

            <div className={scss.divider} />
            <a href="https://dp.la" target="_blank">Visit DPLA</a>
            <div className={scss.divider} />

            <button onClick={this.triggerSearchbar} data-cy="searchbar__icon">
              <img src={"/static/icon/search/search-bar.svg"} alt="Search Bar" className={scss.searchIcon} />
            </button>

          </div>
        </nav>

        {this.state.showSearchbar &&
          <SearchBar />
        }
      </>
    )
  }
}

export default Navbar
