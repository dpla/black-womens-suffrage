import React from "react";
import scss from "components/TimelinePage/TimelinePage.module.scss"
import PageBanner from "components/shared/PageBanner"
import { years1820to1859 } from "constants/timeline"
import TimelineTile from "components/TimelinePage/TimelineTile"

const TimelinePage = () => {
  const title = "TIMELINE",
    text = "Celebrating Black women and the vote.",
    graphic = "static/graphic/timeline-page/timeline-graphic-hero.png";

  return (
    <>
      <PageBanner title={title} text={text} graphic={graphic} />

      <section className={`section__default ${scss.timeline}`}>

        {years1820to1859.map((tile, index) => {
          return (
            <TimelineTile key={index} year={tile.year} text={tile.text} />
          )
        })
        }

        <section className={scss.pagination__container}>
          <div className={scss.pagination__next}>
            <div>
              <h5>NEXT</h5>
              <img src="/static/icon/button-arrow.svg" />
            </div>
            <h4>1860-1869</h4>
          </div>
        </section>
      </section>
    </>
  )
}

export default TimelinePage;
