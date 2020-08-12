import React from "react"
import scss from "../KeyFiguresPage/KeyFiguresPage.module.scss"
import MobileDropdown from "../shared/MobileDropdown"

const KeyFiguresPage = () => {
  const keyFigures = [
    {
      "name": "Sojourner Truth",
      "value": "sojourner-truth",
      "href": "#"
    },
    {
      "name": "Sojourner Truth",
      "value": "sojourner-truth",
      "href": "#"
    }
  ]

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
            <img src="/static/images/graphic/about-page/about-graphic-hero.png" />
          </div>
        </div>
      </div>

      {/* <MobileDropdown items={keyFigures}/> */}

      <div className="wrapper">
        <div className={scss.key_figures__info}>
          <h6 className={scss.key_figures__dates}>C. 1797-1893</h6>
          <h2 className={scss.key_figures__name}>Sojourner Truth</h2>
        </div>
      </div>
    </>
  )
}

export default KeyFiguresPage