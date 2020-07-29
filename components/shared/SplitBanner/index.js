import React from "react"
import scss from "../SplitBanner/SplitBanner.module.scss"

const SplitBanner = ({ }) => {
  return (
    <>
      <section>

        <div className={scss.container__left}></div>
        <div className={scss.container__right}></div>

      </section>
    </>
  )
}

export default SplitBanner