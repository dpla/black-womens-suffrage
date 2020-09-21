import scss from "components/KeyFiguresPage/KeyFiguresPage.module.scss"

import { sojournerTruth } from "constants/key-figures";

import SectionTitle from "components/KeyFiguresPage/SectionTitle";
import CurvedTextBox from "components/KeyFiguresPage/CurvedTextBox";
import LeftBorderTextBox from "components/KeyFiguresPage/LeftBorderTextBox";
import BorderedTextBox from "components/KeyFiguresPage/BorderedTextBox";
import Sources from "components/KeyFiguresPage/Sources";
import IntroAndPortrait from "components/KeyFiguresPage/IntroAndPortrait";
import SearchPrompt from "components/KeyFiguresPage/SearchPrompt";
import SearchTag from "shared/SearchTag";
import Link from "next/link";

const SojournerTruth = () => {

  return (
    <>
      <IntroAndPortrait figure={ sojournerTruth } />

      <section>
        <p>Abolitionist, temperance advocate and women's rights crusader <SearchTag label="Sojourner Truth" tag="blackwomensuffrage_sojourner_truth"/> was born Isabella Bomefree (or Baumfree) to Dutch-speaking enslaved parents in a Dutch community in Ulster County, New York around 1797.</p>
      </section>

      <section>
        <SectionTitle title="Answering the Call" />
        <p>At just nine years old, Truth was sold at auction to a farmer whom she remembered as cruel and violent. While still a child, she was sold several more times, suffering under a series of owners who beat her regularly. Eventually, Truth was sold to John and Elizabeth Dumont of West Park, New York. Truth learned to speak English while enslaved by the Dumonts. At around the age of 14, Truth was forced to marry an older man named Thomas who was also enslaved by the Dumonts. She is believed to have given birth to five children.</p>
        <p>As New York began to move toward abolition, Dumont promised Truth that he would grant her freedom on July 4, 1826, though when the date came, he reneged.</p>
      
        <CurvedTextBox text={<p>Truth then decided to escape, and she walked away from the Dumont farm carrying her infant daughter in late 1826, finding sanctuary with a nearby white abolitionist family.</p>}/>
      
        <p>The family bought her freedom for $20, about $500 in today's money. A law freeing the enslaved in New York took effect the next year.</p>
      
        <LeftBorderTextBox text={<p>Soon after, Truth successfully sued the Dumonts for the return of her son Peter, whom they had illegally sold to farmers in Alabama; this made her one of the first Black women in America to prevail in court against a white man.</p>} />
      </section>
         

      <section>
        <SectionTitle title="&quot;Ain't I a Woman&quot;" />
        <p>In the early years of her freedom, Truth became a devoted Methodist, and in 1829, she moved to New York City, finding work as a housekeeper for two evangelist ministers; through them she was exposed to the state's religious revivalist movement, even living for a time in a religious commune.</p>

        <BorderedTextBox text={<p>In 1843, believing she was called by God to travel around the country (or "sojourn") and preach truth, she changed her name to Sojourner Truth, moved to a Massachusetts utopian community and began working as an itinerant Methodist preacher, devoting herself to spreading Christianity and calling for the abolition of slavery. In her travels, she became acquainted with prominent abolitionists <Link href="/search?q=william+lloyd+garrison"><a>William Lloyd Garrison</a></Link> and <SearchTag label="Frederick Douglass" tag="blackwomensuffrage_frederick_douglass"/>, among others, who encouraged her to give speeches denouncing slavery. She also met temperance advocates and women's rights pioneers like <Link href="/search?q=susan+b+anthony"><a>Susan B. Anthony</a></Link> and <Link href="/search?q=elizabeth+cady+stanton"><a>Elizabeth Cady Stanton</a></Link>, becoming increasingly involved in both causes and advocating for the then-radical idea of political equality for both Black and white women.</p>}/>
      
        <div className={scss.key_figures__image}>
          <img src="/static/image/key-figures/sojournerTruth-1.jpg" alt="Sojourner Truth seated"/>
        </div>

        <p>Unable to read or write, Truth dictated her autobiography, <Link href='/search?q="narrative+of+sojourner+truth"'><a>The Narrative of Sojourner Truth</a></Link>, to Olive Gilbert and supported herself—including paying off the mortgage on her Massachusetts home—with the proceeds. A talented orator, Truth was invited in 1851 to give what has become her most well-known speech at the Ohio Women's Right Convention. It is often referred to as the "Ain't I A Woman?" speech, although evidence suggests that she did not actually employ this refrain in her talk. As her words were delivered extemporaneously, there is no original copy of the speech to consult, leaving only secondhand sources. (Scholars note that the source that reports the "Ain't I A Woman" refrain wasn't written until 12 years after the speech was given, while a more contemporaneous account does not include the phrase.)</p>

        <LeftBorderTextBox text={<p>During the Civil War, Truth used her voice to help recruit Black soldiers to fight for the Union. She also worked for the <SearchTag label="National Freedman's Relief Association" tag="blackwomensuffrage_national_freedmans_relief_association"/> to solicit donations & encourage relief efforts for Black refugees.</p>}/>
      
        <p>Her work won her an audience with President Abraham Lincoln in October 1864. Even after Lincoln issued the Emancipation Proclamation, Truth continued her activism, riding whites-only streetcars in Washington, D.C. to protest segregation.</p>

        <p>When the war ended, Truth lobbied Congress to award western lands to the formerly enslaved, helping them achieve financial independence, but was unsuccessful. She continued to speak out about a variety of issues, including women's rights, prison reform and universal suffrage, until her death in Michigan in 1883.</p>
      </section>

      <SearchPrompt figure={sojournerTruth} />

      <Sources sources={sojournerTruth.sources}/>
    </>
  )
}

export default SojournerTruth