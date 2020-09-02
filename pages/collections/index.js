import React from "react"
import MainLayout from "components/MainLayout"
import CollectionsPage from "components/CollectionsPage"
import Head from "next/head";


const Collections = () => {
  return (
      <MainLayout className="main" role="main">
          <Head>
              <title>Black Womens' Suffrage: Collections | DPLA</title>
          </Head>
        <CollectionsPage />
      </MainLayout>
  )
};

export default Collections;
