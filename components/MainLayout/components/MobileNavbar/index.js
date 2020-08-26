import React, { Component } from 'react'
import Link from 'next/link'
import scss from "../Navbar/Navbar.module.scss"

class MobileNavbar extends Component {
  constructor() {
    super()

    this.state = {
      menuDisplayed: false,
      menuIcon: "../static/assets/menu-black.svg"
    }
  }

  showMenu = (event) => {
    const { name } = event.target
    this.setState(prevState => ({
      [name]: !prevState.menuDisplayed
    }))
  }

  getMenuIcon = () => {
    return this.state.menuDisplayed ? "../static/assets/close.svg" : "../static/assets/menu-black.svg"
  }

  render() {
    const menuIcon = this.getMenuIcon();

    return (
      <nav className={scss.navbar}>
        {/* logo and mobile menu icon*/}
        <div id={scss.navLogo}>
          <img src="../public/logo/dpla_bws-logo-color-nav.png" />
          <img src={menuIcon} onClick={this.showMenu} name="menuDisplayed" id={scss.menuIcon}/>
        </div>

        {/* nav links */}
        {this.state.menuDisplayed &&
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

            <Link href="/subgrant-awardees">
              <a>Subgrant Awardees</a>
            </Link>

            <a href="https://dp.la" target="_blank">Visit DPLA</a>

            <img src={"../static/assets/search-grey.svg"}/>
          </div>
        }
      </nav>
    )
  }
}



export default MobileNavbar