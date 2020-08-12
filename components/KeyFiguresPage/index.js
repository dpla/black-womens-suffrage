import React from "react"
import scss from "../KeyFiguresPage/KeyFiguresPage.module.scss"

const KeyFiguresPage = () => {
  return (
    <>
    <div className={scss.banner}>
        <div className={scss.banner_left__div}>
          {/* <section className={scss.banner_left__section}> */}
            <h6>KEY FIGURES</h6>
            <p>Shining a light on Black women's activism</p>
          {/* </section> */}
        </div>
        <div className={scss.banner_right__div}>
          <div className={scss.banner_right__section}>
            <img src="/static/images/graphic/about-page/about-graphic-hero.png"/>
          </div>
        </div>
      </div>  
    </>
  )
}

export default KeyFiguresPage