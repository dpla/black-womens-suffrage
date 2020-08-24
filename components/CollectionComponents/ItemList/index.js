import React from "react"
import Link from "next/link"
import scss from "components/CollectionComponents/ItemList/ItemList.module.scss"

const ItemList = ({ items }) => {

  return (
    <section>
      <ul>
        { items.map((item) => (
          <li>
            <img src={ item.thumb } />
            <p>
              <Link href="/collections/[colItemId]" as={`/collections/${ item.key }`}>
                <a>{ item.title }</a>
              </Link>
            </p>
            <p>{ item.creator }</p>
            <p>{ item.description }</p>
          </li>
        )) }
      </ul>
    </section>
  )
}

export default ItemList;
