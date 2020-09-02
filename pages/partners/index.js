import React from "react"
import MainLayout from "components/MainLayout"
import PartnersPage from "components/PartnersPage"
import Head from "next/head";


function Partners() {
  return (
      <MainLayout className="main" role="main">
          <Head>
              <title>Black Womens' Suffrage: Partners | DPLA</title>
          </Head>
        <PartnersPage />
      </MainLayout>
  );
}

export default Partners;
