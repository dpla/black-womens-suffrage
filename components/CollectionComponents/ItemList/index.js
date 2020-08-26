import React from "react"
import Link from "next/link"
import scss from "components/CollectionComponents/ItemList/ItemList.module.scss"
import CollectionHeader from "components/CollectionsPage/CollectionHeader"

const ItemList = ({ collection, items }) => {
  const image = collection.image,
  name = collection.name,
  description = collection.description,
  years = collection.lived,
  styledText = collection.intro;

  return (
    <section>
      <CollectionHeader image={image} name={name} description={description} years={years} styledText={styledText}/>
      <div className={scss.item_list__header}>
        <div className={scss.item_list__header_line}></div>
        <p>Explore the Collection</p>
      </div>

      <ul className={scss.item__ul}>
        {items.map((item) => (
          <Link href="/collections/[colId]/[colItemId]"
            as={`/collections/${collection.colId}/${item.colItemId}`}>
            <a>
              <li className={scss.item__li}>
                <img src={item.thumb} />
                <p className={scss.item__title}>{item.title}</p>
                <p className={scss.item__date}>{item.date}</p>
              </li>
            </a>
          </Link>
        ))}
      </ul>
    </section>
  )
}

export default ItemList;
