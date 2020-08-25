import React from "react"
import scss from "../KeyFiguresPage/KeyFiguresPage.module.scss"
import SelectedKeyFigure from "./SelectedKeyFigure"
import { keyFigures } from "constants/key-figures"
import PageBanner from "shared/PageBanner"

const KeyFiguresPage = ({ figure }) => {

  return (
    <>
      <PageBanner title="KEY FIGURES" text="Shining a light on Black women's activism" graphic="/static/graphic/about-page/about-graphic-hero.png"/>

      {/* <MobileDropdown items={keyFigures}/> */}

      <section className={`${scss.key_figures} section__default`}>
        <div className={scss.key_figures__left}>
          <ul>
            {Object.keys(keyFigures).map((key, index) => {
              const figure = keyFigures[key]

              return (
                <li 
                key={`key-figure-${index+1}`} 
                id={index}
                value={figure.value} 
                className={
                  (index === { scss.key_figures__active_item })
                }>{figure.name}</li>                  
              )
            })}
          </ul>
        </div>

        <div className={scss.key_figures__right}>
          <SelectedKeyFigure keyFigure={ figure.figId }/>
        </div> 
      </section>
    </>
  )
}
  
export default KeyFiguresPage