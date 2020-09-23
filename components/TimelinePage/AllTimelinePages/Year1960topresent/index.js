import React from "react"
import Link from "next/link"
import scss from "components/TimelinePage/TimelinePage.module.scss"
import SearchTag from "shared/SearchTag"

const Year1960topresent = () => {
  return (
    <>
      <div className={scss.timeline__title} data-cy="timeline__title">
        <div className={scss.timeline__title_background}></div>
        <h1>1960-present</h1>
        <div className={scss.timeline__title_line}></div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1962</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Mississippi sharecropper <SearchTag label="Fannie Lou Hamer" tag="blackwomensuffrage_fannie_lou_hamer"/> attempts to register to vote. She is evicted from her home and faces routine violence and threats. She is forced to move repeatedly, and though she is eventually able to register to vote successfully, she becomes the victim of repeated and serious violent harassment and intimidation from local whites. Hamer begins a citizenship education program in Sunflower County, Mississippi.</p>
        </div>
      </div>

       <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1963</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Hamer and several other women are arrested in Winona, Mississippi, while returning from a voter registration workshop in South Carolina, for entering the area of a bus station reserved for whites. All of the women, but especially Hamer, are savagely beaten while in the Winona jail.</p>
          <p><SearchTag label="Rev. Martin Luther King, Jr." tag="blackwomensuffrage_martin_luther_king_jr"/> leads the <Link href='/search?q="March+on+Washington"+1963'><a>March on Washington for Jobs and Freedom</a></Link> and makes his famed "I Have a Dream" speech.</p>
        </div>
      </div>

       <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1964</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p><Link href='/search?q="civil+rights+act"+1964'><a>Civil Rights Act of 1964</a></Link> is passed, guaranteeing equal employment, limiting the use of voter literacy tests and establishing federal authority over the racial integration of public facilities.</p>
        </div>
      </div>

       <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1965</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>Armed police attack civil rights marchers on the <Link href="/search?q=Edmund+Pettus+Bridge"><a>Edmund Pettus Bridge</a></Link> in Montgomery, Alabama.</p>
          <p>The <Link href='/search?q="voting+rights+act"+1965'><a>Voting Rights Act of 1965</a></Link> is passed, prohibiting state and local efforts to prevent Black men and women from exercising their right to vote as laid out in the <SearchTag label="15th" tag="blackwomensuffrage_fifteenth_amendment"/> and 19th amendments. The bill represents a victory for Black women, who had been working for more than a century to win and then ensure the vote for Black women and men.</p>
        </div>
      </div>

       <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>1972</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p><SearchTag label="Shirley Chisholm" tag="blackwomensuffrage_shirley_chisholm"/> becomes the first Black major-party candidate to run for U.S. president. She is also the first woman to run for the Democratic nomination.</p>
        </div>
      </div>

       <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>2013</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>The U.S. Supreme Court strikes down a key component of Voting Rights Act, allowing nine states with a history of racial discrimination to change election laws without federal approval.</p>
        </div>
      </div>

    </>
  )
}

export default Year1960topresent;
