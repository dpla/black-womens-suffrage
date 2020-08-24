import React from "react"

import MainLayout from "../../components/MainLayout"
import ItemView from "../../components/CollectionComponents/ItemView"
import fs from 'fs'
import path from 'path'

function CollectionItem({ item }) {

  return (
      <MainLayout className="main" role="main">
        <ItemView item={ item } />
      </MainLayout>
  );
}

export async function getStaticPaths() {
  const ibwDirectory = path.join(process.cwd(), 'constants')
  const filePath = path.join(ibwDirectory, 'ida-b-wells.js')
  const itemsString = fs.readFileSync(filePath, 'utf8')
  const json = JSON.parse(itemsString)

  const paths = Object.keys(json).map((key) => ({
    params: { colItemId: key },
  }))

  // const paths = [ { params: { colItemId: "ibwells-0010-001-06" } } ]

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {

  const ibwDirectory = path.join(process.cwd(), 'constants')
  const filePath = path.join(ibwDirectory, 'ida-b-wells.js')
  const itemsString = fs.readFileSync(filePath, 'utf8')
  const json = JSON.parse(itemsString)

  const item = {
    colItemId: params.colItemId,
    title: json[params.colItemId]["title"].join(": "),
    creator: json[params.colItemId]["creator"].join("; "),
    description: json[params.colItemId]["description"].join(" ")
  }

  return {
    props: {
      item: item
    }
  }
}

export default CollectionItem;
