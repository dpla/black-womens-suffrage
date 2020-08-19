import React from "react"
import Link from "next/link"
import scss from "components/CollectionsPage/CollectionsPage.module.scss"
import PageBanner from "components/shared/PageBanner"
import SectionTitle from "components/shared/SectionTitle"
import { collections } from "constants/collections"

const CollectionsPage = () => {
  const title = "COLLECTIONS",
    text = "Telling the story of Black women’s suffrage, one artifact at a time.",
    graphic = "static/graphic/collections-page/collections-graphic-hero.png";

  return (
    <>
      <PageBanner title={title} text={text} graphic={graphic} />

      <section className={`wrapper display__flex ${scss.collections__section}`}>
        <SectionTitle title="Featured Collections" />

        <div className={scss.collections__tile_container}>

          {collections.map((collection, index) => {
            return (
              <div className={scss.collections__tile} key={`collections-tile-${index + 1}`}>
                <img src={collection.image} />
                <h2>{collection.name}</h2>
                <p>{collection.description}</p>

                {collection.href ?
                  <button className={scss.collections_button__active}>
                    <Link href={`/collections/${collection.href}`}>
                      <a>VIEW COLLECTION</a>
                    </Link>
                    <img src="static/icon/collections-page/button-arrow.svg" />
                    <div className={scss.collections_button__active_underline}></div>
                  </button>
                  :
                  <button className={scss.collections_button__inactive}>
                    <p>COMING SOON</p>
                    <div className={scss.collections_button__inactive_underline}></div>
                  </button>
                }
              </div>
            )
          })}
        </div>

      </section>
    </>
  )
}

export default CollectionsPage