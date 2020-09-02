import React from "react"
import scss from "components/CollectionsPage/CollectionsPage.module.scss"

const SectionTitle = ({title}) => {
  return (
    <section className={scss.collections__section_title}>
      <span></span>
      <h1 className={scss.collections__section_title_left}>{title}</h1>
    </section>
  )
}

export default SectionTitle