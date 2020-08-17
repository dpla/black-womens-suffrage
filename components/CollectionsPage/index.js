import React from "react"
import Link from "next/link"
import scss from "../CollectionsPage/CollectionsPage.module.scss"
import PageBanner from "../shared/PageBanner"
import SectionTitle from "../shared/SectionTitle"
import { collections } from "../../constants/collections"

const CollectionsPage = () => {
  const title = "COLLECTIONS",
    text = "Telling the story of Black women’s suffrage, one artifact at a time.",
    graphic = "/static/assets/graphic/collections-page/collections-graphic-hero.png";

  return (
    <>
      <PageBanner title={title} text={text} graphic={graphic}/>

      <section className={scss.collections__section}>
        <SectionTitle title="Featured Collections"/>

        {collections.map((collection, index) => {
          return (
            <div className={scss.collections__tile}>
              <img src={collection.image}/>
              <h2>{collection.name}</h2>
              <p>{collection.description}</p>

              <Link href={collection.href} style={collection.buttonStyle}>
                <a>{collection.buttonText}</a>
              </Link>
            </div>
          )
        })}
        

      </section>
    </>
  )
}

export default CollectionsPage