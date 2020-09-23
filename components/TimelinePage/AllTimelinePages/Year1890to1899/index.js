import React from "react"
import Link from "next/link"
import scss from "components/TimelinePage/TimelinePage.module.scss"
import SearchTag from "shared/SearchTag"

const Year1890to1899 = () => {
  return (
    <>
      <div className={scss.timeline__title} data-cy="timeline__title">
        <div className={scss.timeline__title_background}></div>
        <h1>1890-1899</h1>
        <div className={scss.timeline__title_line}></div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1890</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>The <SearchTag label="American Woman Suffrage Association (AWSA)" tag="blackwomensuffrage_american_woman_suffrage_association"/> and <Link href='/search?q="National+Woman+Suffrage+Association"'><a>National Woman Suffrage Association (NWSA)</a></Link> merge to form the <SearchTag label="National American Woman Suffrage Association (NAWSA)" tag="blackwomensuffrage_national_american_women_suffrage_association"/>. The new organization takes a state-by-state approach and is led by <Link href="/search?q=elizabeth+cady+stanton"><a>Elizabeth Cady Stanton</a></Link> and <Link href="/search?q=susan+b+anthony"><a>Susan B. Anthony</a></Link>. One of the strategies the new group deploys is to sideline Black women in an effort to win the support of Southern white women (Terborg-Penn, 56). However, Black women such as <SearchTag label="Mary Church Terrell" tag="blackwomensuffrage_mary_church_terrell"/> attend NAWSA meetings and implore white suffragists to take the disenfranchisement of Black men seriously.</p>
          <p>Wyoming becomes the first state to allow women to vote.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1892</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Journalist Carrie Langston (mother of <Link href="/search?q=langston hughes"><a>Langston Hughes</a></Link>) writes in Kansas' <em>Atchison Blade</em>, highlighting the importance of Black women's participation in politics and criticizing men who attempted to maintain women's inferior position in society (Terborg-Penn, 58).</p>
          <p>Thomas Moss, a friend of both <SearchTag label="Ida B. Wells Barnett" tag="blackwomensuffrage_ida_b_wells"/> and Mary Church Terrell, is lynched along with three other Black men by whites who were angry that their grocery store was competing with a white business. Both Wells Barnett and Terrell are galvanized by his murder into anti-lynching and civil rights activism, including a lifelong dedication to voting rights for African Americans. That same year, Wells Barnett is forced out of her Memphis home and to leave her paper <em>Free Speech</em>, amid white criticism of her printing her objection to lynching and racial discrimination (Terborg-Penn, 59).</p>
          <p><SearchTag label="Victoria Earle Matthews" tag="blackwomensuffrage_victoria_earle_matthews"/> becomes president of the Women's Loyal Union in New York City. By 1895, Women's Loyal Union members have collected 10,000 signatures on petitions in support of the Woman Suffrage Resolution being considered by the U.S. Congress.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1894</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p><SearchTag label="Fannie Barrier Williams" tag="blackwomensuffrage_fannie_barrier_williams"/> is denied membership by the <SearchTag label="Chicago Women's Club" tag="blackwomensuffrage_chicago_womens_club"/> because of her race. The decision was reversed 14 months later.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1895</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p><SearchTag label="Adella Hunt Logan" tag="blackwomensuffrage_adella_hunt_logan"/> becomes a member of NAWSA. Logan was also active in developing support of suffrage among members of the Tuskegee Women's Club, which became an affiliate of <SearchTag label="National Association of Colored Women's Clubs (NACW)" tag="blackwomensuffrage_national_association_of_colored_women"/> in 1896, and of which she was an active member.</p>
          <p>Susan B. Anthony asks <SearchTag label="Frederick Douglass" tag="blackwomensuffrage_frederick_douglass"/> not to attend the upcoming NAWSA convention in Atlanta, so as not to upset the group's southern hosts, in an example of how white suffragists chose political expediency over loyalty to their Black allies.</p>
          <p>The first national conference of colored women meets in Boston. At this meeting, the group decides to form a national organization, the National Federation of Afro-American Women, representing 36 Black women's clubs in 12 states, with <SearchTag label={<em>The Woman's Era</em>} tag="blackwomensuffrage_womans_era_newspaper"/>, a newspaper edited by <SearchTag label="Josephine St. Pierre Ruffin" tag="blackwomensuffrage_josephine_st_pierre_ruffin"/>, as its official press outlet.</p>
          <p>Mary Church Terrell is appointed the first Black woman on the Washington, D.C Board of Education.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1896</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>The <SearchTag label="National League of Colored Women" tag="blackwomensuffrage_national_league_of_colored_women"/>, the National Federation of Afro-American Women, and more than 100 local Black women's clubs merge to form the NACW, with Mary Church Terrell as the group's first president. Other NACW leadership includes Ida B. Wells Barnett, <SearchTag label="Frances E.W. Harper" tag="blackwomensuffrage_frances_ellen_watkins_harper"/>, Josephine St. Pierre Ruffin, <SearchTag label="Anna Julia Cooper" tag="blackwomensuffrage_anna_j_cooper"/>, <SearchTag label="Fanny Jackson Coppin" tag="blackwomensuffrage_fanny_jackson_coppin"/> and others. The NACW motto is "lifting as we climb."</p>
          <p>In Plessy v. Ferguson, the Supreme Court rules that facilities for Black Americans can be "separate but equal."</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1897</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>With leadership from Mary Church Terrell, the Washington, D.C. Board of Education institutes the first known commemoration of Black history in American schools. Terrell successfully proposes a Frederick Douglass Day in the "colored" schools of the district to commemorate his support of abolition and women's suffrage before the Civil War.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1898</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Mary Church Terrell speaks at the NAWSA convention in Washington, D.C.</p>
        </div>
      </div>
    </>
  )
}

export default Year1890to1899;
