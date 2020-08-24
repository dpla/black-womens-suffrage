import React from "react";
import scss from "components/TimelinePage/TimelinePage.module.scss"

const TimelineTile = ({year, text}) => {
  return (
    <>
      <div className={scss.timeline__tile}>
        <div className={scss.tile__year}>
          <p>{year}</p>
          <div className={scss.tile__line}></div>
        </div>
        <div className={scss.tile__p}>
          <p>{text}</p>
        </div>
      </div>
    </>
  )
}

export default TimelineTile;
