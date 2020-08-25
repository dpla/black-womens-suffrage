import React from "react"
import { withRouter } from "next/router";
import css from "./SearchBar.module.scss";

class SearchBar extends React.Component {

    render() {
        const { searchQuery, router } = this.props;

        return (
            <form action="/search" className={css.searchBar}>
                <input
                    key={searchQuery}
                    className={css.searchInput}
                    name="q"
                    type="search"
                    placeholder="Search the collection"
                    aria-label="Search the collection"
                    autoComplete="off"
                    defaultValue={router && router.query && router.query.q ? router.query.q : ""}
                />
                <button type="submit" className={css.searchButton}>
                    Search
                </button>
            </form>
        );
    }
}

export default withRouter(SearchBar);

