import React from "react"
import Link from "next/link"
import scss from "components/TimelinePage/TimelinePage.module.scss"

const Year1930to1959 = () => {
  return (
    <>
      <div className={scss.timeline__title} data-cy="timeline__title">
        <div className={scss.timeline__title_background}></div>
        <h1>1930-1959</h1>
        <div className={scss.timeline__title_line}></div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1932</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p> Longtime Republican politician Bertha Higgins forms the Colored Independent Political Association of Rhode Island after growing frustrated with the Republican party's inaction on the disenfranchisement of Black voters.</p>
        </div>
      </div>

       <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1935</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>According to historian Rosalyn Terborg-Penn, African American women rank lowest on "the economic scale among men and women, Black and white (Terborg-Penn, 165)."</p>
        </div>
      </div>

       <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1936</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>In the midst of the Great Depression, Black voter support moves in large numbers from the Republican to the Democratic party in support of Franklin Roosevelt's bid for re-election, even though most remain registered as Republicans.</p>
        </div>
      </div>

       <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1941</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>President Franklin D. Roosevelt signs Executive Order 8802, opening government jobs, including those related to national defense, to all Americans, regardless of race, creed, color or national origin.</p>
        </div>
      </div>

       <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1948</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>President Harry Truman issues Executive Order 9981, prohibiting racial discrimination in the U.S. military.</p>
        </div>
      </div>

       <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1952</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Charlotta Bass runs for U.S. vice president as the Progressive Party nominee, becoming the first Black woman to run for national office.</p>
        </div>
      </div>

       <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1954</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>In Brown v. Board of Education, the Supreme Court reverses Plessy v. Ferguson (1898), ruling that separate is inherently unequal.</p>
        </div>
      </div>

       <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1955</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Montgomery Bus Boycott protesting segregation begins after NAACP activist Rosa Parks refuses to give up her seat on a city bus to a white man.</p>
        </div>
      </div>

       <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1956</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Supreme Court rules segregated seating is unconstitutional.</p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1957</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Civil Rights Act of 1957 is passed, allowing federal prosecution of anyone attempting to prevent someone from voting and creating a commission to investigate voter fraud.</p>
        </div>
      </div>

    </>
  )
}

export default Year1930to1959;
