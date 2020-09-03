import React from "react"
import MainLayout from "../../components/MainLayout"
import AboutPage from "../../components/AboutPage"
import Head from "next/head";

const About = () => {
  return (
      <MainLayout className="main" role="main">
          <Head>
              <title>About Black Women's Suffrage | DPLA</title>
          </Head>
        <AboutPage />
      </MainLayout>
  )
};

export default About;
