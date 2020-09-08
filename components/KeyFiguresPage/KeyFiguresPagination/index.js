import React from "react"
import Link from "next/link"
import scss from "../KeyFiguresPagination/KeyFiguresPagination.module.scss"
import { keyFigures } from "constants/key-figures"

const KeyFiguresPagination = ({ prevFigure, nextFigure }) => {

  return (
    <section className={scss.pagination__container}>

      { prevFigure &&
        <Link href="/key-figures/[key]" as={`/key-figures/${ prevFigure }`}>
          <div className={scss.pagination__prev}>
            <div>
              <h4>PREVIOUS</h4>
              <img src="/static/icon/button-arrow.svg" alt={`Previous: ${prevFigure}`}/>
            </div>
            <h5>{ keyFigures[prevFigure]["name"] }</h5>
          </div>
        </Link>
      }
        

      { nextFigure &&
        <Link href="/key-figures/[key]" as={`/key-figures/${ nextFigure }`}>
          <div className={scss.pagination__next}>
            <div>
              <h4>NEXT</h4>
              <img src="/static/icon/button-arrow.svg" alt={`Next: ${nextFigure}`}/>
            </div>
           <h5>{ keyFigures[nextFigure]["name"] }</h5>
          </div>
        </Link>
      }
        
    </section>
  )
}

export default KeyFiguresPagination