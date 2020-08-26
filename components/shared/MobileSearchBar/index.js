import React from "react"
import { withRouter } from "next/router"
import CurvedButton from "components/shared/CurvedButton"
import scss from "./MobileSearchBar.module.scss"
import Link from "next/link"

class MobileSearchBar extends React.Component {

  render() {
    const { searchQuery, router } = this.props;

    return (
      <>
        <form action="/search" className={scss.searchbar}>
          <div className={scss.searchbar__input_container}>
            <img src={"/static/icon/search/search-bar.svg"} alt="search-bar" />
            <input
              key={searchQuery}
              className={scss.searchbar__input}
              name="q"
              type="search"
              placeholder="Search the collection"
              aria-label="Search the collection"
              autoComplete="off"
              defaultValue={router && router.query && router.query.q ? router.query.q : ""}
            />
            <CurvedButton text="SEARCH" type="submit" />
          </div>

          <div className={scss.searchbar__button_advanced}>
            <Link href="/search">
              <a>
                ADVANCED SEARCH
              <img src="/static/icon/button-arrow-purple.png" />
              </a>
            </Link>
          </div>
        </form>
      </>
    );
  }
}

export default withRouter(MobileSearchBar);

