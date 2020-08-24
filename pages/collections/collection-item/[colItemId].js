import React from "react"
import { useRouter } from 'next/router';
import MainLayout from "../../../components/MainLayout"
import ItemList from "../../../components/CollectionComponents/CollectionItem"
import fs from 'fs'
import path from 'path'

function CollectionItem({ item }) {

  return (
      <MainLayout className="main" role="main">
        <CollectionItem item={ item } />
      </MainLayout>
  )
};

export async function getStaticProps() {

  const router = useRouter();
  const { colItemId } = router.query;
  const ibwDirectory = path.join(process.cwd(), 'constants');
  const filePath = path.join(ibwDirectory, 'ida-b-wells.js');
  const itemsString = fs.readFileSync(filePath, 'utf8');
  const json = JSON.parse(itemsString);

  const item = {
    title: json[colItemId]["title"].join(": "),
    creator: json[colItemId]["creator"].join("; "),
    description: json[colItemId]["description"].join(" ")
  }

  return {
    props: {
      item: item
    }
  }
}

export default CollectionItem;
