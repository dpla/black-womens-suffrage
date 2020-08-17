import React from "react"
import scss from "../CollectionsPage/CollectionsPage.module.scss"
import PageBanner from "../shared/PageBanner"
import SectionTitle from "../shared/SectionTitle";

const CollectionsPage = () => {
  const title = "COLLECTIONS",
    text = "Telling the story of Black women’s suffrage, one artifact at a time.",
    graphic = "/static/assets/graphic/collections-page/collections-graphic-hero.png";

  return (
    <>
      <PageBanner title={title} text={text} graphic={graphic}/>

      <section className={scss.collections__section}>
        <SectionTitle title="Featured Collections"/>

      </section>
    </>
  )
}

export default CollectionsPage