import React from "react"
import Link from "next/link"
import scss from "components/TimelinePage/TimelinePage.module.scss"

const Year1900to1909 = () => {
  return (
    <>
      <div className={scss.timeline__title}>
        <div className={scss.timeline__title_background}></div>
        <h1>1900-1909</h1>
        <div className={scss.timeline__title_line}></div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1900</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>The annual meeting of the General Federation of Women's Clubs is held in Milwaukee, Wisconsin. Suffragist Josephine St. Pierre Ruffin wanted to attend the meeting as the delegate from her Woman's Era Club, but the organizers refused as the club was a Black organization, and one white woman reportedly even ripped Ruffin's membership badge from her dress. Rather than attend as a delegate from one of the mostly white groups of which she was also a member, Ruffin refused to attend altogether. What became known as the "Ruffin incident" was widely covered in newspapers nationwide, with most coverage sympathetic to Ruffin.</p>
          <p>At the NAWSA convention, Mary Church Terrell speaks: "When one observes how all the most honorable and lucrative positions in Church and State have been reserved for men, according to laws which they themselves have made so as to debar women; how, until recently, a married woman's property was under the exclusive control of her husband...These unjust discriminations will ever remain until the source from which they spring--the political disenfranchisement of woman—shall be removed. The injustice...extends to the nation as well, in that it is deprived of the excellent service which woman might render." She went on, "The elective franchise is withheld from one half of its citizens…because the word 'people,' by an unparalleled exhibition of lexicographical acrobatics, has been turned and twisted to mean all who were shrewd and wise enough to have themselves born boys instead of girls, or who took the trouble to be born white instead of black." This latter part of Terrell's remarks were not included in the record of the convention.</p>
          <p>At a celebration of Susan B. Anthony's 80th birthday, Coralie Franklin Cook is the only African-American woman asked to speak. In her remarks, she notes, "...no woman and no class of woman can be degraded and all womenkind not suffer thereby."</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1902</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Fannie Barrier Williams' history of the Black women's club movement is published. In it, she estimates that by 1900 there were 400 Black women's clubs nationwide, with 50 to 200 members each.</p>
          <p>Kentucky reverses allowing female voting in school elections to prevent Black women from voting (Terborg-Penn, 124).</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1903</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>During the annual NAWSA meeting in New Orleans, the organization is criticized by the Times Democrat for using an anti-Black states' rights strategy, in which it turns its back on Black women in order to attract southern support.</p>
          <p>Sylvanie Williams of the Phyllis Wheatley Club of New Orleans calls attention to racial segregation at the NAWSA convention in a letter to Woman's Journal. Williams, who was set to represent NACW, was denied entry. It is believed that one or more NACW members who could pass as white did attend the convention (Terborg-Penn, 92).</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1904</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Amid criticism that Black men had been selling their votes, Mary Church Terrell responds at the NAWSA convention, "My sisters of the dominant race, stand up not only for the oppressed sex, but also for the oppressed race! (Terborg-Penn, 66)"</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1905</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Adella Hunt Logan writes in Colored American magazine: "If white American women, with all their natural and acquired advantages, need the ballot, that right protective of all other rights; if Anglo Saxons have been helped by it... how much more do black Americans, male and female need the strong defense of a vote to help secure them their right to life, liberty and the pursuit of happiness?"</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1907</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Mary Church Terrell publishes the article "A Colored Woman in a White World" in The Independent.</p>
        </div>
      </div>


      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1908</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Lugenia Burns Hope founds the Atlanta Neighborhood Union. The Union was a pioneer at organizing: The women divided the city into zones, districts and neighborhoods, with each assigned to a Union member. In this way, they were able to reach nearly every Black Atlantan.</p>
          <p>Mary Church Terrell challenges the idea of "educated suffrage" that was used to bar not only Blacks but immigrants from voting (Terborg-Penn, 68).</p>
          <p>Alpha Kappa Alpha sorority is founded at Howard University.</p>
          <p>The Equal Suffrage League, led by Sarah Garnet, collects petition signatures in favor of women's suffrage legislation. The petition read, in part, "[W]e, the members of The Equal Suffrage League, representing the National Association of Colored Women through its Suffrage Department…ask to have enacted such legislation as will enforce the 14th and 15th Amendments of the Constitution of our country, the United States of America, throughout all its sections." (Terborg-Penn, 88, 95)</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1909</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Women at the Baptist Women's Convention call attention to how suffrage could help improve the lives of Black women.</p>
        </div>
      </div>

    </>
  )
}

export default Year1900to1909;
