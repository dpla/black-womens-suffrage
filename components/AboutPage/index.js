import React from "react"
import scss from "../AboutPage/AboutPage.module.scss"
import PageBanner from "shared/PageBanner"
import StyledText from "shared/StyledText"
import SponsorPreFooter from "shared/SponsorPreFooter"
import RoundButton from "shared/RoundButton"

const AboutPage = () => {
  const title = "ABOUT",
    text = "For Black women, the fight wasn't over in 1920. Their movement for gender and racial equality continues.",
    graphic = "/static/graphic/about-page/about-graphic-hero.svg";

  return (
    <>
      <PageBanner title={title} text={text} graphic={graphic} />
      <div className={scss.about__section_1}>
        <div  className={`${scss.about__section_1_left}`}>
          <img src="/static/graphic/about-page/about-graphic-body-1.svg" />
          <div className={scss.about__section_1_left_content}>
            <p>Mary Church Terrell.</p>
            <p>Frances Ellen Watkins Harper.</p>
            <p>Anna Julia Cooper.</p>
            <p>Ida B. Wells-Barnett.</p>
          </div>
        </div>

        <div className={scss.about__section_1_right}>
          <StyledText 
            subtitle={"These women played significant leadership roles leading up to and during the United States Women’s Suffrage Movement and beyond, yet their stories and contributions are not widely known and the critical roles black women played at the forefront of the campaign for women’s rights are too often forgotten."}
            text={"This gap in America’s public consciousness is rooted in the history of racism and exclusion within the Suffrage Movement, which resulted in white women emerging as the movement’s primary protagonists, while black women were effectively wiped from the narrative."}/>
        </div>
      </div>

      <div className={scss.about__section_2}>
        <h3 className="title">BLACK WOMEN’S SUFFRAGE COLLECTION</h3>
        <p>The content featured in this collection explores linkages between women’s suffrage and other social causes of the nineteenth and early twentieth centuries (anti-slavery, anti-lynching, education reform and civil rights) as well as racism within the Suffrage Movement.</p>
      </div>

     <div className={scss.about__section_3}>
        <div className={scss.about__section_3_left}>
          <p className={scss.about__section_3_left_bold}>For black women, the struggle to vote and to effect change through civic engagement more broadly did not end in 1920.</p>
          <p className={scss.about__section_3_left_p}>Their stories add new shades of context to related topics in our nation today, from the suppression of voting rights based on race and gender to the increasing number of women of color running for—and winning—elected office.</p>
        </div>

        <div className={scss.about__section_3_right}>
          <img src="/static/image/about-page/about-image-body-1-mobile.png"/>
          {/* <img src="/static/graphic/about-page/about-graphic-body-2.png"/> */}
        </div>
      </div>

      <div className={`${scss.about__section_4}`}>
        <div className={scss.about__section_4_div}>
          <img src="/static/graphic/about-page/mobile/about-graphic-body-3-mobile.svg"/>
          <h3 className="title">DIGITAL PUBLIC LIBRARY OF AMERICA (DPLA)</h3>
        </div>

        <div className={scss.about__section_4_text}>
          <p className={scss.about__section_4_text_bold}>DPLA connects people to the riches held within America’s libraries, archives, museums, and other cultural heritage institutions.</p> 
          <p className={scss.about__section_4_text_p}>The cultural institutions participating in DPLA represent the richness and diversity of America itself, from the smallest local history museum to our nation’s largest cultural institutions.</p>
        </div>
      </div>

      <div className={scss.about__section_5}>
        <div className={scss.about__section_5_content}>
          <h3>DPLA’S STATEMENT ON POTENTIALLY HARMFUL CONTENT</h3>
          <h2>Curating the Black Women’s Suffrage Digital Collection</h2>
          <p>Materials in this collection and the language that describes them may be harmful. Libraries and archives collect materials from different cultures and time periods to preserve and make available the historical record. As a result, library materials, such as those presented here, may reflect racist and misogynoir views that may be harmful and difficult to view.</p>
          <p>The content featured in this collection explores linkages between Black women’s suffrage and other social causes of the nineteenth and early twentieth centuries (anti-slavery, anti-lynching, education reform and civil rights) as well as racism within the Suffrage Movement. These materials are presented here to recognize and celebrate the important contributions of Black women and their resiliency in the face of ongoing racism and exclusion.</p>
          <RoundButton text="SEE HARMFUL LANGUAGE DISCLAIMERS" icon="/static/icon/button-arrow.svg" url={"/harmful-language-statement"}/>
          <img  className={scss.about__section_5_img} src="/static/graphic/about-page/about-graphic-body-4.svg"/>
        </div>

        {/* <img src="/static/graphic/about-page/about-graphic-body-5.svg" />     */}
      </div>

      <SponsorPreFooter 
      text="The grant for this collection is made possible through funding from " 
      sponsor="Pivotal Ventures, A Melinda Gates Company." 
      buttonText="SEARCH THE COLLECTION" 
      buttonIcon="/static/icon/button-arrow.svg"/>
      
    </>
  )
}

export default AboutPage