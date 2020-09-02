import React from "react"
import MainLayout from "components/MainLayout"
import TimelinePage from "components/TimelinePage"
import Head from "next/head";


function Timeline() {
  return (
      <MainLayout className="main" role="main">
          <Head>
              <title>Black Womens' Suffrage Timeline | DPLA</title>
          </Head>
        <TimelinePage />
      </MainLayout>
  );
}

export default Timeline;
