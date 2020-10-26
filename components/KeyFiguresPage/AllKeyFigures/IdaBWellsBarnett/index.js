import scss from "components/KeyFiguresPage/KeyFiguresPage.module.scss"

import { idaBWellsBarnett } from "constants/key-figures";

import SectionTitle from "components/KeyFiguresPage/SectionTitle";
import CurvedTextBox from "components/KeyFiguresPage/CurvedTextBox";
import LeftBorderTextBox from "components/KeyFiguresPage/LeftBorderTextBox";
import BorderedTextBox from "components/KeyFiguresPage/BorderedTextBox";
import Sources from "components/KeyFiguresPage/Sources";
import KeyFiguresPagination from "components/KeyFiguresPage/KeyFiguresPagination";
import IntroAndPortrait from "components/KeyFiguresPage/IntroAndPortrait";
import SearchPrompt from "components/KeyFiguresPage/SearchPrompt";
import SearchTag from "shared/SearchTag";
import Link from "next/link";

const IdaBWellsBarnett = () => {

  return (
    <>
      <IntroAndPortrait figure={ idaBWellsBarnett } />

      <section>
        <SectionTitle title="Early Years" />
        <p>Pioneering investigative journalist, civil rights activist, suffragist and feminist <SearchTag label="Ida B. Wells-Barnett" tag="blackwomensuffrage_ida_b_wells"/> was born enslaved in Holly Springs, Mississippi, in July 1862 during the American Civil War. When the war ended and the Reconstruction era began, Wells’ parents, James and Lizzie Wells, became active in Republican politics. Her father, a skilled carpenter, was  a member of the <Link href='/search?q="Freedmen’s+Aid+Society"'><a>Freedmen’s Aid Society</a></Link>, which founded <Link href='/search?q="shaw+university"'><a>Shaw University</a></Link> (now Rust College), a school for those recently freed from enslavement, in Holly Springs. James Wells was a trustee at Shaw and Wells and her siblings attended the school, as did her mother. In 1878, the death of her parents and infant brother from yellow fever forced Wells to leave school at age 16 to care for her five siblings. </p>
        <p>Despite her young age, Wells was able to get a job as a teacher at a local elementary school to support the family while her grandmother cared for the children during the day. After her grandmother died, Wells moved with two of her sisters to live with an aunt in Memphis, Tennessee, where she continued to work as a teacher, while attending <Link href='search?q="fisk+university"'><a>Fisk University</a></Link> in Nashville during summer breaks. In 1884, while riding a train from Memphis to Nashville, a train conductor ordered Wells to sit in the colored section of the train despite the fact that she had purchased a first class ticket. When she refused, the train crew forcibly removed her from the train; Wells protested and defiantly bit a crew member’s hand. Wells sued the railroad, winning a $500 settlement in circuit court, although in 1887 the decision was overturned by the Tennessee Supreme Court.</p>
      </section>

      <section>
        <SectionTitle title="The Free Speech and Headlight" />
        <p>Soon after, Wells turned to writing, becoming the editor of the weekly newspapers Evening Star and Living Way and contributing columns to larger publications including the New York Age, Indianapolis World and Conservator (out of Chicago) under the pen name “Iola.” In 1889, Wells purchased a one-third stake in the Memphis newspaper Free Speech and Headlight. She began writing criticisms of the substandard educational opportunities and facilities available to Black children; in retaliation, her teaching contract was not renewed. </p>
      </section>

      <section>
        <SectionTitle title="The People’s Grocery Lynching" />
        <BorderedTextBox text={<p>In 1892, in what is now known as the People’s Grocery lynching, three Black men who were acquaintances of Wells’ were lynched by a white mob angry that a grocery store owned by one of the Black men was successfully competing with a white-owned store. Wells wrote articles denouncing the lynching, and, began to conduct lynching investigations, concluding that innocent Black men were being lynched on the basis of trumped up charges, usually of raping white women. Wells’ investigations found that not only were most victims of lynching innocent of any crime, but that lynching was used as a form of economic retaliation against Black men who were succeeding financially.</p>}/>
        <p>Whites used lynching to inspire fear among Black communities, and instead of protecting Black citizens and punishing perpetrators, law enforcement was often involved in the crimes. Wells wrote an impassioned editorial denouncing the practice, challenging the assumption that lynching was a response to criminal behavior and broaching the idea that white women did in fact have sex with Black men of their own free will. In retaliation, a group of angry whites destroyed her newspaper’s office while she was out of town and threatened to kill her if she returned to Memphis. </p>
      </section>

      <section>
        <SectionTitle title="The Fight to End Lynching" />
        <LeftBorderTextBox text={<p>Wells moved to New York, where she wrote for the New York Age and continued her thorough investigations of lynchings all over the South, detailing her findings in a pamphlet called “Southern Horrors: Lynch Law in All Its Phases” in 1892.</p>} />
        <p>She earned a national following with both her accessible writing style and a successful speaking tour. Wells believed that creating international pressure was the most effective way to galvanize the U.S. government to address the problem of lynching, and embarked on tours of England and Scotland, lecturing about her investigations. In 1893, Wells began calling for a  boycott of the World Columbian Exposition, to be held in Chicago later that year, in response to racism among the fair’s planners, and published and distributed a pamphlet entitled, <Link href="/search?q=The+Reason+Why+the+Colored+American+is+not+in+the+World's+Columbian+Exposition"><a>“The Reason Why the Colored American Is Not in the Columbian Exposition.”</a></Link></p>
        <CurvedTextBox text={<p>Wells moved to Chicago, where she helped to found the Ida B. Wells Club, which started Chicago’s first Black kindergarten as well as the city’s first Black orchestra.</p>}/>
        <p>In 1895, she married attorney and fellow activist Ferdinand Barnett, founder of the Conservator newspaper, and changed her last name to Wells-Barnett. The couple went on to have four children together in addition to Barnett’s two children from a prior marriage, and Wells was an active and involved mother while continuing both her journalism career and activism. Also in 1895,</p>

        <section className={scss.left_border_text_box__container}>
          <p>Wells published <Link href='/search?q="a+red+record"'><a>A Red Record: Tabulated Statistics and Alleged Causes of Lynching in the United States, 1892-1894</a></Link>, in which she used data to describe how lynching was used deliberately as a tool to preserve white supremacy and limit the upward mobility of African Americans.</p>
        </section>
        <p>Wells-Barnett continued to work tirelessly, though ultimately unsuccessfully, throughout her career for the passage of a federal anti-lynching law.</p>
      </section>

      <section>
        <SectionTitle title="Uniting Black Women" />
        <BorderedTextBox text={<p>In 1896, Wells-Barnett joined with other Black women leaders to found the <SearchTag label="National Association of Colored Women" tag="blackwomensuffrage_national_association_of_colored_women"/>, a national federation of Black women’s clubs that worked to better Black women’s lives through a variety of programs including job training, child care, recreation and wage equity advocacy, as well as working toward civil rights and women’s suffrage and against lynching.</p>}/>
        <p>She was critical of <Link href="/search?q=booker+t+washington"><a>Booker T. Washington</a></Link> and what she considered to be his accommodationist approach; she was instead a supporter of <Link href="/search?q=marcus+garvey"><a>Marcus Garvey</a></Link> and Timothy Thomas Fortunes. The U.S. Secret Service declared her a radical for her alliance with Garvey and his United Negro Improvement Association (UNIA). In 1909, Wells-Barnett was one of two women to help found the <SearchTag label="National Association for the Advancement of Colored People (NAACP)" tag="blackwomensuffrage_naacp"/>, although she later distanced herself from the organization, as she felt that it was not taking a strong enough stand against racism. </p>
      </section>

      <section>
        <SectionTitle title="Advocating for Suffrage " />
        <p>Wells-Barnett believed that enfranchisement was key to ending lynching and winning civil rights, and she was a vocal proponent of Black women’s suffrage. In January 1913, as Illinois was considering granting women suffrage,</p>
        <CurvedTextBox text={<p>Wells-Barnett founded, along with white suffragist Belle Squire, the Alpha Suffrage Club in Chicago with the goal of both drumming up support for suffrage among Black women and providing education about citizenship and voting. It was the first organization of its kind in Chicago, and Wells-Barnett served as its first president.</p>}/>
        <p>That March, Wells-Barnett was among some 60 women from Illinois to travel to that year’s women’s suffrage demonstration in Washington, D.C. Black women were initially barred from this first public demonstration for women's suffrage, but were eventually included, provided they march as one group at the back of the parade. Ida B. Wells was among the women who protested this decision, saying of the event, </p>
        <LeftBorderTextBox text={<p>The southern women have tried to evade the question time and again by giving some excuse or other every time it has been brought up. If the Illinois women do not take a stand now in this great democratic parade then the colored women are lost.</p>}/>
        <p>In the end, Black women marched along with white women in groups organized by profession, by education and as homemakers. They also marched in state delegations, which all assembled at the back of the parade, according to the processional chart. </p>
      </section>

      <section>
        <SectionTitle title="Building Political Power" />
        <CurvedTextBox text={<p>In 1915, Wells-Barnett and the Alpha Suffrage Club were instrumental in successfully registering and organizing Black voters to help elect <Link href="/search?q=oscar+depriest"><a>Oscar DePriest</a></Link> as Chicago’s first Black alderman.</p>}/>
        <p>Wells believed that electing Republicans in the North might help to counterbalance Democratic gains in the South as Black men were increasingly disenfranchised and she worked to that end, supporting various Republican candidates and campaigning for Warren Harding in the presidential election of 1920. She also continued her journalism career alongside her activism, including covering the 1917-1919 race riots. In 1922, Wells-Barnett traveled to Arkansas to investigate Black farmers accused of murder and published a pamphlet about the case entitled the “The Arkansas Race Riot.” In 1928, she began writing her autobiography, which was completed and edited by her daughter and published after her death. She also ran, unsuccessfully, for the Illinois state senate in 1930. Wells-Barnett died of kidney disease in 1931. In 2020, Ida B. Wells-Barnett was awarded a posthumous Pulitzer Price special citation "[f]or her outstanding and courageous reporting on the horrific and vicious violence against African Americans during the era of lynching."</p>
      </section>

      <SearchPrompt figure={idaBWellsBarnett} />

      <Sources sources={idaBWellsBarnett.sources}/>
    </>
  )
}

export default IdaBWellsBarnett
