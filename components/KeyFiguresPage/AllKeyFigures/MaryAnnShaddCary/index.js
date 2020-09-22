import scss from "components/KeyFiguresPage/KeyFiguresPage.module.scss"

import { maryAnnShaddCary } from "constants/key-figures";

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

const MaryAnnShaddCary = () => {

  return (
    <>
      <IntroAndPortrait figure={ maryAnnShaddCary } />

      <section>
        <p><SearchTag label="Mary Ann Shadd" tag="blackwomensuffrage_marry_ann_shadd_cary"/> was born the eldest of 13 children to free Black parents in the slaveholding state of Delaware. Her parents were abolitionists and her childhood home was a stop on the <Link href="/search?q=underground+railroad"><a>Underground Railroad</a></Link>, which helped enslaved people escape to freedom in Canada. The Shadd family moved to Pennsylvania to escape Delaware's prohibition on the education of Black children, and Shadd attended a Quaker-run school there. She became a teacher, working in Pennsylvania, New York and Delaware, but after the 1850 passage of the <SearchTag label="Fugitive Slave Act" tag="blackwomensuffrage_fugitive_slave_act"/>, she moved to Canada, where Shadd believed she could more effectively advocate for abolition.</p>
      </section>
         
      <section>
        <SectionTitle title="Editor of &quot;The Provinical Freeman&quot;" />
        <p>She began writing articles urging American Blacks to move North and giving advice on settling in Canada, and in 1853, she became the editor of the <SearchTag label="Provincial Freeman" tag="blackwomensuffrage_provincial_freeman"/>, a newspaper written expressly for Blacks and escaped slaves. Published under the motto "Self-Reliance is the Fine Road to Independence," it was the first newspaper in North America to be edited by an African American woman and Canada's first anti-slavery newspaper. In her writings, Shadd was critical of the male-dominated abolitionist groups that she believed spoke too much and did too little. Shadd frequently took risky trips back to the United States to gather news for her paper, speak to Blacks about life in Canada and sell the subscriptions that paid for the printing of the paper.</p>
      </section>

      <section>
        <p>In 1856, she married a Canadian named Thomas Cary. The couple had two children together before his death several years later. In 1859, facing financial difficulties, the Provincial Freeman ceased publication and Shadd Cary worked as a teacher in an integrated school in Chatham, Ontario.</p>
        <p>She returned to the United States after the outbreak of the Civil War, working to recruit Black soldiers to the Union war effort. After the war, she moved to Washington, D.C. where she opened a school for the children of newly freed Blacks.</p>
      </section>

      <section>
        <SectionTitle title="First Black Woman J.D." />
        <p>In 1870, she became the first Black woman in U.S. history to earn a law degree and became active in the women's suffrage movement. Addressing the House of Representatives Judiciary Committee in 1874, she urged them to rectify the fact that although she paid equal taxes, she did not have equal rights. In 1880, Shadd Cary founded the Colored Women's Progressive Franchise Association, which urged Black women to fight for suffrage and equal rights, in Washington, D.C.</p>
      </section>

      <SearchPrompt figure={maryAnnShaddCary} />

      <Sources sources={maryAnnShaddCary.sources}/>
    </>
  )
}

export default MaryAnnShaddCary
