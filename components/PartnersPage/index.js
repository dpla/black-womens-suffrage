import React from "react";

import PageBanner from "components/shared/PageBanner"

import scss from "./PartnersPage.module.scss";

const ImgOfflink = ({ url, image }) => <a href={url} target={"_blank"} data-cy="image_offlink">{image}</a>
const TextOfflink = ({ url, text }) => <a href={url} target={"_blank"} rel="noopener" data-cy="text_offlink">{text}</a>

function PartnersPage() {
  const title = "PARTNERS",
    text = "Reconstructing visibility of Black women's activism together.",
    graphic = "/static/graphic/partners-page/partners-graphic-hero.png"


  return (
    <>
      <PageBanner title={title} text={text} graphic={graphic} />
      <div className={`site-max-width container ${scss.partners__wrapper}`}>
        <section className={scss.partners__section_1}>
          <div className={scss.partners__section_1_intro}>
            <h1>PARTNERSHIP</h1>
            <p>Digital Public Library of America (DPLA) is proud to partner with the following institutions in the creation of a national digital collection that highlights the roles and experiences of Black women in the women’s suffrage movement, as well as Black women’s history of activism, as part of the centennial celebration of the passage of the 19th Amendment:</p>
          </div>
          <div className={scss.partners__section_1_logos}>
            <ImgOfflink url={"https://www.amistadresearchcenter.org/"}
              image={<img src="/static/graphic/home-page/partner/home-graphic-partner-1-amistad.png" alt="Amistad Research Center" />} />
            <ImgOfflink url={"https://www.auctr.edu/"}
              image={<img src="/static/graphic/home-page/partner/home-graphic-partner-2-auc-woodriff.png" alt="Atlanta University Center Robert W. Woodruff Library" />} />
            <ImgOfflink url={"http://www.socallib.org/"}
              image={<img src="/static/graphic/home-page/partner/home-graphic-partner-3-scl.png" alt="Southern California Library" />} />
            <ImgOfflink url={"https://cmlibrary.org"}
              image={<img src="/static/graphic/home-page/partner/home-graphic-partner-4-charlotte-mecklenberg.png" alt="Charlotte Mecklenberg" />} />
            <ImgOfflink url={"https://avery.cofc.edu/"}
              image={<img src="/static/graphic/home-page/partner/home-graphic-partner-5-avery.png" alt="Avery Research Center for African American History and Culture" />} />
            <ImgOfflink url={"https://www.tuskegee.edu/libraries"}
              image={<img src="/static/graphic/home-page/partner/home-graphic-partner-6-tuskegee.png" alt="Tuskegee University Library" />} />
          </div>
        </section>

        <section className={scss.partners__section_2}>
          <h2>PARTNERS</h2>

          <div className={scss.partners__section_2_links}>
            <div>
              <p><TextOfflink url="https://www.auctr.edu/" text="Atlanta University Center" /> and <TextOfflink url="https://www.tuskegee.edu/libraries" text="Tuskegee University" /> are both HBCUs with collections documenting women’s history of organizing for political action in the American South.</p>
              <p>The <TextOfflink url="https://avery.cofc.edu/" text="Avery Research Center" /> and <TextOfflink url="https://www.amistadresearchcenter.org/" text="Amistad Research Center" /> are institutions committed to collecting, preserving and providing open access to the history and culture of African Americans and the diaspora.</p>
            </div>
            <div>
              <p>The <TextOfflink url="http://www.socallib.org/" text="Southern California Library" /> documents and makes accessible histories of struggles that challenge racism and other systems of oppression and holds extensive collections of histories of community resistance in Los Angeles and beyond.</p>
              <p>In addition, DPLA is partnering with the <TextOfflink url="https://cmlibrary.org" text="Charlotte Mecklenburg Library on their Engage2020: Look Back, Move Forward events." /></p>
            </div>
          </div>


          <div className={scss.partners__section_2_more}>
            <p>For more detailed information about these partnerships, <TextOfflink url="https://dp.la/news/dpla-announces-new-partnerships-with-five-libraries-and-archives-to-build-national-digital-black-womens-suffrage-collection" text="please click here." /></p>
          </div>
        </section>

        <section className={scss.partners__section_3}>
          <div className={scss.partners__section_3_left}>
            <p className={scss.partners__section_3_bold}>The collaboration is powered by funding from <TextOfflink url="https://www.pivotalventures.org/" text="Pivotal Ventures" />, an investment and incubation company created by Melinda Gates.</p>
            <p>Funds will enable the partner institutions to digitize artifacts related to the history of Black women in the suffrage movement, and, more broadly, women’s rights, voting rights and civic activism between the 1850s and the 1960s, in order to make these important collections more widely accessible.</p>
          </div>
          <div className={scss.partners__section_3_right}>
            <div></div>
          </div>
        </section>

        <section className={scss.partners__section_4}>
          <div className={scss.partners__section_4_intro}>
            <h3>SPECIAL THANKS</h3>
            <p>We are especially proud to center our partners’ expertise as subject specialists in this work and extend a heartfelt thank you to the project coordinators for their insightful curation:</p>
          </div>
          <div className={scss.partners__section_4_tiles}>

            <div className={scss.partners__section_4_tile_group}>
              <div className={scss.partners__section_4_tile}>
                <p className={scss.partners__section_4_name}>Dana Chandler</p>
                <p className={scss.partners__section_4_role}>University Archivist and Associate Professor, Tuskegee University Archives</p>
              </div>

              <div className={scss.divider}></div>

              <div className={scss.partners__section_4_tile}>
                <p className={scss.partners__section_4_name}>Christopher Harter</p>
                <p className={scss.partners__section_4_role}>Deputy Director, Amistad Research Center</p>
              </div>

              <div className={scss.divider}></div>

              <div className={scss.partners__section_4_tile}>
                <p className={scss.partners__section_4_name}>Aaisha Haykal</p>
                <p className={scss.partners__section_4_role}>Manager of Archival Services, Avery Research Center for African American History & Culture at the College of Charlesto</p>
              </div>

              <div className={scss.divider}></div>

              <div className={scss.partners__section_4_tile}>
                <p className={scss.partners__section_4_name}>Yusef Omowale</p>
                <p className={scss.partners__section_4_role}>Director, Southern California Library</p>
              </div>

              <div className={scss.divider}></div>
            </div>


            <div className={scss.partners__section_4_tile_group}>
              <div className={scss.partners__section_4_tile}>
                <p className={scss.partners__section_4_name}>Sarah Tanner</p>
                <p className={scss.partners__section_4_role}>Head, Archives Research Center, Atlanta University Center Robert W. Woodruff Library</p>
              </div>

              <div className={scss.divider}></div>

              <div className={scss.partners__section_4_tile}>
                <p className={scss.partners__section_4_name}>Hannah Terrell</p>
                <p className={scss.partners__section_4_role}>Branch Leader, Allegra Westbrooks Regional Library, Charlotte Mecklenburg Library</p>
              </div>

              <div className={scss.divider}></div>

              <div className={scss.partners__section_4_tile}>
                <p className={scss.partners__section_4_name}>Martha Yesowitch</p>
                <p className={scss.partners__section_4_role}>Community Partnerships Leader, Charlotte Mecklenburg Library</p>
              </div>
            </div>

          </div>
        </section>

        <section className={scss.partners__section_5}>
          <div className={scss.partners__section_5_left}>
            <div>
              <h4>WEBINAR</h4>
              <p>On July 16, 2020, DPLA hosted Race, Gender, Politics, and History: Reconstructing Visibility of Black Women’s Activism.</p>
            </div>
          </div>
          <div className={scss.partners__section_5_right}>
            <p>This webinar featured a keynote by Allison Robinson, doctoral candidate in American History and American Material Culture at the University of Chicago, discussing teaching with digital exhibits, her experience working with the university’s Ida B. Wells collection, and how digital artifacts can help reconstruct visibility.</p>
            <p>Representatives from our partner institutions also introduced the collections that they are digitizing as part of the Black Women’s Suffrage collection and provided perspective about how these artifacts can help us better understand Black women suffragists and the historical and continuing activism of Black women.</p>
            <a className={scss.roundButton} href="https://dpla.zoom.us/rec/play/75Z8Ie6h_DI3T9PEtgSDVPEoW9TuJqis13BN_qIKzxmyVHMKNgamYLsWZeMsg3xlnOgP_huLHvi6gzs5?autoplay=true&startTime=1594918908000" target="_blank"  rel="noopener" data-cy="round_button">
              SEE LIVE RECORDING
              <img src="/static/icon/button-arrow.svg" alt={""} />
            </a>
          </div>
        </section>

        <section className={scss.partners__section_6}>
          <div>
            <p>For more information about this work, please contact DPLA Director of Community Engagement Shaneé Yvette Murrain at <TextOfflink url="mailto:shanee@dp.la" text="shanee@dp.la" /></p>
          </div>
        </section>

      </div>
    </>
  );
}

export default PartnersPage;
