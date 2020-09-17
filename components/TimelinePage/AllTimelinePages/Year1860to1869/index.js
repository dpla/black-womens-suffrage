import React from "react"
import Link from "next/link"
import scss from "components/TimelinePage/TimelinePage.module.scss"

const Year1860to1869 = () => {
  return (
    <>
      <div className={scss.timeline__title}>
        <div className={scss.timeline__title_background}></div>
        <h1>1860-1869</h1>
        <div className={scss.timeline__title_line}></div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1865</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>The American Civil War comes to an end. On December 6, 1865, the 13th Amendment is passed, abolishing slavery in the United States.</p>
          <p>In a letter to the editor of the New York Standard, Elizabeth Cady Stanton writes, in reference to Black men winning the vote, "In fact, it is better to be the slave of an educated white man, than of a degraded, ignorant Black one." (Davis, 44)</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1866</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>
            <Link href="/search?q=Frances+Harper">
              <a className={scss.timeline__a}>
                Frances E.W. Harper 
              </a>
            </Link>
             calls for women's suffrage at the 11th National Woman's Rights Convention in May, saying, "justice is not fulfilled so long as woman is unequal before the law."</p>
          <p>Anti-Slavery Convention of American Women, an interracial meeting of women dedicated to ending slavery and racial discrimination, meets in New York City.</p>
          <p>The American Equal Rights Association (AERA) is founded. AERA advocates for and petitions Congress for universal suffrage. Sojourner Truth, Frances E.W. Harper, Margaretta Forten, Sarah Remond and Hattie Purvis among other Black women are active in the organization. Hattie Purvis serves on AERA's executive committee, serving at various times as the group's recording secretary and corresponding secretary."</p>
          <p>Both Black men and women participate in the founding of the interracial Philadelphia Suffrage Association. Harriet Purvis serves on the group's executive committee.</p>
          <p>Charlotte Rollin calls for universal suffrage in a speech in front of the South Carolina House of Representatives.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1866-<br/>1867</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Sarah and Charles Remond advocate for women's suffrage while lecturing throughout New York state, prior to the state's 1867 constitutional convention. Lawmakers do not include voting rights for women in the constitution.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1867</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Stanton supporter George Francis Train argues during a debate over suffrage in Kansas that to grant suffrage to Black men was "absurd, especially if white women were not enfranchised." (Terborg-Penn, 28)</p>
          <p>"Lucy Stone describes Republicans who criticized those opposed to Black suffrage as "unutterably contemptible from the lips or pens of those whose words, acts, and votes are not against ignorant and degraded negroes, but against every man's mother, wife, and daughter."</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1868</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Senator Samuel Pomeroy (R-KS) introduces a federal universal suffrage amendment, but the Senate refuses to vote on it.</p>
          <p>Four Black women are among the 172 women who cast mock ballots in Vineland, New Jersey, after being blocked from participating in an election. This was part of a "New Departure" strategy to read the Fourteenth Amendment expansively as already granting women voting rights, since it confirmed their citizenship. This strategy, endorsed at the 1871 NWSA convention, was supported by Black suffragists Mary Ann Shadd Cary and Sojourner Truth. (Terborg-Penn, 38)</p>
          <p>William J. Whipper, husband of Charlotte Rollin, argues for suffrage for women and Black men while serving as a delegate to the 1868 South Carolina Constitutional Convention.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1869</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>AERA dissolves after infighting over support for the 15th Amendment, which would give African-American men the right to vote, but ignore women's suffrage. In the wake of AERA's demise, the movement splits: One group of white suffragists, including Elizabeth Cady Stanton and Susan B. Anthony, found the National Woman Suffrage Association (NWSA). During this period, Stanton in particular expresses racist views, doubting the ability of Black men to be responsible voters. The resulting NWSA strategy "pitted Black men against women in a racist way." (Terborg-Penn, 27). Meanwhile, Lucy Stone, Henry Blackwell and Julia Ward Howe form the American Woman Suffrage Association (AWSA). The two groups move forward with different strategies: NWSA pursues a federal women's suffrage amendment, while AWSA takes a state-by-state approach. Black women join and are active in both groups, although more Black women choose the AWSA due to its support for suffrage for Black men, an important issue for Black women. Frances E.W. Harper, Charlotte Forten,
            <Link href="/search?q=Josephine+St+Pierre+Ruffin">
              <a className={scss.timeline__a}>
                Josephine St. Pierre Ruffin
              </a>
            </Link>
            and Sojourner Truth are among those that join the AWSA, while Mary Ann Shadd Cary, Harriet Purvis and Hattie Purvis are among those that join the NWSA.</p>
          <p>Wyoming becomes the first American territory to grant women suffrage.</p>
          <p>At the 1869 AERA meeting in New York City, Frances E.W. Harper weighs in on the Black suffrage vs. women's suffrage debate; she supports suffrage for Black men, saying "When it was a question of race, I let the lesser question of sex go. But the white women all go for sex, letting race occupy a minor position (Terborg-Penn, 32).\" (Harper, however, was not content with Black men's suffrage; she continued to fight for women's suffrage as well.) As white women at the meeting spoke out against suffrage for Black men, including Elizabeth Cady Stanton's remarks against the idea of "ignorant Negroes and foreigners to make laws for her to obey," Harper responded: "If the nation could handle only one question, I would not have Black women put a single straw in the way, if only the men of the race could obtain what they wanted." White feminists Lucy Stone and Abby Kelly Foster joined her in this position. (Terborg-Penn, 32)</p>
          <p>Louisa Rollin speaks on the floor of the South Carolina House of Representatives in support of universal suffrage.</p>
        </div>
      </div>
    </>
  )
}

export default Year1860to1869;
