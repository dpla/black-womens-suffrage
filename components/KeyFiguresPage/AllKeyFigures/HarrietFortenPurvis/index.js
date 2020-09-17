import scss from "components/KeyFiguresPage/KeyFiguresPage.module.scss"

import { harrietFortenPurvis } from "constants/key-figures";

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

const HarrietFortenPurvis = () => {

  return (
    <>
      <IntroAndPortrait figure={ harrietFortenPurvis } />

      <section>
          <SectionTitle title="A Family Affair" />
        <p>One of the well-known "Forten Sisters," <Link href="/search?q=harriet+forten+purvis"><a>Harriet Forten Purvis</a></Link> was the daughter of <Link href="/search?q=Charlotte+Vandine+Forten"><a>Charlotte Vandine Forten</a></Link> and <SearchTag label="James Forten" tag="blackwomensuffrage_james_forten"/>, prominent Black abolitionists from Philadelphia, Pennsylvania. Like her sisters, she was an active abolitionist and suffragist.</p>
      </section>

      <section>
        <p>She helped establish the <SearchTag tag="blackwomensuffrage_philadelphia_female_anti_slavery_society" label="Philadelphia Female Anti-Slavery Society"/> along with her mother and sisters; it was the first biracial women's abolitionist group in the United States. Forten served as a co-chair of the society's fairs, which raised money for the group's anti-slavery work. She also served on the society's sewing committee, which established a sewing school in a poor area of Philadelphia. She was active in the group's boycott of goods, including cotton and fruits and vegetables, that were produced with slave labor. </p>
        <p>In 1832, Forten married <SearchTag label="Robert Purvis" tag="blackwomensuffrage_robert_purvis"/>, with whom she had five children. Purvis, who was of mixed race, was the scion of another prominent abolitionist family from Philadelphia, and the two were at the center of Philadelphia's abolitionist community. They welcomed fugitive slaves into their Byberry, Pennsylvania, home, which became a major station on the <Link href="/search?q=underground+railroad"><a>Underground Railroad</a></Link>.</p>
      </section>

      <section>

        <p>Abolition, however, was not Forten Purvis's only cause—she was also a firm believer in equality for all and women's rights. Along with her sister <SearchTag tag="blackwomensuffrage_margaretta_forten" label="Margaretta"/>, she helped organize the fifth National Woman's Rights Convention in Philadelphia in 1854 and was active with the <SearchTag label="American Equal Rights Association (AERA)" tag="blackwomensuffrage_american_equal_rights_association"/>, a biracial group that advocated for universal suffrage.  Forten Purvis also lectured on civil rights topics, speaking out against segregation in the years after the Civil War.</p>
      </section>

      <SearchPrompt figure={harrietFortenPurvis} />

      <Sources sources={harrietFortenPurvis.sources}/>
    </>
  )
}

export default HarrietFortenPurvis
