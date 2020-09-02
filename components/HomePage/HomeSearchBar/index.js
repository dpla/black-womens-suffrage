import React from "react"
import { withRouter } from "next/router"
import CurvedButton from "components/shared/CurvedButton"
import scss from "./HomeSearchBar.module.scss"
import Link from "next/link"

class HomeSearchBar extends React.Component {

  render() {
    const { searchQuery, router } = this.props;

    return (
      <>
        <section className={scss.searchbar__container}>
          <form action="/search" className={scss.searchbar}>

            <div className={scss.input}>
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
              </div>

              <div className={scss.searchbar__button_container}>
                <input className={scss.searchbar__button} value="SEARCH" type="submit" />
              </div>
            </div>


            <div className={scss.searchbar__button_advanced}>
              <Link href="/search">
                <a>
                  ADVANCED SEARCH
                </a>
              </Link>
            </div>
          </form>
        </section>

      </>
    );
  }
}

export default withRouter(HomeSearchBar);

