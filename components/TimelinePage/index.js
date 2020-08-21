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

      <section className={`section__default ${scss.timeline}`}>

        <div className={scss.timeline__tile}>
          <div className={scss.tile__year}>
            <p>1833</p>
            <div className={scss.tile__line}></div>
          </div>
          <div className={scss.tile__p}>
            <p>The Philadelphia Female Anti-Slavery Society is founded. Among its founding members are Charlotte Vandine Forten and several of her daughters. This was the first biracial organization of female abolitionists in the United States, and one of six abolitionist groups the Forten family helped to found and finance.</p>
          </div>
        </div>

        <div className={scss.timeline__tile}>
          <div className={scss.tile__year}>
            <p>1833</p>
            <div className={scss.tile__line}></div>
          </div>
          <div className={scss.tile__p}>
            <p>The Philadelphia Female Anti-Slavery Society is founded. Among its founding members are Charlotte Vandine Forten and several of her daughters. This was the first biracial organization of female abolitionists in the United States, and one of six abolitionist groups the Forten family helped to found and finance.</p>
          </div>
        </div>

      </section>
    </>
  )
}

export default TimelinePage;
