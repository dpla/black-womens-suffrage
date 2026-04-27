import React from "react";
import Link from "next/link";

import { PRO_BASE_URL } from "constants/env";

class NavigationUser extends React.Component {
  render() {
    const { isHome, className, css } = this.props;
    return (
      <div className={className} id={"NavigationUser"}>
        <ul className={css.links}>
          {!isHome &&
            <li>
              <Link prefetch href="/">
                Home
              </Link>
            </li>}
          <li>
            <Link prefetch href="/browse-by-topic">
              Browse by Topic
            </Link>
          </li>
          <li>
            <Link prefetch href="/browse-by-partner">
              Browse by Partner
            </Link>
          </li>
          <li>
            <Link prefetch href="/exhibitions">
              Exhibitions
            </Link>
          </li>
          <li>
            <Link prefetch href="/primary-source-sets">
              Primary Source Sets
            </Link>
          </li>
          <li>
            <Link prefetch href="/lists">
              My Lists
            </Link>
          </li>
        </ul>
        <span className={css.divider} />
        <ul className={`${css.links} ${css.secondaryLinks}`}>
          <li>
            <Link prefetch as="/about" href="/about?section=about-us">
              About DPLA
            </Link>
          </li>
          <li>
            <Link prefetch href="/news">
              News
            </Link>
          </li>
        </ul>
        <span className={css.divider} />
        <ul className={`${css.links} ${css.tertiaryLinks}`}>
          <li>
            <Link href={PRO_BASE_URL}>
              DPLA Pro
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavigationUser;
