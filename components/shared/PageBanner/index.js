import React from 'react'
import scss from "../PageBanner/PageBanner.module.scss"

const PageBanner = ({
  title,
  text,
  graphic
}) => {
  return (
    <>
      <section className={scss.banner}>
        <div className={scss.banner_left__div}>
          <h6>{title}</h6>
          <p>{text}</p>
        </div>
        <div className={scss.banner_right__div}>
          <div className={scss.banner_right__section}>
            <img src={graphic} alt=""/>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default PageBanner