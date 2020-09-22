import React from "react"
import { withRouter } from "next/router"
import CurvedButton from "components/shared/CurvedButton"
import scss from "./SearchBar.module.scss"
import Link from "next/link"

class SearchBar extends React.Component {

  render() {
    const { searchQuery, router } = this.props;

    return (
      <>
        <form action="/search" className={scss.searchbar} data-cy="searchbar">
          <div className={scss.searchbar__input_container}>
            <img src={"/static/icon/search/search-bar.svg"} alt="search-bar" />
            <input
              key={searchQuery}
              className={scss.searchbar__input}
              name="q"
              type="search"
              placeholder="Search the Black Women's Suffrage Collection"
              aria-label="Search the Black Women's Suffrage Collection"
              autoComplete="off"
              defaultValue={router && router.query && router.query.q ? router.query.q : ""}
            />
            <CurvedButton text="SEARCH" type="submit" />
          </div>

          {router.route !== '/search' &&
            <div className={scss.searchbar__button_advanced}>
              <Link href="/search">
                <a>
                  ADVANCED SEARCH
                  <img src="/static/icon/button-arrow-purple.png" alt="Arrow icon" />
                </a>
              </Link>
            </div>
          }
        </form>
      </>
    );
  }
}

export default withRouter(SearchBar);

