import React from "react"

import MainLayout from "../../components/MainLayout"
import ItemView from "../../components/CollectionComponents/ItemView"
import fs from 'fs'
import path from 'path'

function CollectionItem({ item }) {

  return (
      <MainLayout 
        className="main" 
        role="main"
        pageTitle={ item.title }
      >
        <ItemView item={ item } />
      </MainLayout>
  );
}

function getItems() {
  const ibwDirectory = path.join(process.cwd(), 'constants')
  const filePath = path.join(ibwDirectory, 'ida-b-wells.js')
  const itemsString = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(itemsString)
}

export async function getStaticPaths() {
  const json = getItems()

  const paths = Object.keys(json).map((key) => ({
    params: { colItemId: key },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const json = getItems()

  return {
    props: {
      item: json[params.colItemId]
    }
  }
}

export default CollectionItem;
