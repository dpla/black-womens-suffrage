import scss from "components/KeyFiguresPage/KeyFiguresPage.module.scss"

import { harrietPurvisJr } from "constants/key-figures";

import SectionTitle from "components/KeyFiguresPage/SectionTitle";
import CurvedTextBox from "components/KeyFiguresPage/CurvedTextBox";
import LeftBorderTextBox from "components/KeyFiguresPage/LeftBorderTextBox";
import BorderedTextBox from "components/KeyFiguresPage/BorderedTextBox";
import Sources from "components/KeyFiguresPage/Sources";
import KeyFiguresPagination from "components/KeyFiguresPage/KeyFiguresPagination";
import IntroAndPortrait from "components/KeyFiguresPage/IntroAndPortrait";
import SearchTag from "shared/SearchTag";
import Link from "next/link";

const HarrietPurvisJr = () => {

  return (
    <>
      <IntroAndPortrait figure={ harrietPurvisJr } />

      <section>

        <p>The daughter of prominent abolitionists and equal rights activists <Link href="/search?q=harriet+forten+purvis"><a>Harriet Forten Purvis</a></Link> and <SearchTag label="Robert Purvis" tag="blackwomensuffrage_robert_purvis"/>, Harriet Purvis, Jr., known as Hattie, grew up in a household that was at the center of the abolitionist movement in Pennsylvania, as well as a stop on the <Link href="/search?q=underground+railroad"><a>Underground Railroad</a></Link>. Her parents associated with a variety of well-known social reformers including <Link href="/search?q=susan+b+anthony"><a>Susan B. Anthony</a></Link> and <Link href="/search?q=lucretia+mott"><a>Lucretia Mott</a></Link>. She attended the highly progressive Friends Eagleswood School, a coeducational and biracial institution in Perth Amboy, New Jersey, founded by abolitionist <Link href="/search?q=theodore+weld"><a>Theodore Weld</a></Link>.</p>
      </section>

      <section>
        <SectionTitle title="A Committed Suffragist" />
        <p>From a young age, Purvis was active in abolitionist and women's rights work. Considered part of the second generation of American suffragists, she became a member of the <SearchTag tag="blackwomensuffrage_philadelphia_female_anti_slavery_society" label="Philadelphia Female Anti-Slavery Society"/>, founded in part by her grandmother, mother and aunts, in 1866. From 1866 to 1869, she worked with her mother on the group's annual anti-slavery fair to raise funds for the group's abolitionist activities.</p>
        <p>A committed suffragist, she attended the 1866 National Woman's Rights Convention and became a member of the <SearchTag label="American Equal Rights Association (AERA)" tag="blackwomensuffrage_american_equal_rights_association"/>, a group she served as corresponding and recording secretary until the group ceased operations in 1869. She joined the Pennsylvania Woman's Suffrage Association, serving on its executive committee, and was a delegate to the National Woman's Suffrage Association from 1883 to 1900, as well as the group's first African-American vice president. She worked closely for much of her life with Susan B. Anthony to advocate for women's rights.</p>
        <p>Purvis was also active in the temperance movement, joining the <SearchTag label="Woman's Christian Temperance Union (WCTU)" tag="blackwomensuffrage_womens_christian_temperance_union"/> and encouraging Black women to embrace the movement.</p>
      </section>

      <section className={scss.key_figures__disclaimer}>
        <p>In the spirit of highlighting hidden voices, we share Harriet Purvis Jr.’s history here as she was a prominent figure in the Black Women’s Suffrage Movement. We regret that DPLA currently does not have any records documenting her life. If you have information about collections that uncover more of Harriet's voice, please email <a href="mailto:info@dp.la">info@dp.la</a>.</p>
      </section>

      <Sources sources={harrietPurvisJr.sources}/>
    </>
  )
}

export default HarrietPurvisJr
