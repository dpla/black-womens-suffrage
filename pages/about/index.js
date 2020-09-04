import React from "react"
import MainLayout from "components/MainLayout"
import AboutPage from "components/AboutPage"
import Head from "next/head";
import BWSHead from "components/BWSHead"

const About = () => {
  return (
      <MainLayout className="main" role="main">
          <BWSHead pageTitle="About Black Women's Suffrage | DPLA" />
        <AboutPage />
      </MainLayout>
  )
};

export default About;
