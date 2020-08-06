import React from "react"
import scss from "../AboutPage/AboutPage.module.scss"
import PageBanner from "../shared/PageBanner"
import SplitBanner from "../shared/SplitBanner"
import StyledText from "../shared/StyledText"

const AboutPage = () => {
  const title = "ABOUT",
        text = "For Black women, the fight wasn't over in 1920. Their movement for gender and racial equality continues.",
        graphic = "/static/images/graphic/about-graphic-hero.png",
        left_text = [
          "Mary Church Terrell.",
          "Frances Ellen Watkins Harper.",
          "Anna Julia Cooper.",
          "Ida B. Wells-Barnett."
        ],
        right_text = [
          "These women played significant leadership roles leading up to and during the United States Women’s Suffrage Movement and beyond, yet their stories and contributions are not widely known and the critical roles black women played at the forefront of the campaign for women’s rights are too often forgotten.",
          "This gap in America’s public consciousness is rooted in the history of racism and exclusion within the Suffrage Movement, which resulted in white women emerging as the movement’s primary protagonists, while black women were effectively wiped from the narrative."
        ];

  return (
    <>
      <PageBanner title={title} text={text} graphic={graphic}/>

      <div className="wrapper display__flex">
        <div className={scss.about__section_1_left}>
          <p>Mary Church Terrell.</p>
          <p>Frances Ellen Watkins Harper.</p>
          <p>Anna Julia Cooper.</p>
          <p>Ida B. Wells-Barnett.</p>
        </div>

        <div className={scss.about__section_1_right}>
          <StyledText 
            subtitle={"These women played significant leadership roles leading up to and during the United States Women’s Suffrage Movement and beyond, yet their stories and contributions are not widely known and the critical roles black women played at the forefront of the campaign for women’s rights are too often forgotten."}
            text={"This gap in America’s public consciousness is rooted in the history of racism and exclusion within the Suffrage Movement, which resulted in white women emerging as the movement’s primary protagonists, while black women were effectively wiped from the narrative."}/>
        </div>
      </div>

      <div className={`${scss.about__section_2}`}>
        <h3 className="title">BLACK WOMEN’S SUFFRAGE COLLECTION</h3>
        <p>The content featured in this collection explores linkages between women’s suffrage and other social causes of the nineteenth and early twentieth centuries (anti-slavery, anti-lynching, education reform and civil rights) as well as racism within the Suffrage Movement.</p>
      </div>
      
      <SplitBanner left={left_text} right={right_text} left_class={scss.about__section_1_left} right_class={scss.about__section_1_right}/>
    </>
  )
}

export default AboutPage