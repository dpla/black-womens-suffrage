import React from "react"
import Link from "next/link"
import scss from "components/TimelinePage/TimelinePage.module.scss"

const Year1910to1919 = () => {
  return (
    <>
      <div className={scss.timeline__title}>
        <div className={scss.timeline__title_background}></div>
        <h1>1910-1919</h1>
        <div className={scss.timeline__title_line}></div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>  YEAR  </p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>   TEXT   </p>
          <p>   TEXT   </p>
        </div>
      </div>

      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>  YEAR  </p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>   TEXT   </p>
          <p>   TEXT   </p>
        </div>
      </div>

    </>
  )
}

export default Year1910to1919;
