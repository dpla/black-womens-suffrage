import scss from "components/KeyFiguresPage/KeyFiguresPage.module.scss"

import { nannieHelenBurroughs } from "constants/key-figures";

import SectionTitle from "components/KeyFiguresPage/SectionTitle";
import CurvedTextBox from "components/KeyFiguresPage/CurvedTextBox";
import LeftBorderTextBox from "components/KeyFiguresPage/LeftBorderTextBox";
import BorderedTextBox from "components/KeyFiguresPage/BorderedTextBox";
import Sources from "components/KeyFiguresPage/Sources";
import KeyFiguresPagination from "components/KeyFiguresPage/KeyFiguresPagination";
import IntroAndPortrait from "components/KeyFiguresPage/IntroAndPortrait";

const NannieHelenBurroughs = () => {

  return (
    <>
      <IntroAndPortrait figure={ nannieHelenBurroughs } />

      <section>
        <p>Educator, suffragist and religious leader Nannie Helen Burroughs was born in 1879 in Orange, Virginia. Her father was the son of an enslaved man who had managed to buy his freedom; her mother was formerly enslaved. When she was a young child, her father died and she moved with her mother to Washington, D.C. so that she could pursue an education superior to that available to her in Virginia. She attended Washington, D.C.'s M Street Colored High School, where the suffragists and activists Mary Church Terrell and Anna Julia Cooper, who would exert great influence on her life, were among her teachers.</p>
      </section>
         
      <section>
        <SectionTitle title="National Baptist Convention" />
        <p>After graduating in 1898, racial discrimination prevented her from obtaining a teaching position in the Washington, D.C. public schools and she instead took a position working for a Baptist newspaper in Philadelphia. She went on to work for the National Baptist Convention (NBC) Foreign Mission Board, and later for the NBC's corresponding secretary, eventually relocating to work for him in Louisville, Kentucky. While in Louisville, she founded a club to offer evening vocational classes, work that presaged her eventual career in education.</p>
        <p>At the 1900 NBC convention, Burroughs gave a speech she called, "How the Sisters are Hindered from Helping," which discussed the injustices women faced within the Black Baptist church. The speech helped to build her national reputation and create momentum for a greater role for women in the church.</p>
        <p>Later that year, along with Mary Virginia Cook-Parrish, she founded the National Baptist Women's Convention, which later morphed into the NBC Women's Auxiliary. Burroughs served as the Convention's corresponding secretary from 1900 to 1948, when she was elected the group's president, a position she held until her death. Thanks in large part to Burroughs' work traveling the country to organize Baptist women, the group became one of the largest and most influential Black women's groups in the United States, with a membership of nearly 1 million women in 1903 and 1.5 million by 1907. She organized what would become an annual celebration of the Women Convention's National Woman's Day, which honored sisterhood within the church and served as a fundraiser for the group, in 1908. With her leadership, the Convention advocated for a number of the causes Burroughs supported, including the anti-lynching movement, desegregation and increased educational opportunites for Black women and girls.</p>
      </section>

      <section>
        <SectionTitle title="The National Training School" />
        <p>In 1909, Burroughs led the Women's Convention in the establishment of the National Training School for Women and Girls, which was the first vocational school for Black women and girls in the country. The boarding high school and junior college provided academic studies (including courses in Black history), religious instruction and technical training in trades ranging from home economics to printing to shoe repair in order to prepare Black women for the workforce. The National Training School advocated for racial uplift through self-help and was unique in that it was staffed, managed and funded by African Americans. Burroughs herself worked as a teacher at the school, and dedicated much of the rest of her life to the education of Black women.</p>
      </section>

      <section>
        <SectionTitle title="The Vote" />
        <p>Burroughs, along with many members of the Women's Convention, was a staunch supporter of women's voting rights, believing that they were the key to advancement for Blacks and women. Burroughs also believed that the vote could help protect women from abuse. She was active within a network of influential Black women suffragists that included Coralie Franklin Cook, Anna Julia Cooper and Angelina Weld Grimké. She contributed articles in support of women's suffrage for the NAACP publication The Crisis, including writing in the August 1915 issue, "The ballot, wisely used, will bring to her [the African-American woman] the respect and protection that she needs...She needs the ballot to reckon with men who place no value upon her virtue, and to mould healthy public sentiment in favor of her own protection."</p>
      </section>

      <section>
        <SectionTitle title="Activism on a National Scale" />
        <p>Burroughs was active in the National Association of Colored Women (NACW), helping to galvanize Black women's support for the 19th Amendment. She also contributed to the Association for the Study of Negro Life and History and, in 1920, created the National Association of Wage Earners (NAWE), an organization that advocated for the rights of domestic workers. In 1924, she helped to found the National League of Republican Colored Women and served as its president, becoming a popular political speaker in the 1920s. In 1928, President Herbert Hoover appointed her to chair a committee on housing for African Americans. Under the auspices of the NAACP, she endorsed boycotts and other types of protest to fight for an end to segregation and discrimination.</p>
      </section>

      <section>
        <p>In her later years, she remained a popular and respected leader and continued to speak out on issues of Black pride and education. She developed a close friendship and working relationship with civil rights leader Martin Luther King, Jr., the son of her friends Martin Luther King, Sr. and his wife Alberta. This relationship was symbolic of the way in which Burroughs' work helped set a foundation for the Civil Rights Movement. Burroughs continued to lead the NBC Women's Auxiliary until her death in 1961. Several years later, the National Training School for Women and Girls that she founded was renamed the Nannie Helen Burroughs School.</p>
      </section>

      <Sources sources={nannieHelenBurroughs.sources}/>
    </>
  )
}

export default NannieHelenBurroughs
