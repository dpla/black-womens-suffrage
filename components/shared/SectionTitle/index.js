import React from "react"
import scss from "../SectionTitle/SectionTitle.module.scss"

const SectionTitle = ({title}) => {
  return (
    <section className={scss.section_title}>
      <h1 className={scss.section_title_left}><span>{title}</span></h1>
    </section>
  )
}

export default SectionTitle