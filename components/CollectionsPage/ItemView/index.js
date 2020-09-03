import React from "react"
import Link from "next/link"
import scss from "./ItemView.module.scss"
import PDFViewer from "../PDFViewer";

const ItemView = ({ item }) => {

  return (
    <section className={scss.item_view}>
      <section className={scss.item_view__main}>
        <PDFViewer pathToFile={`/api/dpla/pdf/${item.colId}/${item.itemId}`}/>
        <div className={scss.item_view__main_details}>
          <h1>{ item.title.join(": ") }</h1>
          { item.date.length != 0 && <div className={scss.item_view__main_date}>
            { item.date.join(", ") }
          </div> }
          { item.creator.length != 0 && <div className={scss.item_view__main_creator}>
            { item.creator.join("; ") }
          </div> }
          { item.description.length != 0 && <div className={scss.item_view__main_description}>
            { item.description.join(". ") }
          </div> }
        </div>
      </section>

      <section className={scss.item_view__metadata}>
        <h2>
          <span className={scss.item_view__line}></span>
          <span>Item details</span>
        </h2>

        <ul>
          { item.title.length != 0 && <li>
            <span className={scss.item_view__label}>Title: </span>
            <span className={scss.item_view__value}>{ item.title.join(": ") }</span>
          </li> }
          { item.creator.length != 0 && <li>
            <span className={scss.item_view__label}>Creator: </span>
            <span className={scss.item_view__value}>{ item.creator.join("; ") }</span>
          </li> }
          { item.date.length != 0 && <li>
            <span className={scss.item_view__label}>Date created: </span>
            <span className={scss.item_view__value}>{ item.date.join(", ") }</span>
          </li> }
        </ul>

        <ul>
          { item.description.length != 0 && <li>
            <span className={scss.item_view__label}>Description: </span>
            <span className={scss.item_view__value}>{ item.description.join(". ") }</span>
          </li> }
          { item.subject.length != 0 && <li>
            <span className={scss.item_view__label}>Subject: </span>
            <span className={scss.item_view__value}>
              { item.subject.map((subject) => {
                return(
                  <p>{ subject }</p>
                )
             })}
            </span>
          </li> }
          { item.type.length != 0 && <li>
            <span className={scss.item_view__label}>Type: </span>
            <span className={scss.item_view__value}>{ item.type.join(", ") }</span>
          </li> }
          { item.format.length != 0 && <li>
            <span className={scss.item_view__label}>Format: </span>
            <span className={scss.item_view__value}>{ item.format.join(", ") }</span>
          </li> }
          { item.spatial.length != 0 && <li>
            <span className={scss.item_view__label}>Spatial: </span>
            <span className={scss.item_view__value}>{ item.spatial.join(", ") }</span>
          </li> }
        </ul>

        <ul>
          { item.identifier.length != 0 && <li>
            <span className={scss.item_view__label}>URL: </span>
            <span className={scss.item_view__value}>
             { item.identifier.map((id) => {
                return(
                  <a href={ id }>
                    { id }
                  </a>
                )
             })}
            </span>
          </li> }
          { item.rights.length != 0 && <li>
            <span className={scss.item_view__label}>Rights: </span>
            <span className={scss.item_view__value}>
            { item.rights.map((rights) => {
                return(
                  <a href={ rights }>
                    { rights }
                  </a>
                )
             })}
            </span>
          </li> }
          { item.publisher.length != 0 && <li>
            <span className={scss.item_view__label}>Publisher: </span>
            <span className={scss.item_view__value}>{ item.publisher.join(", ") }</span>
          </li> }
          { item.language.length != 0 && <li>
            <span className={scss.item_view__label}>Language: </span>
            <span className={scss.item_view__value}>{ item.language.join(", ") }</span>
          </li> }
        </ul>
      </section>
    </section>
  )
}

export default ItemView;
