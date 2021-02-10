import React from "react"
import Link from "next/link"
import scss from "components/CollectionsPage/CollectionsPage.module.scss"
import PageBanner from "components/shared/PageBanner"
import SectionTitle from "components/CollectionsPage/SectionTitle"
import { collections } from "constants/collections"
import { primarySourceSets } from "constants/primary-source-sets"

const CollectionsPage = () => {
  const title = "COLLECTIONS",
    text = "Telling the story of Black women’s suffrage, one artifact at a time.",
    graphic = "static/graphic/collections-page/collections-graphic-hero.png";

  return (
    <>
      <PageBanner title={title} text={text} graphic={graphic} />

      <section className={`section__default ${scss.collections__section}`}>
        <SectionTitle title="Featured Collections" />

        <div className={scss.collections__tile_container_background}></div>
        <div className={scss.collections__tile_container}>

          {Object.keys(collections).map((key, index) => {
            const collection = collections[key];

            if (!collection.external_link) {
              return (
                collection.publish ?
                  <div data-cy="collection__active" key={`collections-tile-${index + 1}`}>
                    <Link href="/collections/[colId]" as={`/collections/${key}`}>
                      <div className={`${scss.collections__tile} ${scss.collections__tile_active}`}>
                        <img src={collection.image} alt={`Collection ${collection.name}`} />
                        <h2>{collection.name}</h2>
                        <p>{collection.description}</p>
                        <button className={scss.collections_button__active}>
                          <a>VIEW COLLECTION</a>
                          <img src="static/icon/collections-page/button-arrow.svg" alt="" />
                          <div className={scss.collections_button__active_underline}></div>
                        </button>
                      </div>
                    </Link>
                  </div>
                  :
                  <div className={scss.collections__tile} key={`collections-tile-${index + 1}`} data-cy="collection__inactive">
                    <img src={collection.image} alt={`Collection ${collection.name}`} />
                    <h2>{collection.name}</h2>
                    <p>{collection.description}</p>

                    <button className={scss.collections_button__inactive}>
                      <p>COMING SOON</p>
                      <div className={scss.collections_button__inactive_underline}></div>
                    </button>
                  </div>
              )
            } else {
              return (
                <div data-cy="collection__active" key={`collections-tile-${index + 1}`}>
                  <div className={`${scss.collections__tile} ${scss.collections__tile_active}`}>
                    <img src={collection.image} alt={`Collection ${collection.name}`} />
                    <h2>{collection.name}</h2>
                    <p>{collection.description}</p>
                    <button className={scss.collections_button__active}>
                      <a href={collection.external_link} target="_blank" alt={`Link to ${collection.name}`}>VIEW COLLECTION</a>
                      <img src="static/icon/collections-page/button-arrow.svg" alt="" />
                      <div className={scss.collections_button__active_underline}></div>
                    </button>
                  </div>
                </div>
              )
            }
          })}
        </div>

        <div className={scss.collections__line}></div>

      </section>

      <section className={`section__default ${scss.pss__section}`}>
        <SectionTitle title="Featured Primary Source Sets" />
        <div className={scss.pss__tile_container} data-cy="primary_source_set">
          {primarySourceSets.slice(0, 3).map((pss, index) => {
            return (
              <a href={pss.href} target="_blank" key={`primary-source-set-tile-${index + 1}`}>
                <div className={scss.pss__tile}>
                  <img src={pss.image} alt={`${pss.title}`} />
                  <h2>{pss.title}</h2>
                  <h3>{pss.subtitle}</h3>
                </div>
              </a>
            )
          })}
        </div>

        <div className={scss.pss__tile_container} data-cy="primary_source_set">
          {primarySourceSets.slice(3, 6).map((pss, index) => {
            return (
              <div className={scss.pss__tile} key={`primary-source-set-tile-${index + 1}`}>
                <a href={pss.href} target="_blank">
                  <img src={pss.image} alt={`${pss.title}`} />
                  <h2>{pss.title}</h2>
                  <h3>{pss.subtitle}</h3>
                </a>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default CollectionsPage