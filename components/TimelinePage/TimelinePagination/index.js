import React from "react"
import Link from "next/link"
import scss from "../TimelinePagination/TimelinePagination.module.scss"
import { timelineOptions } from "constants/timeline-options"

const TimelinePagination = ({ prevTime, nextTime }) => {

  return (
    <section className={scss.pagination__container}>

      { prevTime &&
        <Link href="/timeline/[timeId]" as={`/timeline/${ prevTime }`}>
          <a data-cy="pagination__prev">
            <div className={scss.pagination__prev}>
              <div>
                <h4>PREVIOUS</h4>
                <img src="/static/icon/button-arrow.svg" alt={`Previous: ${prevTime}`} />
              </div>
              <h5>{ prevTime }</h5>
            </div>
            </a>
        </Link>
      }
        

      { nextTime &&
        <Link href="/timeline/[timeId]" as={`/timeline/${ nextTime }`}>
          <a data-cy="pagination__next">
            <div className={scss.pagination__next}>
              <div>
                <h4>NEXT</h4>
                <img src="/static/icon/button-arrow.svg" alt={`Next: ${nextTime}`} />
              </div>
             <h5>{ nextTime }</h5>
            </div>
          </a>
        </Link>
      }
        
    </section>
  )
}

export default TimelinePagination
