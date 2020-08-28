import scss from "components/KeyFiguresPage/KeyFiguresPage.module.scss"

import { josephineStPierreRuffin } from "constants/key-figures";

import SectionTitle from "components/KeyFiguresPage/SectionTitle";
import CurvedTextBox from "components/KeyFiguresPage/CurvedTextBox";
import LeftBorderTextBox from "components/KeyFiguresPage/LeftBorderTextBox";
import BorderedTextBox from "components/KeyFiguresPage/BorderedTextBox";
import Sources from "components/KeyFiguresPage/Sources";
import KeyFiguresPagination from "components/KeyFiguresPage/KeyFiguresPagination";
import IntroAndPortrait from "components/KeyFiguresPage/IntroAndPortrait";

const JosephineStPierreRuffin = () => {

  return (
    <>
      <IntroAndPortrait figure={ josephineStPierreRuffin } />

      <section>
        <SectionTitle title="Early Years" />
        <p>Civil rights activist, suffragist and publisher Josephine St. Pierre was born in Boston in 1842. Her father was a leader of Boston's Black community in the years before the Civil War. At 16, she married John Ruffin, a barber who went on to become the first-ever Black graduate of Harvard Law School and the first African American to serve as a judge in Massachusetts.</p>
      </section>
         
      <section>
        <SectionTitle title="Anti-slavery" />
        <p>Early in their marriage, the Ruffins moved to England to protest the 1857 Dred Scott decision, which bolstered the system of slavery in the United States and ruled that Congress could not prohibit slavery in U.S. territories. After returning to Boston to advocate for abolition, Ruffin and her husband recruited Black soldiers for Massachusetts regiments of the Union Army during the Civil War, including the much-lauded Massachusetts 54th. In 1879, she founded the Boston Kansas Relief Association, which raised money to help African Americans who had migrated to Kansas.</p>
      </section>

      <section>
        <SectionTitle title="Suffrage" />
        <p>A committed believer in women's rights and civil rights, Ruffin was a charter member of the Massachusetts School Suffrage Association, which pushed for women to be able to vote in school board elections, as well as run for school board positions. Her work with school suffrage brought her into contact with suffragists Julia Ward Howe and Lucy Stone, who invited her to join the "New England Women's Club"; she was the group's first African-American member. Ruffin worked as a writer for the Black newspaper The Courant and was a member of the New England Women's Press Association.</p>
      </section>

      <section>
        <SectionTitle title="Black Womens' Clubs" />
        <p>In 1893, she co-founded the Woman's Era Club, the first club founded and managed by Black women in Boston. The club published the Woman's Era newspaper, which was the first newspaper in America published for and by Black women. It is also known for publishing the early writings of activist Ida B. Wells-Barnett.</p>
        <p>In 1895, Ruffin organized the first national conference of Black women's clubs, which resulted in the formation of National Federation of Afro-American Women. That group merged with the National Association of Colored Women (NACW) in 1896; Ruffin served as NACW's first vice president.</p>
        <p>Ruffin was a consistent critic of all-white national women's clubs like the Women's Christian Temperance Union and spoke out about the dual burden faced by Black women. In 1900 she was invited to attend a Milwaukee conference of the General Federation of Women's Clubs as a member of the three organizations: the Woman's Era Club, the New England Women's Press Association and the New England Women's Club. When organizers discovered that the Woman's Era Club was a Black organization, she was told she would only be able to sit as a member of the predominantly white clubs to which she belonged. A white conference attendee even attempted to grab her badge from her. She refused to sit at all, and the event was nationally publicized as the "Ruffin incident."</p>
      </section>

      <section>
        <SectionTitle title="Later Years" />
        <p>In 1910, Ruffin helped to found the Boston chapter of the National Association for the Advancement of Colored People (NAACP).</p>
        <p>She died in Boston in 1924.</p>
      </section>
      
      <Sources sources={josephineStPierreRuffin.sources}/>
    </>
  )
}

export default JosephineStPierreRuffin
