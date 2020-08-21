import React from "react";
import scss from "components/TimelinePage/TimelinePage.module.scss"
import PageBanner from "components/shared/PageBanner"

const TimelinePage = () => {
  const title = "TIMELINE",
  text = "Celebrating Black women and the vote.",
  graphic = "static/graphic/timeline-page/timeline-graphic-hero.png";

  return (
    <>
      <PageBanner title={title} text={text} graphic={graphic} />
    </>
  )
}

export default TimelinePage;
