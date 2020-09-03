import scss from "components/KeyFiguresPage/KeyFiguresPage.module.scss"

import { charlotteFotrenGrimke } from "constants/key-figures";

import SectionTitle from "components/KeyFiguresPage/SectionTitle";
import CurvedTextBox from "components/KeyFiguresPage/CurvedTextBox";
import LeftBorderTextBox from "components/KeyFiguresPage/LeftBorderTextBox";
import BorderedTextBox from "components/KeyFiguresPage/BorderedTextBox";
import Sources from "components/KeyFiguresPage/Sources";
import KeyFiguresPagination from "components/KeyFiguresPage/KeyFiguresPagination";
import IntroAndPortrait from "components/KeyFiguresPage/IntroAndPortrait";

const CharlotteFotrenGrimke = () => {

  return (
    <>
      <IntroAndPortrait figure={ charlotteFotrenGrimke } />
      
      <section>
        <p>Charlotte Forten Grimké was born into the prominent Black abolitionist Forten family in Philadelphia. Her paternal grandparents were the abolitionists and equal rights advocates Charlotte Vandine Forten and James Forten. Forten's mother died when she was just 3 years old, and her father, Robert Bridges Forten, did not want her to attend Philadelphia's segregated schools. Instead, at 16 years old, she was sent to the more progressive Salem, Massachusetts, where she boarded with the Remond family, who were also prominent Black abolitionists.</p>
      </section>

      <section>
        <SectionTitle title="A Glimpse Into Black Life" />
        <p>She began keeping a diary while studying at Higginson Grammar School for Girls, where she was the only Black student. These diaries became a lifelong habit and they were posthumously published in 1988, offering insight into Black life in the final years of slavery and the time immediately after abolition.</p>
      </section>

      <section>
        <SectionTitle title="The New Responsibilities of Citizenship" />
        <p>In 1856, Forten became the first-ever Black graduate of what would become Salem State University. Wishing to support herself without the help of a husband, she became a teacher at an all white-school in Salem and began writing poetry, some of which was published in William Lloyd son's The Liberator.</p>
        <p>Following in her family's activist footsteps, Forten moved to the Sea Islands of South Carolina in 1862 as part of an effort to educate enslaved people on plantations abandoned by their owners when Union forces gained control of the area at the beginning of the Civil War. Although she left the islands after the death of her father and repeated bouts of pneumonia in 1864, she wrote about her time there in the two-part essay "Life in the Sea Islands," which was published in Atlantic Monthly. The essay depicted a Black population eager to learn, support themselves and assume the new responsibilities of citizenship.</p>
        <p>Back in Massachusetts, she served as secretary of the Freedmen's Union Commission's Boston branch. Forten later returned to teaching in South Carolina and at an all-Black school in Washington, D.C. and clerked at the U.S. Department of the Treasury.</p>
      </section>

      <section>
        <p>When she was 41, Forten married the Reverend Francis Grimké, who was 13 years her junior. Grimké was the son of a white plantation owner named Henry Grimké and his Black enslaved worker Nancy Weston. He and his brother Archibald, who would become the executive director of the National Association for the Advancement of Colored People (NAACP), became free at the end of the Civil War. Grimké's education at Lincoln University was subsidized by his aunts, the white abolitionist and suffragist sisters Sarah and Angelina Grimké.</p>
        <p>After her marriage, Forten Grimké continued her activism, joining the National Association of Colored Women (NACW) and advocating for women's suffrage. She also continued to write poetry and essays calling for an end to racial injustice and violence.</p>
      </section>
      
      <Sources sources={charlotteFotrenGrimke.sources}/>
    </>
  )
}

export default CharlotteFotrenGrimke
