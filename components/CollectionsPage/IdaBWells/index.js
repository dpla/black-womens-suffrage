import React from "react"
import Link from "next/link"
import scss from "components/CollectionComponents/ItemList/ItemList.module.scss"
import ItemList from "components/CollectionComponents/ItemList"
import CollectionHeader from "components/CollectionsPage/CollectionHeader"

const IdaBWells = ({ items }) => {
  const image = "/static/image/collections-page/collections-image-ida.png",
  years = "c. 1862-1931",
  name = "Ida B. Wells Barnett Papers",
  styledText= "Ida B. Wells Barnett, (1862-1931) teacher, journalist and anti-lynching activist. ",
  description = "This collection contains correspondence, manuscript of Crusade for Justice: the Autobiography of Ida B. Wells, diaries, copies of articles and speeches by Wells, articles, and accounts about Wells, newspaper clippings, and photographs.";

  return (
    <section>
      <CollectionHeader image={image} years={years} name={name} styledText={styledText} description={description}/>
      <ItemList items={items}/>
    </section>
  )
}

export default IdaBWells;
