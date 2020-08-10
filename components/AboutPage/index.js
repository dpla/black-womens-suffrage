import React from "react"
import scss from "../AboutPage/AboutPage.module.scss"
import PageBanner from "../shared/PageBanner"
import SplitBanner from "../shared/SplitBanner"
import StyledText from "../shared/StyledText"
import SponsorPreFooter from "../shared/SponsorPreFooter"

const AboutPage = () => {
  const title = "ABOUT",
        text = "For Black women, the fight wasn't over in 1920. Their movement for gender and racial equality continues.",
        graphic = "/static/images/graphic/about-page/about-graphic-hero.png",
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
      <div className={scss.about__section_1_div}>
      <img src="/static/images/graphic/about-page/about-graphic-body-1.svg"/>

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
      </div>

      <div className={scss.about__section_2}>
        <h3 className="title">BLACK WOMEN’S SUFFRAGE COLLECTION</h3>
        <p>The content featured in this collection explores linkages between women’s suffrage and other social causes of the nineteenth and early twentieth centuries (anti-slavery, anti-lynching, education reform and civil rights) as well as racism within the Suffrage Movement.</p>
      </div>

      {/* <div className={scss.about__section_3}>
        <SplitBanner 
        style={scss.about__section_3}
        left_children={
          <div className={scss.about__section_3_left}>
            <p>For black women, the struggle to vote and to effect change through civic engagement more broadly did not end in 1920.</p>
            <p>Their stories add new shades of context to related topics in our nation today, from the suppression of voting rights based on race and gender to the increasing number of women of color running for—and winning—elected office.</p>
          </div>
          }
        right_children={<img src="/static/images/graphic/about-image-body-1.png"/>}/>
      </div> */}

      <div className={`display__flex ${scss.about__section_3}`}>
        <div className={scss.about__section_3_left}>
          <p className={scss.about__section_3_left_bold}>For black women, the struggle to vote and to effect change through civic engagement more broadly did not end in 1920.</p>
          <p className={scss.about__section_3_left_p}>Their stories add new shades of context to related topics in our nation today, from the suppression of voting rights based on race and gender to the increasing number of women of color running for—and winning—elected office.</p>
        </div>

        <div className={scss.about__section_3_right}>
          <img src="/static/images/graphic/about-page/about-image-body-1.png"/>
          <img src="/static/images/graphic/about-page/about-graphic-body-2.svg"/>
        </div>
      </div>

      <div className={`site-max-width container medium_page_section ${scss.about__section_4}`}>
        <div>
          <div className={scss.about__section_4_div}>
            <img src="/static/images/graphic/about-page/about-graphic-body-3.svg"/>

            <div>
              <h3>DIGITAL PUBLIC LIBRARY OF AMERICA (DPLA)</h3>
              <p>DPLA connects people to the riches held within America’s libraries, archives, museums, and other cultural heritage institutions.</p>
            </div>
          </div>
          <p>The cultural institutions participating in DPLA represent the richness and diversity of America itself, from the smallest local history museum to our nation’s largest cultural institutions.</p>
        </div>
      </div>

      <div className={`site-max-width container large_page_section ${scss.about__section_5}`}>
      </div>

      <SponsorPreFooter 
      text="The grant for this collection is made possible through funding from " 
      sponsor="Pivotal Ventures, A Melinda Gates Company." 
      buttonText="SEARCH THE COLLECTION" 
      buttonIcon="/static/images/icon/button-arrow.svg"/>
      
    </>
  )
}

export default AboutPage