import React from "react"
import Link from "next/link"
import scss from "components/TimelinePage/TimelinePage.module.scss"
import SearchTag from "shared/SearchTag"

const Year1910to1919 = () => {
  return (
    <>
      <div className={scss.timeline__title} data-cy="timeline__title">
        <div className={scss.timeline__title_background}></div>
        <h1>1910-1919</h1>
        <div className={scss.timeline__title_line}></div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1910</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>In a speech at <Link href='/search?q="howard+university"'><a>Howard University</a></Link>, <SearchTag label="Mary Church Terrell" tag="blackwomensuffrage_mary_church_terrell"/> discussed her view that woman's suffrage was needed to help fight societal ills, such as intemperance, that affected Black communities as well as white communities (Terborg-Penn, 86).</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1911</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>At the <SearchTag label="National American Woman Suffrage Association (NAWSA)" tag="blackwomensuffrage_national_american_women_suffrage_association"/> convention in Kentucky, white suffragist Anna Shaw aborts a resolution submitted by a Black suffragist "condemning disenfranchisement on the grounds of both sex and race." Her reasoning was twofold: She did not want to offend white southerners, and she said, "I am in favor of colored people voting, but white women have no enemy in the world who does more to defeat our amendments...than colored men, and until women are...permitted to vote, I am opposed to introducing...a resolution on behalf of men, who if our resolutions were carried, would go straight to the polls and defeat us every time (Terborg-Penn, 117)."</p>        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1912</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Women's suffrage is endorsed by Theodore Roosevelt's Progressive or "Bull Moose" Party, the first national party to support the cause. However, Roosevelt excludes Black southern delegates from the convention to appease white southerners. African Americans and some whites, including Jane Addams, protest. Mary Church Terrell declines to support Roosevelt or the Progressive Party in this context. However, the Baptist Women's Convention Committee on the State of the Country, chaired by Mrs. L.D. Pruitt, do endorse Theodore Roosevelt for president.</p>
          <p><SearchTag label="Mary E. Jackson" tag="blackwomensuffrage_mary_e_jackson"/>, president of the Rhode Island Association of Colored Women's Clubs, connects suffrage to the improvement of working conditions for Black women: "The laboring man had discovered beyond pre-adventure that his most effective weapon of defense is the ballot in his own hand. The self-supporting woman asks for and will accept nothing less." (Terborg-Penn, 74)</p>
          <p>Mary Church Terrell contributes to an issue of the <SearchTag label="National Association for the Advancement of Colored People (NAACP)" tag="blackwomensuffrage_naacp"/> publication <SearchTag label={<em>The Crisis</em>} tag="blackwomensuffrage_crisis_newspaper"/> devoted to arguments in favor of women's suffrage.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1913</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p><SearchTag label="Ida B. Wells Barnett" tag="blackwomensuffrage_ida_b_wells"/> founds the Alpha Suffrage Club.</p>
          <p>NAWSA organizes the first women's suffrage march in Washington, D.C. Black women are initially barred from this first public demonstration for women's suffrage, but are eventually included, provided they march as one group at the back of the parade. Black women protested this decision, forcing NAWSA to allow them to march anywhere. Black women marched along with white women in groups organized by profession, by education and as homemakers. They also marched in state delegations, which all assembled at the back of the parade, according to the processional chart. Ida B. Wells was among the Black women who protested segregation at the parade and marched in the Illinois delegation, saying of the event, "The southern women have tried to evade the question time and again by giving some excuse or other every time it has been brought up. If the Illinois women do not take a stand now in this great democratic parade then the colored women are lost (Terborg-Penn, 122)."</p>
          <p>A second Black sorority, <SearchTag label="Delta Sigma Theta" tag="blackwomensuffrage_delta_sigma_theta_sorority"/>, is founded at Howard University in order to take more overtly political actions. Mary Church Terrell served as a mentor for the Deltas and wrote their vow.</p>
          <p>Black women found the Women's Cooperative Civic League to address problems of housing, health, sanitation and education in Baltimore due to rapid growth. Leaders divide the city into wards, with heads that report on problems to the city government, helping to ensure the needs of Black communities are being met.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1914</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p><SearchTag label="National Association of Colored Women's Clubs (NACW)" tag="blackwomensuffrage_national_association_of_colored_women"/> holds its ninth biennial meeting. At this point, the NACW represents 50,000 Black women in 28 state federations and more than 1,000 local groups.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1914-<br/>1915</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Ida B. Wells Barnett and members of the Alpha Suffrage Club work to register votes to try to elect Black aldermen in Chicago. In 1914, <Link href="/search?q=oscar+depriest"><a>Oscar DePriest</a></Link> solicits their help in running for an open alderman seat (Terborg-Penn, 139).</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1915</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>40,000 women, including Black women and immigrant factory workers, march in a suffrage parade in New York City.</p>
          <p>NAACP leader <SearchTag label="Mary Talbert" tag="blackwomensuffrage_mary_burnett_talbert"/> writes an article for the August 1915 issue of the NAACP publication, <em>The Crisis</em> entitled "Women and Colored Women" saying, "...this struggle becomes two-fold, first, because we are women and second, because we are colored women…" In an essay in that same issue, <SearchTag label="Nannie Helen Burroughs" tag="blackwomensuffrage_nannie_helen_burroughs"/> responded to a white woman asking what Black women would do with the ballot: "What can she do without it?"</p>
          <p><SearchTag label="Josephine Bruce" tag="blackwomensuffrage_josephine_bruce"/>, wife of Mississippi's first Black senator Blanche K. Bruce, writes editorials for NACW in which she advocates for women's suffrage.</p>
          <p>In New Jersey, a women's suffrage amendment to the state constitution fails. Newspapers report that the large number of African-American women supporting the amendment helped turn voters against it. (Terborg-Penn, 121)</p>
          <p><Link href='/search?q="equal+suffrage+league+of+virginia"'><a>The Equal Suffrage League of Virginia</a></Link> responds to anti-suffrage advocates' concerns by noting that Black women can be prevented from voting by the same measures used to disenfranchise Black men. (Terborg-Penn, 125)</p>
          <p>Thanks in part to the support of the Alpha Suffrage Club, Oscar DePriest wins a Chicago alderman seat. DePriest comes out in favor of women's suffrage. Black turnout is also credited with helping William Hale Thompson to be elected mayor of Chicago.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1916-<br/>1970</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>More than 6 million Black Americans move to northern cities from the rural South in what becomes known as the Great Migration.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1916</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>A "Declaration of Principles" is adopted at the annual NACW convention that includes support for the <Link href='/search?q="susan+b+anthony+amendment"'><a>Susan B. Anthony Amendment</a></Link>.</p>
          <p><SearchTag label="The National Woman's Party" tag="blackwomensuffrage_national_womans_party"/>, formed by <Link href="/search?q=alice+paul"><a>Alice Paul</a></Link> and <Link href="/search?q=lucy+burns"><a>Lucy Burns</a></Link> in 1913 as the <SearchTag label="Congressional Union for Woman Suffrage" tag="blackwomensuffrage_congressional_union"/>, begins employing methods successfully used by British women, including demonstrations, meetings and parades. These methods are seen as radical at the time.</p>
          <p>Jeanette Rankin, of Wyoming, becomes the first American woman elected to the U.S. House of Representatives.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1917</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>With World War I raging in Europe, members of the National Women's Party picket in front of the White House, holding signs with sayings like "MR. PRESIDENT: IT IS UNJUST TO DENY WOMEN A VOICE IN THEIR GOVERNMENT WHEN THE GOVERNMENT IS CONSCRIPTING THEIR SONS" and "MR. PRESIDENT, HOW LONG MUST WOMEN WAIT FOR LIBERTY?" Women are arrested and imprisoned, and in one famous case, suffragist Alice Paul goes on a hunger strike and is brutally force-fed. Mary Church Terrell, sometimes accompanied by her teenaged daughter Phyllis, regularly picketed with the National Woman's Party. The National Woman's Party makes the decision to continue picketing even after the U.S joins the war, based on the experiences of abolitionist universal suffrage advocates, who suspended their suffrage campaign to focus on abolition during the Civil War, only to find themselves left out of suffrage for Black men after the war.</p>
          <p>At a March meeting of the Woman Wage Earners Association, a Washington, D.C. organization, founder Jeanette Carter says, "It is no longer considered wise or expedient for women to wait for men to do for them what women should do for women." Carter pushed for women's suffrage as a way to improve the economic condition of Black women.</p>
          <p>After the passage of women's suffrage in Texas, Black women organize voter leagues, included the Colored Welfare League of Austin and the Negro Women Voter's League of Galveston. The groups launch voter registration drives and hold meetings to encourage voter registration (Terborg-Penn, 146).</p>
          <p>Black women in New York City found a chapter of the Woman Suffrage party and send a delegation to the state convention. In September, Annie K. Lewis is elected vice president of the New York Woman Suffrage Party, in a notable instance of a Black woman being elected to a leadership office in an interracial organization.</p>
          <p>In November 1917, the New York state legislature approved a suffrage bill that enfranchised more than 75,000 African-American women. Black women help elect New York's first Black representative to the state assembly and the first Black representative on the Board of Aldermen (Terborg-Penn, 134, 142).</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1918</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>After resisting the lobbying of <Link href="/search?q=Carrie+Chapman+Catt"><a>Carrie Chapman Catt</a></Link> in NAWSA and the picketing and hunger strikes organized by Alice Paul, President Woodrow Wilson finally capitulates and says woman's suffrage is needed as a "war measure." He stalled as long as he possibly could, saying at best that it was an issue that should be decided in the states, a position that was counter to the goal of suffragists who wanted a constitutional amendment.</p>
          <p>Mississippi Senator John Sharpe Williams proposes an amendment to the Anthony suffrage amendment that would permit only white women to vote.</p>
          <p>James Calloway writes an article for the <em>Macon Telegraph</em> in which he attempts to discredit <Link href="/search?q=susan+b+anthony"><a>Susan B. Anthony</a></Link> by pointing out her friendships with Black women. His article is reprinted and circulated by suffrage opponents. Anthony invited Black women to stay at her Rochester, NY, home, challenging white resistance to social equality. Mary Church Terrell and Ida B. Wells were just two of several women who stayed as guests at her home. However, Anthony was also willing to sacrifice Black women's voting rights if it could help her achieve her goal of white women's enfranchisement.</p>
          <p>Black women in New York City found four chapters of Negro Women Voters across Queens County and, in Harlem, Black women found the Women's Non-Partisan League.</p>
          <p>Gertrude E. Curtis and Laura B. Fisher are chosen as delegates to the New York State Republican convention.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1919</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Mississippi Senator Pat Harrison unsuccessfully attempts to change the wording of the original Anthony amendment to include only white women.</p>
          <p>Mary Church Terrell is asked by NAWSA leader <Link href="/search?q=ida+husted+harper"><a>Ida Harper</a></Link> to convince the Northeastern Federation of Colored Women's Clubs to withdraw their request for NAWSA membership. In her request, Harper explained that NAWSA head Carrie Chapman Catt was concerned that accepting the membership would alienate Southern white voters, and that fear of Black women voting was the primary obstacle to ratification (Terborg-Penn, 130). Terrell refuses, instead warning her friend Elizabeth Carter, head of the Northeastern Federation of Colored Women's Clubs of NAWSA's intentions.</p>
          <p>The 19th Amendment is passed by both houses of Congress and the ratification process begins. The amendment gives the vote to nearly 3 million Black women; three quarters of them live in the American South (Terborg-Penn, 151).</p>
        </div>
      </div>

    </>
  )
}

export default Year1910to1919;
