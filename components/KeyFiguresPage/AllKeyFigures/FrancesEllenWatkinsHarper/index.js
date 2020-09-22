import scss from "components/KeyFiguresPage/KeyFiguresPage.module.scss"

import { francesEllenWatkinsHarper } from "constants/key-figures";

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

const FrancesEllenWatkinsHarper = () => {

  return (
    <>
      <IntroAndPortrait figure={ francesEllenWatkinsHarper } />

      <section>
        <p>A 19th-century poet, writer, abolitionist, speaker and temperance and suffrage activist, <SearchTag label="Frances Ellen Watkins Harper" tag="blackwomensuffrage_frances_ellen_watkins_harper"/> was born to free Black parents in slaveholding Maryland in 1825. Orphaned at age 3, Harper attended the William Watkins Academy for Negro Youth, which was run by her uncle, and had already attained a high-quality education when she left school at age 14.</p>
      </section>

      <section>
        <SectionTitle title="The Most Popular Black Poet of Her Time " />
        <p>Despite her schooling, she could only find domestic work, and was employed by a Quaker family who ran a bookstore. Exposed to a wide array of literature, Harper continued to write poetry as she had in her youth, and in 1845, she published her first collection of poems, <em>Forest Leaves.</em></p>
        <p>She later moved to Ohio, where she taught at Union Seminary (later Wilberforce University), which was led by noted abolitionist <Link href="/search?q=john+brown+union+seminary"><a>John Brown</a></Link>. After a brief tenure teaching in Pennsylvania, she became a traveling abolitionist speaker and worked to help enslaved people escape the South via the <Link href="/search?q=underground+railroad"><a>Underground Railroad</a></Link>.</p>
        <p>She continued to write and publish, including a successful second book of poetry, <em>Poems on Miscellaneous Subjects</em>, in 1854. Harper donated a portion of her book sales to fund the Underground Railroad. Harper was a frequent contributor of articles and poems to anti-slavery newspapers, including <SearchTag label="The Liberator" tag="blackwomensuffrage_liberator_newspaper"/>, published by abolitionist <SearchTag label="Frederick Douglass" tag="blackwomensuffrage_frederick_douglass"/>. As a lecturer for the <Link href='/search?q="maine+anti-slavery+society"'><a>Maine Anti-Slavery Society</a></Link>, she traveled throughout New England, southern Canada and some western states, while continuing to publish poems and articles on a variety of subjects, including slavery, women's rights and temperance.</p>
        <p>In 1860, Harper married and had a child, after which she wrote less frequently. But, upon the death of her husband in 1864, she returned to the lecture circuit, writing and traveling extensively while advocating for women's rights and civil rights.</p>
      </section>

      <section>
        <SectionTitle title="Fighting Racism Within the Suffrage Movement" />
        <p>As a member of the <SearchTag label="American Equal Rights Association (AERA)" tag="blackwomensuffrage_american_equal_rights_association"/>, she worked alongside white suffragists, and gave a stirring speech at the 1866 National Women's Rights Convention, entitled "We Are All Bound Up Together," in which she spoke about white suffragists, saying "I do not believe that white women are dew-drops just exhaled from the skies. I think that like men they may be divided into three classes, the good, the bad, and the indifferent...You white women speak here of rights. I speak of wrongs."</p>
        <p>She left AERA to form the <SearchTag label="American Woman Suffrage Association" tag="blackwomensuffrage_american_woman_suffrage_association"/> when AERA leaders <Link href="/search?q=susan+b+anthony"><a>Susan B. Anthony</a></Link> and <Link href="/search?q=elizabeth+cady+stanton"><a>Elizabeth Cady Stanton</a></Link> made racist statements about Black men and refused to support the passage of the <SearchTag label="15th Amendment" tag="blackwomensuffrage_fifteenth_amendment"/>, which granted Black men the right to vote.</p>
      </section>

      <section>
        <SectionTitle title="Later Writing and Activism" />
        <p>As the turn of the century neared, Harper continued her activism on behalf of women and African Americans, working in the Colored Section of the <SearchTag label="Women's Christian Temperance Union" tag="blackwomensuffrage_womens_christian_temperance_union"/> and as the director of the American Association of Colored Youth. In 1896, she co-founded the <SearchTag label="National Association of Colored Women" tag="blackwomensuffrage_national_association_of_colored_women"/> with other Black women activists, serving as its vice president in 1897.</p>
        <p>During the course of her career, she experimented with new literary styles; published more than a dozen books and countless articles and essays; and was the most popular Black poet of her time, earning her the nickname "bronze muse."</p>
        <p>Harper died in 1911 in her adopted home of Philadelphia.</p>
      </section>

      <SearchPrompt figure={francesEllenWatkinsHarper} />

      <Sources sources={francesEllenWatkinsHarper.sources}/>
    </>
  )
}

export default FrancesEllenWatkinsHarper

