import React from "react"
import scss from "./MaintainerBanner.module.scss"
import { MAINTAINER_STATEMENT } from "constants/site"

const MaintainerBanner = () => (
  <div className={scss.wrapper} data-cy="maintainer_banner">
    <div className={`container ${scss.inner}`}>
      <p className={scss.maintainer}>{MAINTAINER_STATEMENT}</p>
    </div>
  </div>
)

export default MaintainerBanner
