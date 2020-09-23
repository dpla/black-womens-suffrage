import React from "react"
import Link from "next/link"
import scss from "components/TimelinePage/TimelinePage.module.scss"
import SearchTag from "shared/SearchTag"

const Year1870to1889 = () => {
  return (
    <>
      <div className={scss.timeline__title} data-cy="timeline__title">
        <div className={scss.timeline__title_background}></div>
        <h1>1870-1889</h1>
        <div className={scss.timeline__title_line}></div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1870</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>The <SearchTag label="Fifteenth Amendment" tag="blackwomensuffrage_fifteenth_amendment"/> is passed, giving African-American men the right to vote.</p>
          <p>Charlotte Rollin is elected secretary of the integrated South Carolina Woman's Rights Association and at that years convention, says, "We ask suffrage not as a favor, not as a privilege, but as a right based on the grounds that we are human beings, and as such entitled to all human rights." According to historian Rosalyn Terborg-Penn, Rollin's speech is the first by an African-American woman other than <SearchTag label="Sojourner Truth" tag="blackwomensuffrage_sojourner_truth"/> to be preserved by white suffrage leaders in their history of the suffrage movement. (Terborg-Penn, 45)</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1871</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Charlotte Rollin writes in an 1871 article in <SearchTag label="American Woman Suffrage Association (AWSA)" tag="blackwomensuffrage_american_woman_suffrage_association"/>'s Woman's Journal: "We ask suffrage not as a favor, not as a privilege, but as a right based on the grounds that we are human beings and as such entitled to all human rights."</p>
          <p>Charlotte Rollin leads a meeting at the South Carolina state capitol to advocate for women's suffrage.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1871-<br/>1872</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p><SearchTag label="Mary Ann Shadd Cary" tag="blackwomensuffrage_marry_ann_shadd_cary"/> unsuccessfully attempts to register to vote in Washington, D.C., challenging the language of the Fourteenth and Fifteenth Amendments. Using her legal training, Cary unsuccessfully argues that as a taxpayer in the District of Columbia, she should have the same rights as male taxpayers. (Terborg-Penn, 38,39)</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1872</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Sojourner Truth shows up to vote at a polling station in Battle Creek, Michigan, but is turned away.</p>
          <p>White suffragist Virginia Minor and her husband Francis sue the St. Louis registrar for barring Virginia Minor from voting, arguing the Fourteenth Amendment has been misinterpreted. The U.S. Supreme Court eventually decides against the Minors. As a result of this case, suffragists realize they need to push for a new constitutional amendment rather than trying to challenge the interpretation of the Fourteenth Amendment.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1873</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p><SearchTag label="Frances E.W. Harper" tag="blackwomensuffrage_frances_ellen_watkins_harper"/> delivers the closing speech at the AWSA convention in New York City, saying, "much as white women need the ballot, colored women need it more." Harper also called for more intersectional demands like equal rights and equal access to education for Black women, which, according to historian Rosalyn Terborg-Penn, was likely a radical position to take in a single-issue organization like AWSA (Terborg-Penn, 47).</p>
          <p>Mrs. Beatty attends the inaugural convention of the <Link href='/search?q="National+Woman+Suffrage+Association"'><a>National Woman Suffrage Association (NWSA)</a></Link>-affiliated Oregon State Woman Suffrage Association, showing that Black women were active in the western women's suffrage movement (Terborg-Penn, 50).</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1874</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p><SearchTag label="The Woman's Christian Temperance Union (WCTU)" tag="blackwomensuffrage_womens_christian_temperance_union"/> is founded. Both Black and white women favor temperance because men's drinking led to increased incidents of domestic violence and to men spending the wages their families needed.The temperance and women's suffrage movements become allied, leading the liquor industry to become one of the suffragists' strongest opponents, as they believed that if women could vote, they'd outlaw liquor. Frances E.W. Harper was affiliated with the Philadelphia WCTU in the late 1870s and was appointed the national superintendent of the Department of Work Among Colored People, serving from 1883 to 1890. She was succeeded by Lucy Thurman of Michigan.</p>
          <p>Mary Ann Shadd Cary addresses the House of Representatives Judiciary Committee, calling out the hypocrisy that although she paid equal taxes to any man in Washington, D.C., she did not have equal rights, as she is not permitted to vote.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1876</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Mary Ann Shadd Cary writes to NWSA, asking that the names of 94 Black women from Washington, D.C. be added to a centennial autograph book as signers of the Women's Declaration of Sentiments.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1877</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Frances E.W. Harper addresses the <Link href='/search?q="Association+for+the+Advancement+of+Women"'><a>Association for the Advancement of Women (AAW)</a></Link> Woman's Congress. Her talk, entitled, "The Colored Women of America," sets out the issues that would be taken up by <SearchTag label="Mary Church Terrell" tag="blackwomensuffrage_mary_church_terrell"/> and others in the <SearchTag label="National Association of Colored Women's Clubs (NACW)" tag="blackwomensuffrage_national_association_of_colored_women"/> in 1890s (Collier-Thomas, 54).</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1878</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>The Woman Suffrage amendment, written by <Link href="/search?q=susan+b+anthony"><a>Susan B. Anthony</a></Link>, is raised in Congress by California Senator A.A. Sargent. Although it ultimately fails, it includes the language that some 40 years later forms the basis for the 19th Amendment.</p>
          <p>Mary Ann Shadd Cary announces that Black women, determined to win suffrage, "would support whatever party would allow them their rights, be it Republican or Democratic."</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1879</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p> In Massachusetts, women are granted the right to vote in school board elections.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1880</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Mary Ann Shadd Cary founds the Colored Women's Franchise Association in Washington, D.C. to advocate for Black women's suffrage, political rights, expanded access to education and improved employment opportunities and working conditions. The group's tenure is short-lived, perhaps because of the radical nature of Cary's positions (Terborg-Penn, 84) or because she organized before Black women formed their own national organization, with the 1896 founding of the NACW.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1881</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p><SearchTag label="Gertrude Bustill Mossell" tag="blackwomensuffrage_gertrude_bustill_mossell"/> writes an article entitled "Woman's Suffrage," in which she calls for readers to become better informed about the history of the suffrage movement and women's rights. The article is reprinted in the New York Freeman in 1885.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1884</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>One year into her tenure as the leader of the WCTU, Frances E.W. Harper voices support for the temperance movement, saying "As a race, we have a right to be interested in the success of the temperance movement (Terborg-Penn, 85)."</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1887</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>The U.S. Senate votes against women's suffrage.</p>
        </div>
      </div>

    </>
  )
}

export default Year1870to1889;
