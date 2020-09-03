import React from "react"
import Link from "next/link"
import scss from "./ItemView.module.scss"
import PDFViewer from "../PDFViewer";

const ItemView = ({ item }) => {

  return (
    <section className={scss.item_view}>
      <section className={scss.item_view__main}>
        <PDFViewer pathToFile={`/api/dpla/pdf/${item.colId}/${item.itemId}`}/>
        <div className={scss.item_view__main_description}>
          <h1>{ item.title.join(": ") }</h1>
        </div>
      </section>

      <section className={scss.item_view__metadata}>
        <ul>
          <li>Title: { item.title.join(": ") }</li>
          <li>Creator: { item.creator.join("; ") }</li>
          <li>Description: { item.description.join(". ") }</li>
          <li>Subject: { item.subject.join(", ") }</li>
          <li>Type: { item.type.join(", ") }</li>
          <li>Format: { item.format.join(", ") }</li>
          <li>Date: { item.date.join(", ") }</li>
          <li>Identifier: { item.identifier.join(", ") }</li>
          <li>Rights: { item.rights.join(", ") }</li>
          <li>Spatial: { item.spatial.join(", ") }</li>
          <li>Publisher: { item.publisher.join(", ") }</li>
          <li>Language: { item.language.join(", ") }</li>
          <li>PDF URL: { item.href }</li>
        </ul>
      </section>
    </section>
  )
}

export default ItemView;
