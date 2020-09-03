import React from "react"
import MainLayout from "../components/MainLayout"
import HomePage from "../components/HomePage"
import Head from "next/head";

const Home = () => {
  return (
      <MainLayout className="main" role="main">
          <Head>
              <title>Black Women's Suffrage | DPLA</title>
          </Head>
        <HomePage/>
      </MainLayout>
  )
};

export default Home;
