import React from "react"
import Link from "next/link"
import scss from "components/CollectionComponents/ItemView/ItemView.module.scss"

const ItemView = ({ item }) => {

  return (
    <section>
      <ul>
        <li>
          { item.colItemId }
        </li>
      </ul>
    </section>
  )
}

export default ItemView;
