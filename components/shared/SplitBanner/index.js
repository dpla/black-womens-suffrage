import React from "react"
import scss from "../SplitBanner/SplitBanner.module.scss"

const SplitBanner = ({left_children, right_children}) => {
  return (
    <>
      <div className={scss.split_banner__section}>
        <div className={scss.container__left}>
          {left_children}
        </div>
        <div className={scss.container__right}>
          {right_children}
        </div>
      </div>
    </>
  )
}

export default SplitBanner