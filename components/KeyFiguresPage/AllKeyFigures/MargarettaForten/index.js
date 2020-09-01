import scss from "components/KeyFiguresPage/KeyFiguresPage.module.scss"

import { margarettaForten } from "constants/key-figures";

import SectionTitle from "components/KeyFiguresPage/SectionTitle";
import CurvedTextBox from "components/KeyFiguresPage/CurvedTextBox";
import LeftBorderTextBox from "components/KeyFiguresPage/LeftBorderTextBox";
import BorderedTextBox from "components/KeyFiguresPage/BorderedTextBox";
import Sources from "components/KeyFiguresPage/Sources";
import KeyFiguresPagination from "components/KeyFiguresPage/KeyFiguresPagination";
import IntroAndPortrait from "components/KeyFiguresPage/IntroAndPortrait";

const MargarettaForten = () => {

  return (
    <>
      <IntroAndPortrait figure={ margarettaForten } />

      <section>
        <SectionTitle title="Anti-Slavery" />
        <p>A member of the prominent Forten family of Philadelphia, Pennsylvania, Margaretta joined her sisters and mother in becoming a charter member of the Philadelphia Female Anti-Slavery Society in 1833 and was selected along with 13 others to draft the group's constitution. Like her sister Harriet Forten Purivs, Forten remained active in the group for its nearly four decades of existence, serving at different points as its recording secretary and treasurer and representing the group at statewide abolitionist meetings. She worked on the society's membership, education, petition campaign and annual antislavery fair committees, and was particularly active in the donation of books to Black schools. She also raised money for charitable causes related to abolition.</p>
      </section>
         
      <section>
        <SectionTitle title="Suffrage" />
        <p>Forten was an ardent suffragist, and was a member of the biracial American Equal Rights Association (AERA). She helped collect petitions for the Women's National League and helped organize the 1854 National Women's Rights Convention in Philadelphia.</p>
      </section>

      <section>
        <SectionTitle title="Educator and Caregiver" />
        <p>In addition to her work as an abolitionist and suffragist, Forten worked as an educator for nearly four decades, teaching and then founding her own grammar school in 1850. Forten never married, and cared for her parents in their later years.</p>
      </section>

      <Sources sources={margarettaForten.sources}/>
    </>
  )
}

export default MargarettaForten
