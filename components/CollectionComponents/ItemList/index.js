import React from "react"
import Link from "next/link"
import scss from "components/CollectionComponents/ItemList/ItemList.module.scss"

const ItemList = ({ collection, items }) => {

  return (
    <section>
      <h2>Collection</h2>
      <p>Name: { collection.name }</p>
      <p>Description: { collection.description }</p>
      <img src={collection.image} />
      <h2>Items</h2>
      <ul>
        { items.map((item) => (
          <li>
            <img src={ item.thumb } />
            <p>
              <Link href="/collections/[colId]/[colItemId]"
                    as={`/collections/${ collection.colId }/${ item.colItemId }`}>
                <a>Title: { item.title }</a>
              </Link>
            </p>
            <p>Creator: { item.creator }</p>
            <p>Description: { item.description }</p>
            <br/>
          </li>
        )) }
      </ul>
    </section>
  )
}

export default ItemList;
