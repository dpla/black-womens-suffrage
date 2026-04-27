import React from "react";
import Link from "next/link";
import Button from "components/shared/Button";
import PageBanner from "shared/PageBanner";
import css from "./SearchError.module.scss";

function SearchError() {
  return (
    <>
      <PageBanner
        title="SEARCH ERROR"
        text="Search is temporarily unavailable."
      />
      <div className={`container ${css.searchError}`}>
      <p>
        We&rsquo;re having trouble connecting to our search service &mdash; this
        is on our end, not yours.
      </p>
      <br />
      <Button type="primary" size="large" fitContent onClick={() => window.location.reload()}>
        Try again
      </Button>
      <p className={css.statusLink}>
        Check our{" "}
        <a href="https://status.dp.la" target="_blank" rel="noreferrer">
          status page
        </a>{" "}
        to see if there&rsquo;s a known issue.
      </p>
      <p>While search is down, you can still:</p>
      <ul className={css.alternativeLinks}>
        <li>
          Browse our <Link href="/collections">collections</Link>
        </li>
        <li>
          Explore our <Link href="/key-figures">key figures</Link>
        </li>
      </ul>
      </div>
    </>
  );
}

export default SearchError;
