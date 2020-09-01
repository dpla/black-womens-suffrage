import scss from "components/KeyFiguresPage/KeyFiguresPage.module.scss"

import { fannieBarrierWilliams } from "constants/key-figures";

import SectionTitle from "components/KeyFiguresPage/SectionTitle";
import CurvedTextBox from "components/KeyFiguresPage/CurvedTextBox";
import LeftBorderTextBox from "components/KeyFiguresPage/LeftBorderTextBox";
import BorderedTextBox from "components/KeyFiguresPage/BorderedTextBox";
import Sources from "components/KeyFiguresPage/Sources";
import KeyFiguresPagination from "components/KeyFiguresPage/KeyFiguresPagination";
import IntroAndPortrait from "components/KeyFiguresPage/IntroAndPortrait";

const FannieBarrierWilliams = () => {

  return (
    <>
      <IntroAndPortrait figure={ fannieBarrierWilliams } />
   
      <section>
        <SectionTitle title="Early Years" />
        <p>Civil rights activist and suffragist Frances "Fannie" Barrier Williams was born in the western New York town of Brockport in 1855. Her family was one of the few Black families in the area. Her father was a successful businessman, homeowner and active in town affairs. The entire family was active in Brockport's First Baptist Church, of which they were the only Black members and where Barrier often sang and played the piano. As a child, she attended Brockport public schools, and in 1870, she became the first African-American graduate of the teacher training college Brockport State Normal School, which is now SUNY Brockport.</p>
        <p>After graduation, she taught at several schools for freedmen in the South and experienced intense racial discrimination for the first time in her life. Unsettled by the realities of life in the Jim Crow-era South, she returned north, studying portrait painting in Washington, D.C. and music at Boston's New England Conservatory of Music.</p>
      </section>

      <section>
        <SectionTitle title="Suffrage and Reform" />
        <p>While in Washington, D.C., she met the man who would become her husband, S. Laing Williams, who was studying to become an attorney. After he completed his law studies, the two married and relocated to Illinois, where he worked as an assistant lawyer and later became a Chicago assistant district attorney. Williams, meanwhile, became the director of art and music at the Prudence Crandall Study Club literary society, an organization of Chicago's African-American elites.</p>
        <p>She also became involved in the reform and women's suffrage movements, and contributed to the Hyde Park Colored Voters Republican Club. As part of her work with the Illinois Women's League, she gave lectures on the importance of suffrage for Black women. In 1891, helped found the interracial Provident Hospital to create opportunities for Black doctors and nurses, as well as its associated nursing school for Black women. In order to advocate for more resources for Black women, including access to education, childcare, employment assistance and banks, Williams helped to found the National League of Colored Women in 1893.Three years later, she was active in the merging of this group with others to form the National Association of Colored Women (NACW).</p>
      </section>

      <section>
        <SectionTitle title="Speeches" />
        <p>During the planning of the 1893 Columbian Exposition in Chicago, she worked to have African Americans included in the planning process and to ensure representation in the exhibits. She also gave a speech entitled "The Intellectual Progress and Present Status of the Colored Women of the United States since the Emancipation Proclamation," to the Departmental Congress of the National Association of Loyal Women of American Liberty at the World's Congress of Representative Women, in which she described the obstacles facing Black women searching for employment, arguing that ability and talent counted "for nothing."</p>
        <p>Several months later, she gave a speech to the World's Parliament of Religions about racial equality within religious organizations, and the important role that organized religion could play in building a better society. With these two speeches, she gained a national reputation and became a sought after speaker.</p>
      </section>

      <section>
        <SectionTitle title="Women's Clubs" />
        <p>She was nominated for membership in the exclusive Chicago Women's Club, setting off a long debate within the all-white club about granting membership to a Black woman and prompting several resignations when she was accepted in 1895.</p>
        <p>Her history of the Black women's club movement was published in 1902, which, she wrote, had grown to 400 clubs with a total membership of more than 150,000.</p>
      </section>

      <section>
        <SectionTitle title="Continued Activism" />
        <p>In 1905, Williams and her husband, along with several other families, founded the Frederick Douglass Center settlement project.</p>
        <p>She also served as a reporter for Woman's Era, a newspaper published by fellow suffragist Josephine St. Pierre Ruffin and her daughter, to provide news reports for and by Black women, while also writing for the Chicago Record-Herald and the New York Age.</p>
        <p>After the death of white suffragist leader Susan B. Anthony in 1907, Williams was the only Black woman asked to speak at Anthony's funeral. In 1909, Williams was active in the creation of the National Association for the Advancement of Colored People (NAACP). In 1924, after the death of her husband, she became the first Black woman to sit on the Chicago Library Board.</p>
        <p>Williams returned to Brockport, New York, in 1926 and died there in 1944 at the age of 89.</p>
      </section>

      <section>
        <SectionTitle title="   SUBHEADING   " />
        <p></p>
      </section>

      <Sources sources={fannieBarrierWilliams.sources}/>
    </>
  )
}

export default FannieBarrierWilliams
