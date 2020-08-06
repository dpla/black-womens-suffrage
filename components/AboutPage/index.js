import React from "react"
import scss from "../AboutPage/AboutPage.module.scss"
import PageBanner from "../shared/PageBanner"
import SplitBanner from "../shared/SplitBanner";


const AboutPage = () => {
  const title = "ABOUT",
        text = "For Black women, the fight wasn't over in 1920. Their movement for gender and racial equality continues.",
        graphic = "static/images/graphic/home/home-graphic-hero.png",
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
      <SplitBanner left={left_text} right={right_text} left_class={scss.about__section_1_left} right_class={scss.about__section_1_right}/>
    </>
  )
}

export default AboutPage