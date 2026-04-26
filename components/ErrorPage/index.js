import React from "react";
import Link from "next/link";
import MainLayout from "components/MainLayout";
import BWSHead from "components/BWSHead";

const ErrorPage = ({ pageTitle, heading, body }) => (
  <MainLayout>
    <BWSHead pageTitle={pageTitle} />
    <div className="sidebarAndContentWrapper">
      <div className="row">
        <div className="col-xs-12 col-md-offset-2 col-md-8">
          <div className="content">
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
        </div>
      </div>
    </div>
  </MainLayout>
);

export default ErrorPage;
