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

    </>
  )
}

export default TimelineSources;
