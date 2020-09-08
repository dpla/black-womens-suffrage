import React from "react"
import Link from "next/link"
import scss from "components/TimelinePage/TimelinePage.module.scss"
import PageBanner from "components/shared/PageBanner"
import Dropdown from 'react-dropdown'
import dynamic from "next/dynamic"
import { timelineOptions } from "constants/timeline-options"
import { useRouter } from "next/router"
import TimelinePagination from "components/TimelinePage/TimelinePagination"
import BWSHead from "components/BWSHead"

function TimelinePage({ timeId }) {

  const router = useRouter();

  const templateName = timeId == "Sources" ? "TimelineSources" :
      "Year" + timeId.replace("-", "to")

  const DynamicComponent = dynamic(import(`./AllTimelinePages/${templateName}`))

  const currentIndex = timelineOptions.indexOf(timeId);
  const nextTime = timelineOptions[currentIndex + 1];
  const prevTime = timelineOptions[currentIndex - 1];

  const title = "TIMELINE"
  const text = "Marching toward progress: the journey to Black women’s suffrage.";
  const graphic = "/static/graphic/timeline-page/timeline-graphic-hero.png";

  function _onSelect (option) {
    router.push("/timeline/[timeId]", `/timeline/${option.label}`);
  }

  return (
    <>
      <BWSHead 
        pageTitle={`${timeId} | Black Women's Suffrage Timeline | DPLA`}
        pageDescription={`Key events in the journey to Black women's suffrage: ${timeId}`}
        seoType="article" />

      <PageBanner title={title} text={text} graphic={graphic} />

      <section className={`section__default ${scss.timeline}`}>
        <Dropdown 
          options={timelineOptions} 
          onChange={_onSelect} 
          value={timeId} 
          className={scss.timeline__dropdown} />

        <div className={scss.timeline__left}>
          <ul>
            {timelineOptions.map((years, index) => {
              return (
                <li 
                  key={`timeline-years-${index+1}`} 
                  id={index}
                  value={years}>
                <Link href="/timeline/[timeId]" as={`/timeline/${ years }`}>
                    <a className={
                      (years == timeId ? scss.timeline__active_item : scss.timeline__li)
                    }>
                      <span></span>
                      { years }
                    </a>
                  </Link>  
                </li>
              )
            })}
          </ul>
        </div>
        <div className={scss.timeline__right}>
          <DynamicComponent />
          <TimelinePagination prevTime={ prevTime } nextTime={ nextTime } />
        </div>     
      </section>
    </>
  )
}

export default TimelinePage;
