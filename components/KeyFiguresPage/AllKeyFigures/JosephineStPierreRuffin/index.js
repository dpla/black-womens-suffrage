import scss from "components/KeyFiguresPage/KeyFiguresPage.module.scss"

import { josephineStPierreRuffin } from "constants/key-figures";

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

const JosephineStPierreRuffin = () => {

  return (
    <>
      <IntroAndPortrait figure={ josephineStPierreRuffin } />

      <section>
        <p>Civil rights activist, suffragist and publisher <SearchTag label="Josephine St. Pierre" tag="blackwomensuffrage_josephine_st_pierre_ruffin"/> was born in Boston in 1842. Her father was a leader of Boston's Black community in the years before the Civil War. At 16, she married John Ruffin, a barber who went on to become the first-ever Black graduate of Harvard Law School and the first African American to serve as a judge in Massachusetts.</p>
      </section>
         
      <section>
        <SectionTitle title="Anti-Slavery" />
        <p>Early in their marriage, the Ruffins moved to England to protest the 1857 <Link href='/search?q="dred+scott"'><a>Dred Scott</a></Link> decision, which bolstered the system of slavery in the United States and ruled that Congress could not prohibit slavery in U.S. territories. After returning to Boston to advocate for abolition, Ruffin and her husband recruited Black soldiers for Massachusetts regiments of the Union Army during the Civil War, including the much-lauded <Link href="/search?q=Massachusetts+54th"><a>Massachusetts 54th</a></Link>. In 1879, she founded the Boston Kansas Relief Association, which raised money to help African Americans who had migrated to Kansas.</p>
      </section>

      <section>
        <SectionTitle title="Suffrage" />
        <p>A committed believer in women's rights and civil rights, Ruffin was a charter member of the <SearchTag label="Massachusetts School Suffrage Association" tag="blackwomensuffrage_massachusetts_school_suffrage_association"/>, which pushed for women to be able to vote in school board elections, as well as run for school board positions. Her work with school suffrage brought her into contact with suffragists <Link href="/search?q=julia+ward+howe"><a>Julia Ward Howe</a></Link> and <Link href="/search?q=lucy+stone"><a>Lucy Stone</a></Link>, who invited her to join the <SearchTag label="New England Women's Club" tag="blackwomensuffrage_new_england_womens_club"/>; she was the group's first African-American member. Ruffin worked as a writer for the Black newspaper <Link href='/search?q="boston+courant"'><a>The Courant</a></Link> and was a member of the New England Women's Press Association.</p>
      </section>

      <section>
        <SectionTitle title="Ushering in the New Era" />
        <p>In 1893, she co-founded the Woman's Era Club, the first club founded and managed by Black women in Boston. The club published the <SearchTag tag="blackwomensuffrage_womans_era_newspaper" label="Woman's Era newspaper"/>, which was the first newspaper in America published for and by Black women. It is also known for publishing the early writings of activist <SearchTag label="Ida B. Wells-Barnett" tag="blackwomensuffrage_ida_b_wells"/>.</p>
        <p>In 1895, Ruffin organized the first national conference of Black women's clubs, which resulted in the formation of National Federation of Afro-American Women. That group merged with the <SearchTag label="National Association of Colored Women (NACW)" tag="blackwomensuffrage_national_association_of_colored_women"/> in 1896; Ruffin served as NACW's first vice president.</p>
        </section>

      <section>
          <SectionTitle title="A Refusal to Be Denied" />
          <p>Ruffin was a consistent critic of all-white national women's clubs like the <SearchTag label="Women's Christian Temperance Union" tag="blackwomensuffrage_womens_christian_temperance_union"/> and spoke out about the dual burden faced by Black women. In 1900 she was invited to attend a Milwaukee conference of the <SearchTag label="General Federation of Women's Clubs" tag="blackwomensuffrage_general_federation_of_womens_clubs"/> as a member of the three organizations: the Woman's Era Club, the New England Women's Press Association and the New England Women's Club. When organizers discovered that the Woman's Era Club was a Black organization, she was told she would only be able to sit as a member of the predominantly white clubs to which she belonged. A white conference attendee even attempted to grab her badge from her. She refused to sit at all, and the event was nationally publicized as the "Ruffin incident."</p>

          <p>In 1910, Ruffin helped to found the Boston chapter of the <SearchTag label="National Association for the Advancement of Colored People (NAACP)" tag="blackwomensuffrage_naacp"/>.</p>
        <p>She died in Boston in 1924.</p>
      </section>

      <SearchPrompt figure={josephineStPierreRuffin} />
      
      <Sources sources={josephineStPierreRuffin.sources}/>
    </>
  )
}

export default JosephineStPierreRuffin
