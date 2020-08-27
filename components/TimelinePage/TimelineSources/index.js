import React from "react"
import Link from "next/link"
import scss from "components/TimelinePage/TimelinePage.module.scss"

const TimelineSources = () => {
  return (
    <>
      <div className={scss.timeline__title}>
        <div className={scss.timeline__title_background}></div>
        <h1>Sources</h1>
        <div className={scss.timeline__title_line}></div>
      </div>
      <section className={scss.sources__container}>
        <h2>SOURCES</h2>
        <p>DPLA would like to thank historian Alison M. Parker, author of the forthcoming book <em>Unceasing Militant: The Life of Mary Church Terrell</em>, due out in 2021, for her review of this timeline. We strive for accuracy, and welcome your feedback. Please contact us if you find missing or inaccurate information.</p>
        <ul>
          <li>
            <a href="https://www.aclu.org/blog/womens-rights/celebrate-womens-suffrage-dont-whitewash-movements-racism">Celebrate Women's Suffrage, but Don't Whitewash the Movement's Racism</a>
          </li>
          <li>
            <a href="https://www.nytimes.com/2018/07/28/opinion/sunday/suffrage-movement-racism-black-women.html">How the Suffrage Movement Betrayed Black Women</a>
          </li>
          <li>
            <a href="https://www.nps.gov/articles/african-american-women-and-the-nineteenth-amendment.htm">African American Women and the Nineteenth Amendment</a>
          </li>
          <li>
            <a href="https://www.americanbar.org/groups/public_education/Programs/19th-amendment-centennial/toolkit/women-s-suffrage-timeline/">Women's Suffrage Timeline</a>
          </li>
          <li>
            <a href="https://www.senate.gov/artandhistory/history/People/Women/Nineteenth_Amendment_Vertical_Timeline.htm">Timeline: The Senate and the 19th Amendment</a>
          </li>
          <li>
            <a href="http://digitalexhibits.auctr.edu/exhibits/show/womenwhochangedatlanta/neighborhoodunion/founding">The Founding of the Neighborhood Union</a>
          </li>
          <li>
            <a href="https://www.womenshistory.org/resources/general/african-american-reformers">African American Reformers</a>
          </li>
          <li>
            <a href="https://www.nps.gov/articles/national-womans-party-protests-world-war-i.htm">National Woman's Party Protests During World War I</a>
          </li>
          <li>
            <a href="https://omeka.coloredconventions.org/items/show/269">1859 Boston, New England Convention</a>
          </li>
          <li>
            <a href="https://archive.org/details/WomenRaceClassAngelaDavis/page/n43/mode/2up">Women, Race, & Class by Angela Y. Davis</a>
          </li>
          <li>
            <a href="https://lynchingsitesmem.org/lynching/peoples-grocery-lynchings-thomas-moss-will-stewart-calvin-mcdowell">The People's Grocery Lynchings</a>
          </li>
          <li>
            <a href="https://www.goodreads.com/book/show/1231250.African_American_Women_in_the_Struggle_for_the_Vote_1850_1920">African American Women in the Struggle for the Vote, 1850-1920, Rosalyn Terborg-Penn.</a>
          </li>
          <li>
            <a href="https://www.goodreads.com/book/show/556034.African_American_Women_and_the_Vote_1837_1965">African American Women and the Vote 1837-1965, Ann D. Gordon, Bettye Collier Thomas, John H. Bracy, Arlene Voski Avakian and Joyce Avrech Berkman, eds.</a>
          </li>
          <li>
            <a href="https://www.goodreads.com/book/show/544215.Black_Women_in_White_America">Black Women in White America: A Documentary History. Gerda Lerner, ed.</a>
          </li>
          <li>
            <a href="https://www.goodreads.com/book/show/2374436.Women_Politics_and_Change">Women, Politics and Change. Louise A. Tilly and Patricia Gurin, eds.</a>
          </li>
        </ul>    
      </section>
    </>
  )
}

export default TimelineSources;
