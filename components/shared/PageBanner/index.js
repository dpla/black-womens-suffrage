import React from 'react'
import scss from "../PageBanner/PageBanner.module.scss"

const PageBanner = ({
  title,
  text,
  graphic
}) => {
  return (
    <>
      <div className={scss.banner}>
        <div className={scss.banner__left}>
          <section className={`${scss.container} ${scss.container__left}`}>
            <h6 className="banner__title">{title}</h6>
            <p className="banner__text_large">{text}</p>
          </section>
        </div>
        <div className={scss.banner__right}>
          <div className={`${scss.container} ${scss.container__right}`}>
            <img src={graphic}/>
          </div>
        </div>
      </div>  
      
    </>
  )
}

export default PageBanner