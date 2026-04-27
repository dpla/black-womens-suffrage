import React from "react";
import Link from "next/link";

import { USER_BASE_URL } from "constants/env";

const NavigationPro = ({ isHome, className, css }) =>
  <div className={className} id={"NavigationPro"}>
    <ul className={css.links}>
      {!isHome &&
        <li>
          <Link prefetch as="/" href="/pro">
            Home
          </Link>
        </li>}
      <li>
        <Link prefetch as="/hubs" href="/pro/wp/hubs?section=hubs">
          Hubs
        </Link>
      </li>
      <li>
        <Link prefetch as="/ebooks" href="/pro/wp/ebooks?section=ebooks">
          Ebooks
        </Link>
      </li>
      <li>
        <Link prefetch as="/projects" href="/pro/wp?section=projects">
          Projects
        </Link>
      </li>
    </ul>
    <span className={css.divider} />
    <ul className={`${css.links} ${css.secondaryLinks}`}>
      <li>
        <Link prefetch as="/about" href="/pro/wp?section=about-dpla-pro">
          About
        </Link>
      </li>
      <li>
        <Link prefetch as="/events" href="/pro/wp?section=events">
          Events
        </Link>
      </li>
    </ul>
    <span className={css.divider} />
    <ul className={`${css.links} ${css.tertiaryLinks}`}>
      <li>
        <Link href={USER_BASE_URL}>
          DPLA Main Site
        </Link>
      </li>
      <li>
        <Link href={USER_BASE_URL + "/news"}>
          News
        </Link>
      </li>
    </ul>
  </div>;

export default NavigationPro;
