import React from "react"
import scss from "../KeyFiguresPagination/KeyFiguresPagination.module.scss"

const KeyFiguresPagination = ({ prevFigure, nextFigure }) => {
  return (
    <section className={scss.pagination__container}>

        <div className={scss.pagination__prev}>
          <div>
            <h5>PREVIOUS</h5>
            <img src="/static/icon/button-arrow.svg"/>
          </div>
          <h4>{prevFigure}</h4>
        </div>
        

        <div className={scss.pagination__next}>
          <div>
            <h5>NEXT</h5>
            <img src="/static/icon/button-arrow.svg"/>
          </div>
          <h4>{nextFigure}</h4>
        </div>

        
    </section>
  )
}

export default KeyFiguresPagination