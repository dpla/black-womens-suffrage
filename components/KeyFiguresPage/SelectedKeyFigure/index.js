import React from "react"
import scss from "../../KeyFiguresPage/KeyFiguresPage.module.scss"
import { sojournerTruth } from "../../../constants/key-figures";

import SectionTitle from "../SectionTitle";
import CurvedTextBox from "../CurvedTextBox";
import LeftBorderTextBox from "../LeftBorderTextBox";
import BorderedTextBox from "../BorderedTextBox";
import Sources from "../Sources";
import KeyFiguresPagination from "../KeyFiguresPagination";

const SelectedKeyFigure = ({selectedKeyFigure}) => {
  return (
    <>
    <div className={scss.key_figures__intro}>
      <div className={scss.key_figures__info}>
        <h6 className={scss.key_figures__dates}>C. 1797-1893</h6>
        <h2 className={scss.key_figures__name}>Sojourner Truth</h2>
      </div>

      <div className={scss.key_figures__portrait}>
        <img src="https://picsum.photos/300/400"/>
      </div>
    </div>
      

      <p>Abolitionist, temperance advocate and women's rights crusader Sojourner Truth was born Isabella Bomefree (or Baumfree) to Dutch-speaking enslaved parents in a Dutch community in Ulster County, New York around 1797.</p>
   

      <section>
        <SectionTitle title="Early Years" />
        <p>At just nine years old, Truth was sold at auction to a farmer whom she remembered as cruel and violent. While still a child, she was sold several more times, suffering under a series of owners who beat her regularly. Eventually, Truth was sold to John and Elizabeth Dumont of West Park, New York. Truth learned to speak English while enslaved by the Dumonts. At around the age of 14, Truth was forced to marry an older man named Thomas who was also enslaved by the Dumonts. She is believed to have given birth to five children.</p>
        <p>As New York began to move toward abolition, Dumont promised Truth that he would grant her freedom on July 4, 1826, though when the date came, he reneged.</p>
      
        <CurvedTextBox text="Truth then decided to escape, and she walked away from the Dumont farm carrying her infant daughter in late 1826, finding sanctuary with a nearby white abolitionist family."/>
      
        <p>The family bought her freedom for $20, about $500 in today's money. A law freeing the enslaved in New York took effect the next year.</p>
      
        <LeftBorderTextBox text="Soon after, Truth successfully sued the Dumonts for the return of her son Peter, whom they had illegally sold to farmers in Alabama; this made her one of the first Black women in America to prevail in court against a white man." />
      </section>
         

      <section>
        <SectionTitle title="Freedom" />
        <p>In the early years of her freedom, Truth became a devoted Methodist, and in 1829, she moved to New York City, finding work as a housekeeper for two evangelist ministers; through them she was exposed to the state's religious revivalist movement, even living for a time in a religious commune.</p>

        <BorderedTextBox text={`In 1843, believing she was called by God to travel around the country (or "sojourn") and preach truth, she changed her name to Sojourner Truth, moved to a Massachusetts utopian community and began working as an itinerant Methodist preacher, devoting herself to spreading Christianity and calling for the abolition of slavery. In her travels, she became acquainted with prominent abolitionists William Lloyd Garrison and Frederick Douglass, among others, who encouraged her to give speeches denouncing slavery. She also met temperance advocates and women's rights pioneers like Susan B. Anthony and Elizabeth Cady Stanton, becoming increasingly involved in both causes and advocating for the then-radical idea of political equality for both Black and white women.`} />
      
        {/* <img /> */}

        <p>Unable to read or write, Truth dictated her autobiography, The Narrative of Sojourner Truth, to Olive Gilbert and supported herself—including paying off the mortgage on her Massachusetts home—with the proceeds. A talented orator, Truth was invited in 1851 to give what has become her most well-known speech at the Ohio Women's Right Convention. It is often referred to as the "Ain't I A Woman?" speech, although evidence suggests that she did not actually employ this refrain in her talk. As her words were delivered extemporaneously, there is no original copy of the speech to consult, leaving only secondhand sources. (Scholars note that the source that reports the "Ain't I A Woman" refrain wasn't written until 12 years after the speech was given, while a more contemporaneous account does not include the phrase.)</p>
      
        <LeftBorderTextBox text="During the Civil War, Truth used her voice to help recruit Black soldiers to fight for the Union. She also worked for the National Freedman's Relief Association to solicit donations & encourage relief efforts for Black refugees." />
      
        <p>Her work won her an audience with President Abraham Lincoln in October 1864. Even after Lincoln issued the Emancipation Proclamation, Truth continued her activism, riding whites-only streetcars in Washington, D.C. to protest segregation.</p>

        <p>When the war ended, Truth lobbied Congress to award western lands to the formerly enslaved, helping them achieve financial independence, but was unsuccessful. She continued to speak out about a variety of issues, including women's rights, prison reform and universal suffrage, until her death in Michigan in 1883.</p>
      </section>

      <Sources sources={sojournerTruth.sources}/>

      <KeyFiguresPagination prevFigure="Charlotte Vandine Forten" nextFigure="Harriet Forten Purvis"/>
    </>
  )
}

export default SelectedKeyFigure