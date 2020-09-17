import scss from "components/KeyFiguresPage/KeyFiguresPage.module.scss"

import { sarahRemond } from "constants/key-figures";

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

const SarahRemond = () => {

  return (
    <>
      <IntroAndPortrait figure={ sarahRemond } />

      <section>
        <p><SearchTag label="Sarah Remond" tag="blackwomensuffrage_sarah_parker_remond"/> was the daughter of a prominent free Black abolitionist family in Salem, Massachusetts. In addition to advocating for abolition, the Remond family was a vocal critic of school segregation and pushed for integrated schools in Salem, which became the first town in Massachusetts to enact integrated public schools in 1844. An avid reader, Remond become Involved in the abolitionist cause at a young age and frequently attended anti-slavery lectures in Salem and Boston.</p>
      </section>
         
      <section>
        <SectionTitle title="Speaking Out" />
        <p>In 1853, she purchased a ticket to attend an opera at the Howard Athenaeum in Boston, but was then forcibly removed from the theater on account of her race. In response, she successfully sued the theater and won a small cash settlement. In 1856, at age 30, Remond joined her brother <SearchTag label="Charles Lenox Remond" tag="blackwomensuffrage_charles_lenox_remond"/> on his lecture tour of New York, even giving short speeches at several stops. Over the course of the next two years, she gave lectures at anti-slavery meetings in several states. In 1858, she left the U.S. for England, on a mission to win English support for the abolitionist cause. Her lectures describing the atrocities of slavery and racial injustice were well-received. In addition to giving 45 lectures in 25 cities and towns across England, Ireland and Scotland, Remond also pursued continued education at the Bedford College for Ladies.</p>
      </section>

      <section>
        <SectionTitle title="The Expat Abolitionist" />
        <p>After the Civil War, she continued to live in London, where she became a member of the <SearchTag label="London Emancipation Society" tag="blackwomensuffrage_london_emancipation_society"/> and the Freedmen's Aid Association, working to raise money and supplies for the newly emancipated. Remond left London for Florence in 1866, where she attended medical school and then practiced medicine for two decades.</p>
      </section>

      <SearchPrompt figure={sarahRemond} />

      <Sources sources={sarahRemond.sources}/>
    </>
  )
}

export default SarahRemond
