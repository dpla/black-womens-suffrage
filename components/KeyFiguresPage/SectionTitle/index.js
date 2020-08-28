import React from "react"
import scss from "../../KeyFiguresPage/KeyFiguresPage.module.scss"

const SectionTitle = ({title}) => {
  return (
    <section className={scss.key_figures__section_title}>
      <span></span>
      <h1 className={scss.key_figures__section_title_left}>{title}</h1>
    </section>
  )
}

export default SectionTitle