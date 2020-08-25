import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";

import dplaLogoWide from "/public/static/assets/dpla-icons/dpla-logo-white.svg";

import css from "./PageHeader.module.scss";
import SearchBar from "components/shared/SearchBar";

class PageHeader extends React.Component {
  render() {
    const { searchQuery, hideSearchBar, router } = this.props;
    return (
      <div
        className={`${css.headerSearchBar} ${SITE_ENV === "pro"
          ? css.pro
          : ""}`}
      >
        <div
          className={`${css.flexWrapper}  ${SITE_ENV === "pro"
            ? css.pro
            : ""} site-max-width`}
        >
          {(SITE_ENV === "user" || SITE_ENV === "pro") &&
            <Link prefetch as="/" href={SITE_ENV === "user" ? "/" : "/pro"}>
              <a className={css.logo} title="Home Page">
                <dplaLogoWide className={css.logoImg} />
              </a>
            </Link>}
          {SITE_ENV === "local" &&
            <Link prefetch href="/local" as="/">
              <a className={`${css.logo} ${css.local}`} title="Home Page">
                <img
                  className={css.localLogo}
                  alt={`${LOCALS[LOCAL_ID].name} Home`}
                  src={`/static/local/${LOCALS[LOCAL_ID].theme}/${LOCALS[
                    LOCAL_ID
                  ].logo}`}
                />
                <span className={css.localText}>{LOCALS[LOCAL_ID].name}</span>
              </a>
            </Link>}
          {!hideSearchBar && <SearchBar />
          }
        </div>
      </div>
    );
  }
}
export default withRouter(PageHeader);
