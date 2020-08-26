import scss from "components/KeyFiguresPage/KeyFiguresPage.module.scss"

// TODO CHANGE IMPORT
import { sojournerTruth } from "constants/key-figures";

import SectionTitle from "components/KeyFiguresPage/SectionTitle";
import CurvedTextBox from "components/KeyFiguresPage/CurvedTextBox";
import LeftBorderTextBox from "components/KeyFiguresPage/LeftBorderTextBox";
import BorderedTextBox from "components/KeyFiguresPage/BorderedTextBox";
import Sources from "components/KeyFiguresPage/Sources";
import KeyFiguresPagination from "components/KeyFiguresPage/KeyFiguresPagination";

const AngelinaWeldGrimke = () => {
  return (
    <>
     <div className={scss.key_figures__intro}>
      <div className={scss.key_figures__info}>
        <h6 className={scss.key_figures__dates}>   DATE   </h6>
        <h2 className={scss.key_figures__name}>Sojourner Truth</h2>
      </div>

      <div className={scss.key_figures__portrait}>
        <img src="https://picsum.photos/300/400"/>
      </div>
    </div>
      

      <p>   INTRO SENTENCE    </p>
   

      <section>
        <SectionTitle title="   SUBHEADING   " />
        <p></p>
      </section>
         

      <section>
        <SectionTitle title="   SUBHEADING   " />
        <p></p>
      </section>

      // TODO CHANGE SOURCES
      <Sources sources={sojournerTruth.sources}/>

      // TODO CHANGE PREV NEXT
      <KeyFiguresPagination prevFigure="Charlotte Vandine Forten" nextFigure="Harriet Forten Purvis"/>
    </>
  )
}

export default AngelinaWeldGrimke
