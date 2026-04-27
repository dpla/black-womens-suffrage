import React from "react";
import Link from "next/link";
import MainLayout from "components/MainLayout";
import BWSHead from "components/BWSHead";
import scss from "./ErrorPage.module.scss";

const ErrorPage = ({ pageTitle, heading, body }) => (
  <MainLayout>
    <BWSHead pageTitle={pageTitle} />
    <div className={`site-max-width container ${scss.error}`}>
      <h1>{heading}</h1>
      <p>{body}</p>
      <ul>
        <li>
          <Link href="/">Return to the home page</Link>
        </li>
        <li>
          <Link href="/search">Search the collection</Link>
        </li>
        <li>
          <Link href="/about">Learn about this project</Link>
        </li>
      </ul>
    </div>
  </MainLayout>
);

export default ErrorPage;
