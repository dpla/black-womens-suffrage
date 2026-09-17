import React from "react"
import scss from "./MaintainerBanner.module.scss"
import { MAINTAINER_STATEMENT } from "constants/site"

/**
 * Cleveland Public Library attribution, mirroring the line dp.la carries in its
 * "Potentially Harmful Content" banner.
 *
 * Rendered by /search and /item only. It is a property of those two routes, not
 * of whether their data loaded, so both render it in their error states as well
 * (see #175). 404 and 500 are separate routes and deliberately go without.
 *
 * Do not move this into MainLayout: it would then render on every page in the
 * site, including ones that carry their own banner.
 */
const MaintainerBanner = () => (
  <div className={scss.wrapper} data-cy="maintainer_banner">
    <div className={`container ${scss.inner}`}>
      <p className={scss.maintainer}>{MAINTAINER_STATEMENT}</p>
    </div>
  </div>
)

export default MaintainerBanner
