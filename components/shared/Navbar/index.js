import React, { Component } from 'react'
import Link from 'next/link'
import CurvedButton from "../CurvedButton"

import scss from "../Navbar/Navbar.module.scss"


class Navbar extends Component {
  constructor() {
    super()

    this.state = {
      menuDisplayed: false,
      menuIcon: "../static/images/menu-black.svg"
    }
  }

  showMenu = (event) => {
    const {name} = event.target
    this.setState(prevState => ({
      [name]: !prevState.menuDisplayed
    }))
  }

  getMenuIcon = () => {
    return this.state.menuDisplayed ? "../static/images/close.svg" : "../static/images/menu-black.svg"
  }

  render() {
    const menuIcon = this.getMenuIcon();

    return (
      <nav id={scss.navbar}>
        {/* logo */}
        <div id={scss.navLogo}>
          <img src="../static/images/dpla-logo-square_250.png" />
          <img src={menuIcon} onClick={this.showMenu} name="menuDisplayed"/>
  
        </div>
  
        <div id={scss.navLinks}>
          <Link href="/about">
            <a>About</a>
          </Link>
  
          <Link href="/timeline">
            <a>Timeline</a>
          </Link>
  
          <Link href="/key-figures">
            <a>Keyfigures</a>
          </Link>
  
          <a href="https://dp.la" target="_blank">Visit DPLA</a>
        </div>
        
  
        {/* search button */}
        <div id={scss.navSearch}>
          <CurvedButton text="Search"/>
        </div>
      </nav>
    )
  }
}



export default Navbar