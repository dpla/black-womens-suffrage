import React from "react"
import scss from "components/TimelinePage/TimelinePage.module.scss"
import SearchTag from "shared/SearchTag";
import Link from "next/link";

const Year1820to1859 = () => {
  return (
    <>
      <div className={scss.timeline__title}>
        <div className={scss.timeline__title_background}></div>
        <h1>1820-1859</h1>
        <div className={scss.timeline__title_line}></div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1833</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>The <SearchTag label="Philadelphia Female Anti-Slavery Society" tag="blackwomensuffrage_philadelphia_female_anti_slavery_society"/> is founded. Among its founding members are <Link href="/search?q=Charlotte+Vandine+Forten"><a>Charlotte Vandine Forten</a></Link> and several of her daughters. This was the first biracial organization of female abolitionists in the United States, and one of six abolitionist groups the Forten family helped to found and finance.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1837</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p><Link href='/search?q="Anti-Slavery+Convention+of+American+Women"'><a>Anti-Slavery Convention of American Women</a></Link>, an interracial meeting of women dedicated to ending slavery and racial discrimination, meets in New York City.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1843</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>White woman suffragists gather at the Seneca Falls Convention. No Black women are invited to attend.</p>
          <p><SearchTag label="Frederick Douglass" tag="blackwomensuffrage_frederick_douglass"/> may have been the only Black person in attendance. Douglass becomes the first man (Black or white) to publicly call for women’s suffrage. (Terborg-Penn, p. 14)</p>
          <p>At the <SearchTag label="Colored National Convention" tag="blackwomensuffrage_colored_national_convention"/>, one woman makes a speech making a case for women’s rights.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1850</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>First <SearchTag label="National Women’s Rights Convention" tag="blackwomensuffrage_national_womens_rights_convention"/> held in Worcester, MA. Sojourner Truth and other prominent abolitionists are in attendance.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1851</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p><SearchTag label="Sojourner Truth" tag="blackwomensuffrage_sojourner_truth"/> delivers a speech at a women’s rights convention in Akron, Ohio, despite attempts by white suffragists to prevent her from speaking. Although this speech is known as the “Ain’t I a Woman” speech, Truth likely never used those words. The phrase was attributed to Truth years after the fact by white suffragists.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1852</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p><Link href="/search?q=uncle+tom's+cabin"><a><em>Uncle Tom’s Cabin</em></a></Link> by Harriet Beecher Stowe is published.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1853</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Sojourner Truth speaks about the ways in which the country’s legal system keeps women oppressed at a Broadway Tabernacle meeting in New York City.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1854</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p><Link href="/search?q=harriet+forten+purvis"><a>Harriet Forten Purvis</a></Link> and <SearchTag label="Margaretta Forten" tag="blackwomensuffrage_margaretta_forten"/> play key roles in organizing the Fifth National Woman’s Rights Convention in Philadelphia.</p>
          <p><SearchTag label="Frances Ellen Watkins Harper" tag="blackwomensuffrage_frances_ellen_watkins_harper"/> becomes a lecturer for the <Link href='/search?q="maine+anti-slavery+society"'><a>Maine Anti-Slavery Society</a></Link>. Over the course of the next six years, she travels extensively in the East and Midwest, lecturing about abolition. She earns a national reputation for her oratory and writing. (Gordon, Collier Thomas, p 45)</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1852-<br/>1856</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p><SearchTag label="Mary Ann Shadd Cary" tag="blackwomensuffrage_marry_ann_shadd_cary"/> edits <SearchTag label={<em>The Provincial Freeman</em>} tag="blackwomensuffrage_provincial_freeman"/>. She is the first Black woman newspaper editor in North America. In 1854 and 1855, she gives a series of lectures across the U.S. and Canada, advocating for abolition and women’s rights.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1858</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p><SearchTag label="Sarah Remond" tag="blackwomensuffrage_sarah_parker_remond"/> and her brother <SearchTag label="Charles" tag="blackwomensuffrage_charles_lenox_remond"/> speak at the National Woman’s Rights Convention in New York City.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1859</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Charles Remond declines a nomination to serve on the business committee at the New England Convention of Colored Citizens in Boston, saying that it was time for women to start assuming leadership positions in the group. Ruth Remond and a Mrs. Lawton were instead elected to the committee.</p>
        </div>
      </div>
    </>
  )
}

export default Year1820to1859;
