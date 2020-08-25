import React from "react"
import MainLayout from "components/MainLayout"
import ItemList from "components/CollectionComponents/ItemList"
import fs from 'fs'
import path from 'path'
import IdaBWellsCollection from "components/CollectionsPage/IdaBWells"

function IdaBWells({ items }) {
  return (
      <MainLayout className="main" role="main">
        <IdaBWellsCollection items={ items }/>
      </MainLayout>
  )
};

export async function getStaticProps() {
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
      title: title,
      creator: creator,
      description: description,
      thumb: thumb
    }
  });

  return {
    props: {
      items: items
    }
  }
}

export default IdaBWells;
