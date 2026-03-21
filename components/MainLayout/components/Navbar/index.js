import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import scss from "./Navbar.module.scss"
import SearchBar from "components/shared/SearchBar"
import ActiveLink from './ActiveLink'

const Navbar = () => {
  const [showSearchbar, setShowSearchbar] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setShowSearchbar(router.pathname === '/search')
  }, [router.pathname])

  const triggerSearchbar = () => setShowSearchbar(prev => !prev)

  return (
    <>
      <nav className={scss.navbar} data-cy="navbar">
        <div className={scss.nav__logo} data-cy="nav__logo">
          <Link href="/">
            <img src="/static/logo/dpla_bws-logo-color-nav.png" alt="Black Women's Suffrage Logo" />
          </Link>
        </div>

        <div className={scss.nav__links} data-cy="nav__links">
          <ActiveLink activeClassName={scss.active} href="/about">About</ActiveLink>
          <ActiveLink activeClassName={scss.active} href="/timeline">Timeline</ActiveLink>
          <ActiveLink activeClassName={scss.active} href="/key-figures">Key Figures</ActiveLink>
          <ActiveLink activeClassName={scss.active} href="/collections">Collections</ActiveLink>
          <ActiveLink activeClassName={scss.active} href="/partners">Partners</ActiveLink>

          <div className={scss.divider} />
          <a href="https://dp.la" target="_blank" rel="noopener noreferrer">Visit DPLA</a>
          <div className={scss.divider} />

          <button onClick={triggerSearchbar} data-cy="searchbar__icon">
            <img src={"/static/icon/search/search-bar.svg"} alt="Search Bar" className={scss.searchIcon} />
          </button>
        </div>
      </nav>

      {showSearchbar && <SearchBar />}
    </>
  )
}

export default Navbar
