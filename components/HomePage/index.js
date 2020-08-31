import React from "react"
import scss from "../HomePage/HomePage.module.scss"
import RoundButton from "components/shared/RoundButton"
import StyledTextWithButtons from "components/shared/StyledTextWithButtons"
import SponsorPreFooter from "components/shared/SponsorPreFooter"

const HomePage = () => {
  return (
    <>
      <section className={scss.banner}>
        <div className={scss.banner__background}></div>
        <div className={scss.banner_left__div}>
          <p className={scss.banner__text}>Black women’s suffrage.</p>
          <p className={scss.banner__text}>Thousands of artifacts.</p>
          <p className={scss.banner__text}>Thousands of stories.</p>
          <RoundButton text="LEARN MORE" icon={"/static/icon/button-arrow.svg"} url={"/about"} />
        </div>
        <div className={scss.banner_right__div}>
          <img src="/static/graphic/home-page/home-graphic-hero.svg" />
        </div>
      </section>

      <section className={`section__default ${scss.home__section_1}`}>
        <StyledTextWithButtons
          title="BLACK WOMEN’S SUFFRAGE PORTAL"
          subtitle="The Black Women’s Suffrage Digital Collection is a collaborative project to provide digital access to materials documenting the roles and experiences of Black Women in the Women’s Suffrage Movement and, more broadly, women’s rights, voting rights,
        and civic activism between the 1850s and 1960."
          text="The materials in this collection include photographs, correspondence, speeches, event programs, publications, oral histories, and other artifacts."
          buttonText1="SEARCH THE COLLECTION"
          buttonIcon1="/static/icon/button-arrow.svg"
          buttonUrl1="/search"
        />
        <div className={scss.home__section_1__right}>
          <div className={scss.home__section_1__img}></div>
        </div>
      </section>

      <section className={`section__default ${scss.home__section_2}`}>
        <div className={scss.section_2__div_left}>
          <img src="/static/image/home-page/home-image-body-1.png" />
        </div>
        <div className={scss.section_2__div_right}>
          <StyledTextWithButtons
            title="ADDING SHADES OF CONTEXT"
            subtitle="The collection explores both the roots of women’s activism in Black communities; the ongoing struggle to secure, protect, and use the right to vote, beyond the Suffrage Movement; and the intersections between voting rights and other civil rights."
            buttonText1="SEE TIMELINE"
            buttonIcon1="/static/icon/button-arrow.svg"
            buttonUrl1="/timeline"
            buttonText2="SEE KEY FIGURES"
            buttonIcon2="/static/icon/button-arrow.svg"
            buttonUrl2="/key-figures"
          />
        </div>
      </section>

      {/* <section className={scss.home__section_3}>
        <div className={scss.section_3__div_leftt}>
          <StyledTextWithButtons
            title="DIGITAL COLLECTION"
            subtitle="Loreum ipsum"
            text="By combining archival materials from DPLA’s network of over 4,000 institutions, newly digitized content and partnerships, the collection seeks to engage students, educators and researchers in exploration and dialogue around this important, yet overlooked chapter in our nation’s history."
            buttonText1="SEARCH ALL COLLECTIONS"
            buttonIcon1="/static/icon/button-arrow.svg"
            buttonUrl1="/search"
          />
        </div>
        <div className={scss.section_3__div_right}>
          <img src="/static/graphic/home-page/home-graphic-body-2.png"/>
        </div>
      </section> */}

      {/* <SponsorPreFooter
        text="The grant for this collection is made possible through funding from "
        sponsor="Pivotal Ventures, A Melinda Gates Company."
        buttonText="SEARCH THE COLLECTION"
        buttonIcon="/static/icon/button-arrow.svg" /> */}
    </>
  )
};

export default HomePage;