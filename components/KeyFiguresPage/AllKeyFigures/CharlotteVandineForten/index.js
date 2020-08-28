import scss from "components/KeyFiguresPage/KeyFiguresPage.module.scss"

import { charlotteVandineForten } from "constants/key-figures";

import SectionTitle from "components/KeyFiguresPage/SectionTitle";
import CurvedTextBox from "components/KeyFiguresPage/CurvedTextBox";
import LeftBorderTextBox from "components/KeyFiguresPage/LeftBorderTextBox";
import BorderedTextBox from "components/KeyFiguresPage/BorderedTextBox";
import Sources from "components/KeyFiguresPage/Sources";
import KeyFiguresPagination from "components/KeyFiguresPage/KeyFiguresPagination";
import IntroAndPortrait from "components/KeyFiguresPage/IntroAndPortrait";

const CharlotteVandineForten = () => {

  return (
    <>
      <IntroAndPortrait figure={ charlotteVandineForten } />

      <section>
        <SectionTitle title="Women Abolitionists" />
        <p>Charlotte Vandine Forten was the matriarch of a financially well-off and prominent Black family in Philadelphia, Pennsylvania. Forten's husband James was a sailmaker. Her daughters Margaretta Forten, Sarah Louise Forten Purvis and Harriet D. Forten Purvis, often referred to as the "Forten Sisters," were, along with their parents, active in the abolitionist movement. James Forten was a member of the American Anti-Slavery Society, but as the group did not permit women to join, Charlotte and her daughters joined with a like-minded group of women to form the Philadelphia Female Anti-Slavery Society in 1833. This was the first biracial organization of female abolitionists in the United States, and one of six abolitionist groups the Forten family helped to found and finance.</p>
      </section>

      <Sources sources={charlotteVandineForten.sources}/>
    </>
  )
}

export default CharlotteVandineForten

