import scss from "components/KeyFiguresPage/KeyFiguresPage.module.scss"

import { maryTalbert } from "constants/key-figures";

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

const MaryTalbert = () => {

  return (
    <>
      <IntroAndPortrait figure={ maryTalbert } />
      
      <section>
        <p> Civil rights activist, anti-lynching crusader, suffragist and educator Mary Morris Burnett Talbert was born in Oberlin, Ohio in 1866.</p>
      </section>

      <section>
        <SectionTitle title="A Groundbreaking Career" />
        <p>At age 19, she completed her degree in 1886 from Oberlin College, where she was the only African-American woman in her graduating class. After college, Talbert taught and was an assistant principal at Bethel University in Arkansas before becoming the principal of Union High School in Little Rock. A trailblazer, Burnett was the only African-American woman to hold such a position in all of Arkansas.</p>
      </section>
         
      <section>
        <SectionTitle title="Leadership in the NACW and the NAACP" />
        <p>After marrying William Talbert in 1891, the couple moved to Buffalo, where she became active in the politically minded Michigan Avenue Baptist Church. She helped found the Phyllis Wheatley Club of Colored Women, which later merged with the National Association of Colored Women (NACW). Talbert gained prominence for her protest of the all-white board of the 1901 Pan-American Exposition, which was to be held in Buffalo. She demanded the appointment of a Black board member and called for an exhibit showcasing African-American life.</p>
        <p>In 1905, Talbert and her husband hosted a secret meeting of civil rights activists led by W.E.B. DuBois at her home. The group adopted a series of civil rights resolutions that formed the basis of the Niagara Movement—so named for the Talbert home's proximity to Niagara Falls—that pushed for equality for Black men and was a forerunner of the National Association for the Advancement of Colored People (NAACP). Although Talbert, as a woman, was excluded from that initial meeting, she went on to serve as vice president and a board member of the NAACP from 1918 until her death in 1923.</p>
        <p>She also served as NACW president from 1916 to 1920, and it was under her leadership that the NACW was accepted as a full member of the International Council of Women (ICW). In 1920, at the ICW's annual conference, Talbert argued that white women were "duty bound to lift [their] voices against the ills that afflict [their] sisters of color."</p>
        <p>A year before her death, Talbert became the first female recipient of the NAACP's prestigious Springarn Medal for her lifetime of work on behalf of women of color.</p>
      </section>

      <SearchPrompt figure={maryTalbert} />

      <Sources sources={maryTalbert.sources}/>
    </>
  )
}

export default MaryTalbert
