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
    if(path === '/search') {
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
        <nav className={scss.navbar}>
          <div className={scss.nav__logo}>
            <Link href="/">
              <a>
                <img src="/static/logo/dpla_bws-logo-color-nav.png" alt="Black Women's Suffrage Logo"/>
              </a>
            </Link>
          </div>

          <ul className={scss.nav__links}>

            <li>
              <ActiveLink activeClassName={scss.active} href="/about">
                <a>About</a>
              </ActiveLink>
            </li>

            <li>
              <ActiveLink activeClassName={scss.active} href="/timeline">
                <a>Timeline</a>
              </ActiveLink>
            </li>

            <li>
              <ActiveLink activeClassName={scss.active} href="/key-figures">
                <a>Key Figures</a>
              </ActiveLink>
            </li>

            <li>
              <ActiveLink activeClassName={scss.active} href="/collections">
                <a>Collections</a>
              </ActiveLink>
            </li>

            <li>
              <ActiveLink activeClassName={scss.active} href="/partners">
                <a>Partners</a>
              </ActiveLink>
            </li>

            <li><div className={scss.divider} /></li>
            <li><a href="https://dp.la" target="_blank">Visit DPLA</a></li>
            <li><div className={scss.divider} /></li>
            <li>
              <button onClick={this.triggerSearchbar}>
              <img src={"/static/icon/search/search-bar.svg"} alt="Search Bar" className={scss.searchIcon} />
              </button>
            </li>
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
