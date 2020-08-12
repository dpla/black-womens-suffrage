import React from "react"
import scss from "../../KeyFiguresPage/KeyFiguresPage.module.scss"

const SojournerTruth = ({selectedKeyFigure}) => {
  return (
    <>
      <div className={scss.key_figures__info}>
        <h6 className={scss.key_figures__dates}>C. 1797-1893</h6>
        <h2 className={scss.key_figures__name}>Sojourner Truth</h2>
      </div>
    </>
  )
}

export default SojournerTruth