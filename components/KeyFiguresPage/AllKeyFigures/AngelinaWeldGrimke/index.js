import scss from "components/KeyFiguresPage/KeyFiguresPage.module.scss"

import { angelinaWeldGrimke } from "constants/key-figures";

import SectionTitle from "components/KeyFiguresPage/SectionTitle";
import CurvedTextBox from "components/KeyFiguresPage/CurvedTextBox";
import LeftBorderTextBox from "components/KeyFiguresPage/LeftBorderTextBox";
import BorderedTextBox from "components/KeyFiguresPage/BorderedTextBox";
import Sources from "components/KeyFiguresPage/Sources";
import KeyFiguresPagination from "components/KeyFiguresPage/KeyFiguresPagination";
import IntroAndPortrait from "components/KeyFiguresPage/IntroAndPortrait";

const AngelinaWeldGrimke = () => {

  return (
    <>
      <IntroAndPortrait figure={ angelinaWeldGrimke } />
   
      <section>
        <p>Angelina Weld Grimké was born into a prominent biracial abolitionist family from Boston. Her father was Archibald Grimké, the son of a white plantation owner and enslaver and an enslaved woman of mixed race, and the nephew of the well-known white abolitionist and suffragist sisters Sarah and Angelina Grimké. Her mother Sarah Stanley was from a middle-class Midwestern family. Grimké's parents split when she was just 3 years old, and although she initially lived with white mother, at 7 she was returned to her father's care and never saw her mother again. Raised by her well-off father, who was a lawyer and the executive director of the National Association for the Advancement of Colored People (NAACP), Grimké was educated at some of the best schools in Massachusetts. She became an English teacher in her early 20s, working at the Armstrong Manual Training School and what would become Dunbar High School, both in Washington, D.C., and continuing her education in the summers.</p>
      </section>

      <section>
        <SectionTitle title="Writings" />
        <p>At Dunbar, Grimké made the acquaintance of a group of Black women writers, and began writing about her observations of Black life and racism, among other topics. Her writing, which included poetry, plays, essays and short stories, is often described as having helped lay the groundwork for the Harlem Renaissance. Among Grimké's most well-known works is the play Rachel, published in 1920 in response to NAACP founder W.E.B. Dubois's call for the creation of theater by and for Black people. The play tells the story of a young Black woman who decides she will not bring children into a world plagued by racism. According to historian Elizabeth Brown-Guillory, it was the first play written by a Black woman to become a "fully staged professional production." In addition, Grimké's poetry has been included in several prominent anthologies of Black poetry.</p>
      </section>

      <section>
        <SectionTitle title="Using Poetry and Theater to Advance Suffrage" />
        <p>A supporter of women's suffrage like her well-known aunts, Grimké believed that winning the vote was essential to ending injustice against women. She developed friendships with prominent suffragists and activists Mary Church Terrell and Coralie Franklin Cook, both of whom were involved in the National American Woman Suffrage Association and Black women's club movement, and she was active in an influential group of Washington, D.C.-based Black women suffragists that included Terrell and Cook, as well as Nannie Helen Burroughs, Anna Julia Cooper and others.</p>
      </section>

      <section>
        <SectionTitle title="Legacy" />
        <p>Grimké died in 1958 in New York City. Her work is considered to have helped set the stage for the Harlem Renaissance.</p>
      </section>

      <Sources sources={ angelinaWeldGrimke.sources }/>
    </>
  )
}

export default AngelinaWeldGrimke
