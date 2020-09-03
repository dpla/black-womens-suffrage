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

  const Offlink = ({url, text}) => <a href={url} target={"_blank"}>{text}</a>

  return (
    <>
      <PageBanner title={title} text={text} graphic={graphic} />
      <div className={scss.about__section_1}>
        <div className={`${scss.about__section_1_left}`}>
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
            subtitle={"These women played significant leadership roles leading up to and during the United States Women’s Suffrage Movement and beyond, yet their stories and contributions are not widely known and the critical roles Black women played at the forefront of the campaign for women’s rights are too often forgotten."}
            text={"This gap in America’s public consciousness is rooted in the history of racism and exclusion within the Suffrage Movement, which resulted in white women emerging as the movement’s primary protagonists, while Black women were effectively wiped from the narrative."} />
        </div>
      </div>

      <div className={scss.about__section_2}>
        <h3 className="title">BLACK WOMEN’S SUFFRAGE COLLECTION</h3>
        <p>The content featured in this collection explores linkages between women’s suffrage and other social causes of the nineteenth and early twentieth centuries (anti-slavery, anti-lynching, education reform and civil rights) as well as racism within the Suffrage Movement.</p>
      </div>

      <div className={scss.about__section_3}>
        <div className={scss.about__section_3_left}>
          <p className={scss.about__section_3_left_bold}>For Black women, the struggle to vote and to effect change through civic engagement more broadly did not end in 1920.</p>
          <p className={scss.about__section_3_left_p}>Their stories add new shades of context to related topics in our nation today, from the suppression of voting rights based on race and gender to the increasing number of women of color running for—and winning—elected office.</p>
        </div>

        <div className={scss.about__section_3_right}>
          <div className={scss.about__section_3_right_mobile}>
            <img className={scss.about__section_3_right} src="/static/image/about-page/about-image-body-1-mobile.png" />
          </div>

          <div className={scss.about__section_3_right_desktop}>
            <img className={scss.about__section_3_right} src="/static/image/about-page/about-image-body-1.png" />
          </div>
        </div>
      </div>

      <div className={scss.about__section_4_mobile}>
        <div className={scss.about__section_4_div}>
          <img src="/static/graphic/about-page/mobile/about-graphic-body-3-mobile.svg" />
          <h3 className="title">DIGITAL PUBLIC LIBRARY OF AMERICA (DPLA)</h3>
        </div>

        <div className={scss.about__section_4_text}>
          <p className={scss.about__section_4_text_bold}>DPLA connects people to the riches held within America’s libraries, archives, museums, and other cultural heritage institutions.</p>
          <p className={scss.about__section_4_text_p}>The cultural institutions participating in DPLA represent the richness and diversity of America itself, from the smallest local history museum to our nation’s largest cultural institutions.</p>
        </div>
      </div>

      <div className={scss.about__section_4_desktop}>
        <div className={scss.about__section_4_div}>
          <img src="/static/graphic/about-page/about-graphic-body-3.svg" />

          <div className={scss.about__section_4_header}>
            <h3 className="title">DIGITAL PUBLIC LIBRARY OF AMERICA (DPLA)</h3>
            <p className={scss.about__section_4_text_bold}>DPLA connects people to the riches held within America’s libraries, archives, museums, and other cultural heritage institutions.</p>
          </div>
        </div>

        <div className={scss.about__section_4_text}>
          <p className={scss.about__section_4_text_p}>The cultural institutions participating in DPLA represent the richness and diversity of America itself, from the smallest local history museum to our nation’s largest cultural institutions.</p>
        </div>
      </div>

      <div className={scss.about__section_5}>
        <div className={scss.about__section_5_content}>
          <div className={scss.about__section_5_left}>
            <h3>DPLA’S STATEMENT ON POTENTIALLY HARMFUL CONTENT</h3>
            <h2>Curating the Black Women’s Suffrage Digital Collection</h2>
            <p>Materials in this collection and the language that describes them may be harmful. Libraries and archives collect materials from different cultures and time periods to preserve and make available the historical record. As a result, library materials, such as those presented here, may reflect racist and misogynoir views that may be harmful and difficult to view.</p>
            <p>The content featured in this collection explores linkages between Black women’s suffrage and other social causes of the nineteenth and early twentieth centuries (anti-slavery, anti-lynching, education reform and civil rights) as well as racism within the Suffrage Movement. These materials are presented here to recognize and celebrate the important contributions of Black women and their resiliency in the face of ongoing racism and exclusion.</p>
            <RoundButton text="SEE HARMFUL LANGUAGE STATEMENT" icon="/static/icon/button-arrow.svg" url={"/harmful-language-statement"} />
          </div>

          <div className={scss.about__section_5_right}>
            <img className={scss.about__section_5_img} src="/static/graphic/about-page/about-graphic-body-4.svg" />
          </div>
        </div>
      </div>

      <div className={scss.about__section_6}>
        <div className={scss.about__section_6_line}></div>
        <div className={scss.about__section_6_content}>
          <h2>Credits</h2>
          <ul>
              <li>
                <span className={scss.about__section_6_role}>Concept + Ideation: </span>
                <span className={scss.about__section_6_name}>Samantha Gibson</span>
              </li>
              <li>
                <span className={scss.about__section_6_role}>Curation + Partnerships: </span>
                <span className={scss.about__section_6_name}>Shaneé Yvette Murrain</span>
              </li>
              <li>
                <span className={scss.about__section_6_role}>Copywriting: </span>
                <span className={scss.about__section_6_name}>Kathleen Williams</span>
              </li>
              <li>
                <span className={scss.about__section_6_role}>Historical Review: </span>
                <span className={scss.about__section_6_name}>Alison M. Parker, Ph.D., historian and author, <Offlink url={"https://uncpress.org/book/9781469659381/unceasing-militant/"} text={"Unceasing Militant: The Life of Mary Church Terrell"}/></span>
              </li>
              <li>
                <span className={scss.about__section_6_role}>Design: </span>
                <span className={scss.about__section_6_name}><Offlink url={"http://www.jasminelockwood.com/"} text="Jasmine A. Lockwood"/></span>
              </li>
              <li>
                <span className={scss.about__section_6_role}>Data Engineering: </span>
                <span className={scss.about__section_6_name}>Audrey Altman, Michael Della Bitta</span>
              </li>
              <li>
                <span className={scss.about__section_6_role}>Development: </span>
                <span className={scss.about__section_6_name}>Audrey Altman, Kiara Contreras, Michael Della Bitta, Scott Williams</span>
              </li>
              <li>
                <span className={scss.about__section_6_role}>DPLA’s Statement on Potentially Harmful Content: </span>
                <span className={scss.about__section_6_name}>Audrey Altman, DPLA Metadata Working Group Members</span>
              </li>
              <li>
                <span className={scss.about__section_6_role}>Copyrighted Images: </span>
                <span className={scss.about__section_6_name}>Collection of the Massachusetts Historical Society; National Portrait Gallery, Smithsonian Institution; Schomburg Center for Research in Black Culture, Photographs and Prints Division, The New York Public Library; The Stephen H. Hart Research Center, History Colorado; WUSTL Digital Gateway Image Collections & Exhibitions</span>
              </li>
          </ul>
        </div>
      </div>

      <SponsorPreFooter
        text="The grant for this collection is made possible through funding from "
        sponsor="Pivotal Ventures, A Melinda Gates Company."
        buttonText="SEARCH THE COLLECTION"
        buttonIcon="/static/icon/button-arrow.svg" />

    </>
  )
}

export default AboutPage