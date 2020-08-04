import React from "react"
import MainLayout from "../../components/MainLayout"
import PageBanner from "../../components/shared/PageBanner"

const About = () => {
  const title = "ABOUT",
        text = "For Black women, the fight wasn't over in 1920. Their movement for gender and racial equality continues.",
        graphic = "static/images/graphic/home/home-graphic-hero.png";

  return (
      <MainLayout>
        <div className="main" role="main">
          <PageBanner title={title} text={text} graphic={graphic}/>
        </div>
      </MainLayout>
  )
};

export default About;
