import React from "react"
import scss from "../HomePage/HomePage.module.scss"
import RoundButton from "components/shared/RoundButton"
import StyledTextWithButtons from "components/shared/StyledTextWithButtons"
import SponsorPreFooter from "components/shared/SponsorPreFooter"
import Link from "next/link"
import HomeSearchBar from "components/HomePage/HomeSearchBar"

const Offlink = ({ url, image }) => <a href={url} target={"_blank"} rel="noopener">{image}</a>


const HomePage = () => {
  return (
    <>
      <section className={scss.banner} data-cy="home__banner">
        <div className={scss.banner__background}></div>
        <div className={scss.banner_left__div}>
          <p className={scss.banner__text}>Black women’s suffrage.</p>
          <p className={scss.banner__text}>Thousands of artifacts.</p>
          <p className={scss.banner__text}>Thousands of stories.</p>
          <RoundButton text="LEARN MORE" icon={"/static/icon/button-arrow.svg"} url={"/about"} />
        </div>
        <div className={scss.banner_right__div}>
          <img src="/static/graphic/home-page/home-graphic-hero.svg" alt="Landing page banner"/>
        </div>
      </section>

      <HomeSearchBar />

      <section className={`section__default ${scss.home__section_1}`}>
        <div className={scss.home__section_1__left}>
          <StyledTextWithButtons
            title="BLACK WOMEN’S SUFFRAGE PORTAL"
            subtitle="The Black Women’s Suffrage Digital Collection is a collaborative project to provide digital access to materials documenting the roles and experiences of Black Women in the Women’s Suffrage Movement and, more broadly, women’s rights, voting rights,
        and civic activism between the 1850s and 1960."
            text="The materials in this collection include photographs, correspondence, speeches, event programs, publications, oral histories, and other artifacts."
            buttonText1="SEARCH THE COLLECTION"
            buttonIcon1="/static/icon/button-arrow.svg"
            buttonUrl1="/search"
          />
        </div>
        <div className={scss.home__section_1__right}>
          <img src={"/static/graphic/home-page/home-graphic-body-1-mobile.png"} alt="Collage of suffragettes"/>
        </div>
      </section>

      <section className={`section__default ${scss.home__section_2}`}>
        <div className={scss.section_2__div_left}>
          <div className={scss.section_2__div_left_mobile}>
            <img className={scss.section_2__div_left} src="/static/image/home-page/home-image-body-1-mobile.jpg" />
          </div>

          <div className={scss.section_2__div_left_desktop}>
            <img className={scss.section_2__div_left} src="/static/image/home-page/home-image-body-1.jpg" />
          </div>
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

      <section className={scss.home__section_3}>
        <div className={scss.home__section_3_content}>
          <h3 className="title">DIGITAL COLLECTION</h3>
          <p>By combining archival materials from DPLA’s network of over 4,000 institutions, newly digitized content and partnerships, the collection seeks to engage students, educators and researchers in exploration and dialogue around this important, yet overlooked chapter in our nation’s history.</p>
        </div>
      </section>

      <section className={scss.home__section_4}>
        <h3 className="title">FEATURED COLLECTIONS</h3>
        <div className={scss.home__section_4_collections}>
          <div className={scss.home__section_4_tile}>
            <img className={scss.home__section_4_tile_img} src="/static/image/home-page/home-carousel-ida.jpg" alt="Portrait of Ida B Wells Barnett"/>
            <div className={scss.home__section_4_tile_title}>
              <h3>Ida B. Wells Barnett Papers</h3>
              <Link href="/collections/ida-b-wells">
                <a>
                  VIEW COLLECTION
                  <img src="/static/icon/button-arrow-purple.svg" alt="View collection button icon"/>
                </a>
              </Link>
            </div>
          </div>
          <div className={scss.home__section_4_tile}>
            <img className={scss.home__section_4_tile_img} src="/static/image/home-page/home-carousel-mary.jpg" alt="Portrait of Mary Church Terrell"/>
            <div className={scss.home__section_4_tile_title}>
              <h3>Mary Church Terrell Exhibit</h3>
              <p>COMING SOON</p>
            </div>
          </div>
          <div className={scss.home__section_4_tile}>
            <img className={scss.home__section_4_tile_img} src="/static/image/home-page/home-carousel-charlotta.jpg" alt="Portrait of Charlotta Bass"/>
            <div className={scss.home__section_4_tile_title}>
              <h3>Charlotta Bass Papers</h3>
              <p>COMING SOON</p>
            </div>
          </div>
        </div>
        <RoundButton text="SEE ALL COLLECTIONS" icon={"/static/icon/button-arrow.svg"} url={"/collections"} />
      </section>

      <section className={scss.home__section_5}>
        <div className={scss.section_5__div_left}>
          <StyledTextWithButtons
            title="PARTNERS"
            subtitle="DPLA established new partnerships with five libraries and archives to collaborate on the creation of a national digital collection that highlights the roles and experiences of Black women in the women’s suffrage movement, as well as Black women’s history of activism, as part of the centennial celebration of the passage of the 19th Amendment."
            buttonText1="LEARN MORE ABOUT PARTNERS"
            buttonIcon1="/static/icon/button-arrow.svg"
            buttonUrl1="/partners"
          />
        </div>
        <div className={scss.section_5__div_right}>
          <div className={scss.section_5__div_right_imgs}>
            <Offlink url={"https://www.amistadresearchcenter.org/"}
              image={<img src="/static/graphic/home-page/partner/home-graphic-partner-1-amistad.png" alt="Amistad Research Center"/>} />
            <Offlink url={"https://www.auctr.edu/"}
              image={<img src="/static/graphic/home-page/partner/home-graphic-partner-2-auc-woodriff.png" alt="Atlanta University Center Robert W. Woodruff Library"/>} />
            <Offlink url={"http://www.socallib.org/"} 
              image={<img src="/static/graphic/home-page/partner/home-graphic-partner-3-scl.png" alt="Southern California Library"/>} />
            <Offlink url={"https://cmlibrary.org"} 
              image={<img src="/static/graphic/home-page/partner/home-graphic-partner-4-charlotte-mecklenberg.png" alt="Charlotte Mecklenberg"/>} />
            <Offlink url={"https://avery.cofc.edu/"}
              image={<img src="/static/graphic/home-page/partner/home-graphic-partner-5-avery.png" alt="Avery Research Center for African American History and Culture"/>} />
            <Offlink url={"https://www.tuskegee.edu/libraries"}
              image={<img src="/static/graphic/home-page/partner/home-graphic-partner-6-tuskegee.png" alt="Tuskegee University Library"/>} />
          </div>
        </div>
      </section>

      <SponsorPreFooter
        text="This collection is made possible through funding from "
        sponsor="Pivotal Ventures, A Melinda Gates Company."
        sponsorLink="https://www.pivotalventures.org/"
        buttonText="SEARCH THE COLLECTION"
        buttonIcon="/static/icon/button-arrow.svg" />
    </>
  )
};

export default HomePage;