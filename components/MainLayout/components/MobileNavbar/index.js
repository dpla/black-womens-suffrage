import React, { useState } from 'react'
import Link from 'next/link'
import scss from "../MobileNavbar/MobileNavbar.module.scss"
import MobileSearchBar from 'components/shared/MobileSearchBar'

const MobileNavbar = () => {
  const [menuDisplayed, setMenuDisplayed] = useState(false)

  const showMenu = () => setMenuDisplayed(prev => !prev)

  const menuIcon = menuDisplayed
    ? "/static/dpla-icons/close.svg"
    : "/static/mobile/icon/menu/menu-mobile.png"
  const menuAlt = menuDisplayed ? "Close Menu" : "Open Menu"

  return (
    <nav className={scss.navbar} data-cy="navbar__mobile">
      <div className={scss.navbar__graphic} data-cy="nav__logo_mobile">
        <Link href="/">
          <img src="/static/mobile/logo/dpla_bws-logo-color-nav-mobile.png" alt="Black Women's Suffrage Logo"/>
        </Link>

        <button onClick={showMenu} name="menuDisplayed" data-cy="menuDisplayed">
          <img src={menuIcon} id={scss.menuIcon} alt={menuAlt}/>
        </button>
      </div>

      {menuDisplayed &&
        <div>
          <MobileSearchBar />
          <div className={scss.navbar__links} data-cy="nav__links_mobile">
            <Link href="/about">About</Link>
            <Link href="/timeline">Timeline</Link>
            <Link href="/key-figures">Key Figures</Link>
            <Link href="/collections">Collections</Link>
            <Link href="/partners">Partners</Link>

            <div className={scss.navbar__links_secondary}>
              <div className={scss.navbar__links_divider}></div>
              <a href="https://dp.la" target="_blank" rel="noopener noreferrer">Visit DPLA</a>
              <Link href="/harmful-language-statement">Harmful Language Statement</Link>
            </div>
          </div>
        </div>
      }
    </nav>
  )
}

export default MobileNavbar
