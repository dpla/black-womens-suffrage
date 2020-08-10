import React from "react"
import scss from "../MediumPageSection/MediumPageSection.module.scss"

const MediumPageSection = ({style, children}) => {
  return (
    <section className={`${style} ${scss.med_page_section___container}`}>

    </section>
  )
}

export default MediumPageSection