import React from "react"
import MainLayout from "components/MainLayout"
import AboutPage from "components/AboutPage"
import Head from "next/head";
import BWSHead from "components/BWSHead"

const About = () => {
  return (
      <MainLayout className="main" role="main">
        <BWSHead 
        pageTitle="About Black Women's Suffrage | DPLA" 
        pageDescription="Information about the content and creation of the Black Women's Suffrage collection."
        pageImage="/static/graphic/about-page/about-graphic-hero.png"
        pageImageCaption="Women of the Black women's suffrage movement"
        />
        <AboutPage />
      </MainLayout>
  )
};

export default About;
