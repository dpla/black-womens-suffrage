import scss from "components/KeyFiguresPage/KeyFiguresPage.module.scss"

import { maryChurchTerrell } from "constants/key-figures";

import SectionTitle from "components/KeyFiguresPage/SectionTitle";
import CurvedTextBox from "components/KeyFiguresPage/CurvedTextBox";
import LeftBorderTextBox from "components/KeyFiguresPage/LeftBorderTextBox";
import BorderedTextBox from "components/KeyFiguresPage/BorderedTextBox";
import Sources from "components/KeyFiguresPage/Sources";
import KeyFiguresPagination from "components/KeyFiguresPage/KeyFiguresPagination";
import IntroAndPortrait from "components/KeyFiguresPage/IntroAndPortrait";
import SearchPrompt from "components/KeyFiguresPage/SearchPrompt";

const MaryChurchTerrell = () => {

  return (
    <>
      <IntroAndPortrait figure={ maryChurchTerrell } />

      <section>
        <SectionTitle title="One of the First to Earn a College Degree" />
        <p>Racial justice and women's suffrage activist Mary Church Terrell was born in 1863 in Memphis, Tennessee, to formerly enslaved parents. Her family was affluent: Her mother, Louisa Ayres Church, owned a hair salon, and her father, Robert Reed Church, was an entrepreneur who owned several businesses and became one of the first African-American millionaires in the American South.</p>
        <p>Church's parents valued education, and, though her parents divorced, she studied at Antioch College and earned a degree from Oberlin College in Ohio in 1884. Church, who was fluent in three languages, then worked as a teacher at Ohio's Wilberforce College. In 1887, she moved to Washington, D.C., where she was a teacher at M Street Colored High School and met her husband, fellow teacher Robert Heberton Terrell.</p>
      </section>

      <section>
        <SectionTitle title="Crusader" />
        <p>At the 1890 National Woman Suffrage Assocation Convention, Terrell called attention to the "dual burden" faced by Black women, saying, "A White Woman has only one handicap to overcome—a great one, true, her sex; a colored woman faces two—her sex and her race. A colored man has only one—that of race." In 1892, after a friend of hers was lynched in Memphis by whites, Terrell became involved with anti-lynching activism along with Ida B. Wells-Barnett.</p>
      </section>

      <section>
        <SectionTitle title="&quot;Lifting as We Climb&quot;" />
        <p>She helped to found the National Association of Colored Women (NACW) in 1896, and served as its first president until 1901. Terrell believed in the philosophy of "racial uplift," arguing that Black people could advance the cause of racial equality through self-help, including education, hard work and community involvement. She captured this idea in the phrase "Lifting as we climb," which was adopted by NACW as its motto.</p>
        <p>She led the NACW in creating kindergartens, child care and Mother Clubs to help support working Black women. According to historian Beverly Johnson, she also began to espouse the idea of interracial understanding, believing that education would lead to improved cooperation between races.</p>
        <p>In 1909, Terrell helped to found the National Association for the Advancement of Colored People (NAACP), and the next year, co-founded the College Alumnae Club, which later became the National Association of University Women.</p>
      </section>

      <section>
        <SectionTitle title="Suffragist" />
        <p>Terrell believed that women's suffrage was essential to progress for Black women, and worked extensively with both Black and white women's suffrage groups, even picketing the White House with the National Woman's Party.</p>
      </section>

      <section>
        <SectionTitle title="Fighting Discrimination and Segregation" />
          <p>After the passage of the 19th Amendment, she continued to advocate for civil rights and and end to racial discrimination, and her activism continued unabated in her later years. In 1940, she published an autobiography detailing her experience with discrimination, A Colored Woman in a White World. During World War II, she spoke out about the injustice of Black soldiers fighting for freedom abroad while being discriminated against at home. She filed a successful discrimination lawsuit against the American Association of University Women after they denied her entry, and became its first Black member in 1948. She challenged segregation in Washington, D.C. using techniques like boycotts, pickets and sit-ins that would become more popular as the civil rights movement wore on. Perhaps most famously, she and other activists filed a lawsuit—when she was in her 80s—challenging segregation in a Washington, D.C., restaurant. This led to a landmark 1953 Supreme Court ruling that outlawed segregation in dining facilities.</p>
          <p>Terrell died in Maryland in 1954, ending her more than 65-year-long career or activism.</p>
      </section>

      <SearchPrompt figure={maryChurchTerrell} />

      <Sources sources={maryChurchTerrell.sources}/>
    </>
  )
}

export default MaryChurchTerrell
