import React from "react"
import Link from "next/link"
import scss from "components/CollectionsPage/CollectionsPage.module.scss"
import PageBanner from "components/shared/PageBanner"
import SectionTitle from "components/shared/SectionTitle"
import { collections } from "constants/collections"
import { primarySourceSets } from "constants/primary-source-sets"

const CollectionsPage = () => {
  const title = "COLLECTIONS",
    text = "Telling the story of Black women’s suffrage, one artifact at a time.",
    graphic = "static/graphic/collections-page/collections-graphic-hero.png";

  return (
    <>
      <PageBanner title={title} text={text} graphic={graphic} />

      <section className={`section__default display__flex ${scss.collections__section}`}>
        <SectionTitle title="Featured Collections" />

        <div className={scss.collections__tile_container}>

          { Object.keys(collections).map((key, index) => {
            const collection = collections[key];

            return (
              <div className={scss.collections__tile} key={`collections-tile-${index + 1}`}>
                <img src={collection.image} />
                <h2>{collection.name}</h2>
                <p>{collection.description}</p>

                {collection.publish ?
                  <button className={scss.collections_button__active}>
                    <Link href="/collections/[colId]" as={`/collections/${ key }`}>
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

      <section className={`section__default display__flex ${scss.pss__section}`}>
        <SectionTitle title="Featured Primary Source Sets" />

        <div className={scss.pss__tile_container}>

          { primarySourceSets.map((pss) => {
            
            return (
              <a href={ pss.href } target="_blank">
                <div className={scss.pss__tile}>
                  <img src={ pss.image } />
                  <h2>{ pss.title }</h2>
                  <h3>{ pss.subtitle }</h3>
                </div>
              </a>
            )
          })}
        
        </div>
      </section>
    </>
  )
}

export default CollectionsPage