import scss from "components/KeyFiguresPage/KeyFiguresPage.module.scss"

import { fannieLouHamer } from "constants/key-figures";

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

const FannieLouHamer = () => {

  return (
    <>
      <IntroAndPortrait figure={ fannieLouHamer } />

      <section>
        <p>Civil rights and voting rights activist <SearchTag tag="blackwomensuffrage_fannie_lou_hamer" label="Fannie Lou Hamer"/> was born Fannie Lou Townsend in rural Mississippi in 1917. Her parents were sharecroppers and she was the youngest of their 20 children. Forced to start working the cotton fields with the rest of her family at age 6 because of her family's difficult financial circumstances, Hamer received only a sixth-grade education. She worked in the fields until 1942, when the plantation owner, W.D. Marlowe made Hamer, who could read and write, the plantation's time and record keeper.</p>
      </section>
         
      <section>
        <SectionTitle title="Mississippi Goddamn" />
        <p>In 1945, Townsend married Perry Hamer, who also worked on Marlowe's plantation as a tractor driver.</p>
        <p>In 1961, Hamer had surgery to remove a tumor in her uterus; the white doctor performing the surgery also performed a hysterectomy without her consent, making it impossible for her to have children. This type of forced sterilization, performed by doctors without Black women's consent as a way to control the Black population, was common enough that it was referred to as a "Mississippi appendectomy."</p>
        <p>Hamer and her husband later adopted two children.</p>
      </section>

      <section>
        <SectionTitle title="Nobody's Free Until Everybody's Free" />
        <p>In August 1962, Hamer began working with the <SearchTag label="Student Non-Violent Coordinating Committee (SNCC)" tag="blackwomensuffrage_student_nonviolent_coordinating_committee"/> as a volunteer attempting to register Black voters as part of SNCC's effort to challenge Mississippi's racially discriminatory voter registration practices. On August 31, she led a group of volunteers in an unsuccessful attempt to register to vote in Indianola, Mississippi. Not only was Hamer fired from her job in reprisal, the home she was staying in with friends was shot into repeatedly, though Hamer and her friends were unharmed. Determined to secure her right to vote, Hamer repeatedly took the literacy test and finally succeeded in registering to vote in 1963.</p>
        <p>That same year she began working for SNCC as a field secretary and helped to create the <SearchTag label="Delta ministry" tag="blackwomensuffrage_delta_ministry"/>, a community development program. That June, on the way home from a SNCC voter registration training with a group of other women, Hamer and the other women were arrested after stopping at a rest area in Winona, Mississippi. They were taken to Winona Jail, where they were savagely beaten; Hamer was left with injuries to her leg, kidney and eye that plagued her throughout her life, but she remained devoted to the causes of voting rights and civil rights.</p>
      </section>

      <section>
        <SectionTitle title="Fighting Racism within the Democratic Party" />
        <p>In 1964, Hamer mounted an ultimately unsuccessful Congressional campaign, after the Democratic Party refused to put her name on the ballot. That same year, she helped to found the <SearchTag label="Mississippi Freedom Democratic Party (MFDP)" tag="blackwomensuffrage_mississippi_freedom_democratic_party"/>, serving as its vice chair. That year, Hamer travelled with the MFDP to New Jersey, where she and other MFDP members attempted to challenge the all-white Democratic Party delegation from Mississippi. Although they were unsuccessful, the MFDP did secure a promise from the national Democratic Party to include Black delegates at the subsequent convention in 1968, and that year, Hamer herself served as a delegate.</p>
      </section>

      <section>
        <p>She continued to speak out for civil rights in her later years, even while battling cancer. Hamer died in 1977.</p>
      </section>

      <SearchPrompt figure={fannieLouHamer} />

      <Sources sources={fannieLouHamer.sources}/>
    </>
  )
}

export default FannieLouHamer

