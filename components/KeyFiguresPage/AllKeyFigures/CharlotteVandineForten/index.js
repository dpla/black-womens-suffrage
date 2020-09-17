import scss from "components/KeyFiguresPage/KeyFiguresPage.module.scss"

import { charlotteVandineForten } from "constants/key-figures";

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

const CharlotteVandineForten = () => {

  return (
    <>
      <IntroAndPortrait figure={ charlotteVandineForten } />

      <section>
        <SectionTitle title="Setting the Stage for Women Abolitionists" />
        <p><Link href="/search?q=Charlotte+Vandine+Forten"><a>Charlotte Vandine Forten</a></Link> was the matriarch of a financially well-off and prominent Black family in Philadelphia, Pennsylvania. Forten's husband <SearchTag label="James" tag="blackwomensuffrage_james_forten"/> was a sailmaker. Her daughters <SearchTag tag="blackwomensuffrage_margaretta_forten" label="Margaretta Forten"/>, <SearchTag tag="blackwomensuffrage_sarah_forten_purvis" label="Sarah Louise Forten Purvis"/> and <Link href="/search?q=harriet+forten+purvis"><a>Harriet Forten Purvis</a></Link>, often referred to as the "Forten Sisters," were, along with their parents, active in the abolitionist movement. James Forten was a member of the <SearchTag tag="blackwomensuffrage_american_anti_slavery_society" label="American Anti-Slavery Society"/>, but as the group did not permit women to join, Charlotte and her daughters joined with a like-minded group of women to form the <SearchTag tag="blackwomensuffrage_philadelphia_female_anti_slavery_society" label="Philadelphia Female Anti-Slavery Society"/> in 1833. This was the first biracial organization of female abolitionists in the United States, and one of six abolitionist groups the Forten family helped to found and finance.</p>
      </section>

      <SearchPrompt figure={charlotteVandineForten} />

      <Sources sources={charlotteVandineForten.sources}/>
    </>
  )
}

export default CharlotteVandineForten

