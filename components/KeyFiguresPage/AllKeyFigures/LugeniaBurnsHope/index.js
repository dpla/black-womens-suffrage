import scss from "components/KeyFiguresPage/KeyFiguresPage.module.scss"

import { lugeniaBurnsHope } from "constants/key-figures";

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

const LugeniaBurnsHope = () => {

  return (
    <>
      <IntroAndPortrait figure={ lugeniaBurnsHope } />

      <section>
        <p>Suffragist, activist and community organizer <SearchTag label="Lugenia Burns Hope" tag="blackwomensuffrage_lugenia_burns_hope"/> was born in St. Louis, Missouri, in 1871, and grew up in St. Louis and Chicago, Illinois. One of seven children, economic hardship forced her to leave school early. Her interest in activism and social work was sparked by her first jobs working at several settlement houses in the Chicago area, including Hull House. In the early 1890s she furthered her education, studying at the Chicago Art Institute, Chicago School of Design and Chicago Business College.</p>
      </section>

      <section>
        <SectionTitle title="Building Black Community in Atlanta" />
        <p>At the 1893 World's Columbian Exposition in Chicago, she met John Hope, who was then a theology student at Brown University, and the two married in 1897, moving first to Nashville, where they both taught at Roger Williams University, and then to Hope's native Georgia. In Atlanta, Hope initially worked to provide childcare and access to kindergarten for working mothers in the Atlanta Baptist College (now Morehouse College) community, where her husband worked. John Hope became the college's president in 1906. The couple went on to have two sons, and she was an active mother, despite her many and growing responsibilities, and even sewed most of her children's clothes herself.</p>
      </section>

      <section>
        <SectionTitle title="Neighborhood Union" />
        <p>In 1908, she helped to create the <SearchTag label="Neighborhood Union" tag="blackwomensuffrage_neighborhood_union"/>, a social welfare agency run by Black women that provided access to education, training, employment assistance, recreational opportunities and healthcare to Atlanta's African-American communities. From 1908 to 1935, she headed the Neighborhood Union, becoming one of the most influential, effective and well-known Black leaders in the American South and developing a reputation as an outspoken, courageous and sometimes radical fighter for racial and gender equality.</p>
        <p>With the motto, "Thy Neighbor as Thyself," the Neighborhood Union worked to deliver needed services to Atlanta's Black families, and determined these needs by dividing the city up into sections, with each section's representative reporting into the larger organization. In this way, the Neighborhood Union ensured representation and became a much-looked-to model for community organization.</p>
        <p>Under Hope's leadership, the Union was active in the fight against segregation and discrimintation and established the nation's first African-American high school and first public housing for African Americans.</p>
      </section>

      <section>
        <SectionTitle title="Young Women's Christian Association" />
        <p>Hope espoused interracial cooperation to help right social ills. During World War I, Hope was appointed Special War Work Secretary for the War Work Council of the <SearchTag label="Young Women's Christian Association (YWCA)" tag="blackwomensuffrage_young_womens_christian_association"/>. These councils provided Black soldiers with recreational and relaxation opportunities that only white soldiers received through the USO. While working with the YWCA, Hope spoke out against the racism she saw in the larger organization, pushing for Black leaders to be able to make decisions about services in Black communities. Hope then worked with the YWCA to create a nationwide network of <SearchTag label="Hostess Houses" tag="blackwomensuffrage_hostess_house"/> that provided services for Black and Jewish servicemen and their families.</p>
      </section>

      <section>
        <SectionTitle title="A Champion for Many Causes" />
        <p>Hope was also active in anti-lynching campaign, pushing for a federal anti-lynching law. </p>
        <p>Hope allied in this fight with a group of white Southern Methodist women, but came away disappointed by the white women's ultimate failure to confront their own racism.</p>
        <p>In addition to her work with the Neighborhood Union, Hope helped to found the Atlanta chapter of the <SearchTag label="National Association of Colored Women (NACW)" tag="blackwomensuffrage_national_association_of_colored_women"/>, and worked with that group in support of women's suffrage, which she called the "safeguard of the nation."</p>
        <p>In 1932, Hope became the First Vice President of the Atlanta chapter of the <SearchTag label="National Association for the Advancement of Colored People (NAACP)" tag="blackwomensuffrage_naacp"/>. She worked with the NAACP to create "citizenship schools," which taught classes on voting, democracy and the Constitution; these schools were then replicated in other areas of the country and helped inspire methods used by groups like <SearchTag label="Student Non-Violent Coordinating Committee (SNCC)" tag="blackwomensuffrage_student_nonviolent_coordinating_committee"/> and the <SearchTag label="Congress of Racial Equality (CORE)" tag="blackwomensuffrage_congress_of_racial_equality"/> during the Civil Rights Movement.</p>
        <p>Hope traveled nationally and internationally with her husband on fundraising tours for Morehouse College, and she was influential in his decision to accept the role of president of Atlanta University, where he led the creation of the first African-American graduate school in the country.</p>
      </section>

      <section>
        <p>After her husband's 1936 death, Hope moved to New York City, where she worked for <SearchTag label="Mary McLeod Bethune" tag="blackwomensuffrage_mary_mcleod_bethune"/>, who was then heading Negro Affairs for the National Youth Administration, and later lived in Chicago and Nashville. She died in Nashville in 1947.</p>
      </section>

      <SearchPrompt figure={lugeniaBurnsHope} />

      <Sources sources={lugeniaBurnsHope.sources}/>
    </>
  )
}

export default LugeniaBurnsHope
