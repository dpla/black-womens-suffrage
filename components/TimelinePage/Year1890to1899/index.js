import React from "react"
import Link from "next/link"
import scss from "components/TimelinePage/TimelinePage.module.scss"

const Year1890to1899 = () => {
  return (
    <>
      <div className={scss.timeline__title}>
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
          <p>The AWSA and NWSA merge to form the National American Woman Suffrage Association (NAWSA). The new organization takes a state-by-state approach and is led by Elizabeth Cady Stanton and Susan B. Anthony. One of the strategies the new group deploys is to sideline Black women in an effort to win the support of Southern white women (Terborg-Penn, 56). However, Black women such as Mary Church Terrell attend NAWSA meetings and implore white suffragists to take the disenfranchisement of Black men seriously.</p>
          <p>Wyoming becomes the first state to allow women to vote.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1892</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Journalist Carrie Langston (mother of Langston Hughes) writes in Kansas' Atchison Blade, highlighting the importance of Black women's participation in politics and criticizing men who attempted to maintain women's inferior position in society (Terborg-Penn, 58).</p>
          <p>Thomas Moss, a friend of both Ida B. Wells Barnett and Mary Church Terrell, is lynched along with three other Black men by whites who were angry that their grocery store was competing with a white business. Both Wells Barnett and Terrell are galvanized by his murder into anti-lynching and civil rights activism, including a lifelong dedication to voting rights for African Americans. That same year, Wells Barnett is forced out of her Memphis home and to leave her paper Free Speech, amid white criticism of her printing her objection to lynching and racial discrimination (Terborg-Penn, 59).</p>
          <p>Victoria Earle Matthews becomes president of the Women's Loyal Union in New York City. By 1895, Women's Loyal Union members have collected 10,000 signatures on petitions in support of the Woman Suffrage Resolution being considered by the U.S. Congress.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1894</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Fannie Barrier Williams is denied membership by the Chicago Women's Club because of her race. The decision was reversed 14 months later.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1895</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Adella Hunt Logan becomes a member of NAWSA. Logan was also active in developing support of suffrage among members of the Tuskegee Women's Club, which became an affiliate of NACW in 1896, and of which she was an active member.</p>
          <p>Susan B. Anthony asks Frederick Douglass not to attend the upcoming NAWSA convention in Atlanta, so as not to upset the group's southern hosts, in an example of how white suffragists chose political expediency over loyalty to their Black allies.</p>
          <p>The first national conference of colored women meets in Boston. At this meeting, the group decides to form a national organization, the National Federation of Afro-American Women, representing 36 Black women's clubs in 12 states, with The Woman's Era, a newspaper edited by Josephine St. Pierre Ruffin, as its official press outlet.</p>
          <p>Mary Church Terrell is appointed the first Black woman on the Washington, D.C Board of Education.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1896</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>The National League of Colored Women, the National Federation of Afro-American Women, and more than 100 local Black women's clubs merge to form the National Association of Colored Women's Clubs (NACW), with Mary Church Terrell as the group's first president. Other NACW leadership includes Ida B. Wells Barnett, Frances E.W. Harper, Josephine St. Pierre Ruffin, Anna Julia Cooper, Fanny Jackson Coppin and others. The NACW motto is "lifting as we climb."</p>
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
