import React from "react"
import MainLayout from "components/MainLayout"
import HomePage from "components/HomePage"
import BWSHead from "components/BWSHead";

const Home = () => {
  return (
      <MainLayout className="main" role="main">
          <BWSHead 
          pageTitle="Black Women's Suffrage | DPLA"
          pageDescription="The Black Women’s Suffrage Digital Collection is a collaborative project to provide digital access to materials documenting the roles and experiences of Black Women in the Women’s Suffrage Movement and, more broadly, women’s rights, voting rights, and civic activism between the 1850s and 1960."
          pageImage="/static/graphic/home-page/home-graphic-body-1-mobile.png"
          pageImageCaption="Images from the Black Women's Suffrage collection"
          />
        <HomePage/>
      </MainLayout>
  )
};

export default Home;
