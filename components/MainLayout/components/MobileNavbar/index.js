import React, { Component } from 'react'
import Link from 'next/link'
import scss from "../MobileNavbar/MobileNavbar.module.scss"
import MobileSearchBar from 'components/shared/MobileSearchBar'

class MobileNavbar extends Component {
  constructor() {
    super()

    this.state = {
      menuDisplayed: false,
      menuIcon: "/static/dpla-icons/menu-black.svg",
      menuAlt: 'Open Menu'
    }
  }

  showMenu = () => {
    this.setState(prevState => ({
      menuDisplayed: !prevState.menuDisplayed
    }))
  }

  getMenuIcon = () => {
    return this.state.menuDisplayed ? "/static/dpla-icons/close.svg" : "/static/mobile/icon/menu/menu-mobile.png"
  }

  getMenuAlt = () => {
    return this.state.menuDisplayed ? "Close Menu" : "Open Menu"
  }

  render() {
    const menuIcon = this.getMenuIcon();
    const menuAlt = this.getMenuAlt()

    return (
      <nav className={scss.navbar}>
        {/* logo and mobile menu icon*/}
        <div className={scss.navbar__graphic}>
          <Link href="/">
            <a>
              <img src="/static/mobile/logo/dpla_bws-logo-color-nav-mobile.png" alt="Black Women's Suffrage Logo"/>
            </a>
          </Link>

          <button onClick={this.showMenu} name="menuDisplayed">
            <img src={menuIcon} id={scss.menuIcon} alt={menuAlt}/>
          </button>
        </div>

        {/* nav links */}
        {this.state.menuDisplayed &&
          <>
            <MobileSearchBar />
            <div className={scss.navbar__links}>
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

              <Link href="/partners">
                <a>Partners</a>
              </Link>


              <div className={scss.navbar__links_secondary}>
                <div className={scss.navbar__links_divider}></div>
                <a href="https://dp.la" target="_blank" rel="noopener">Visit DPLA</a>
                <Link href="/harmful-language-statement">
                  <a>Harmful Language Statement</a>
                </Link>
              </div>

            </div>
          </>
        }
      </nav>
    )
  }
}



export default MobileNavbar