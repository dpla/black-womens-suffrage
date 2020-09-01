import scss from "components/KeyFiguresPage/KeyFiguresPage.module.scss"

import { harrietPurvisJr } from "constants/key-figures";

import SectionTitle from "components/KeyFiguresPage/SectionTitle";
import CurvedTextBox from "components/KeyFiguresPage/CurvedTextBox";
import LeftBorderTextBox from "components/KeyFiguresPage/LeftBorderTextBox";
import BorderedTextBox from "components/KeyFiguresPage/BorderedTextBox";
import Sources from "components/KeyFiguresPage/Sources";
import KeyFiguresPagination from "components/KeyFiguresPage/KeyFiguresPagination";
import IntroAndPortrait from "components/KeyFiguresPage/IntroAndPortrait";

const HarrietPurvisJr = () => {

  return (
    <>
      <IntroAndPortrait figure={ harrietPurvisJr } />

      <section>
        <SectionTitle title="Early Years" />
        <p>The daughter of prominent abolitionists and equal rights activists Harriet Forten Purvis and Robert Purvis, Harriet Purvis, Jr., known as Hattie, grew up in a household that was at the center of the abolitionist movement in Pennsylvania, as well as a stop on the Underground Railroad. Her parents associated with a variety of well-known social reformers including Susan B. Anthony and Lucretia Mott. She attended the highly progressive Friends Eagleswood School, a coeducational and biracial institution in Perth Amboy, New Jersey, founded by abolitionist Theodore Weld.</p>
      </section>

      <section>
        <SectionTitle title="Anti-slavery and Women's Rights" />
        <p>From a young age, Purvis was active in abolitionist and women's rights work. Considered part of the second generation of American suffragists, she became a member of the Philadelphia Female Anti-Slavery Society, founded in part by her grandmother, mother and aunts, in 1866. From 1866 to 1869, she worked with her mother on the group's annual anti-slavery fair to raise funds for the group's abolitionist activities.</p>
        <p>A committed suffragist, she attended the 1866 National Woman's Rights Convention and became a member of the American Equal Rights Association (AERA), a group she served as corresponding and recording secretary until the group ceased operations in 1869. She joined the Pennsylvania Woman's Suffrage Association, serving on its executive committee, and was a delegate to the National Woman's Suffrage Association from 1883 to 1900, as well as the group's first African-American vice president. She worked closely for much of her life with Susan B. Anthony to advocate for women's rights.</p>
        <p>Purvis was also active in the temperance movement, joining the Woman's Christian Temperance Union (WCTU) and encouraging Black women to embrace the movement.</p>
      </section>

      <Sources sources={harrietPurvisJr.sources}/>
    </>
  )
}

export default HarrietPurvisJr
