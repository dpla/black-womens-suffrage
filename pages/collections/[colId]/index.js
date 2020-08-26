import React from "react"
import MainLayout from "components/MainLayout"
import ItemList from "components/CollectionComponents/ItemList"
import fs from 'fs'
import path from 'path'
import { collections } from "constants/collections"

function Collection({ collection, items }) {

  return (
      <MainLayout
        className="main"
        role="main"
        pageTitle={ collection.name }
      >
        <ItemList collection={ collection } items={ items } />
      </MainLayout>
  )
};

export async function getStaticPaths() {

  const paths = Object.keys(collections).map((key) => ({
    params: { colId: key },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {

  const ibwDirectory = path.join(process.cwd(), 'constants');
  const filePath = path.join(ibwDirectory, 'ida-b-wells.js');
  const itemsString = fs.readFileSync(filePath, 'utf8');
  const json = JSON.parse(itemsString);

  const items = Object.keys(json).map((key) => {

    const title = json[key]["title"].join(": ");
    const creator = json[key]["creator"].join("; ");
    const description = json[key]["description"].join(" ");

    const thumb = "/static/thumbnails/ibw/" + key + ".jpg";

    return {
      colItemId: key,
      title: title,
      creator: creator,
      description: description,
      thumb: thumb
    }
  });

  var collection = collections[params.colId];
  collection["colId"] = params.colId;

  return {
    props: {
      items: items,
      collection: collection
    }
  }
}

export default Collection;
