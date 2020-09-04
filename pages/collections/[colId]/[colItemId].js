import React from "react"

import MainLayout from "components/MainLayout"
import ItemView from "components/CollectionsPage/ItemView"
import fs from 'fs'
import path from 'path'
import { collections } from "constants/collections"
import BWSHead from "components/BWSHead"
import BreadcrumbsModule from "components/CollectionsPage/BreadcrumbsModule"

function CollectionItem({ item }) {
  return (
      <MainLayout 
        className="main" 
        role="main"
      >
        <BWSHead 
          pageTitle={`${item.title} | DPLA`}
          pageDescription={item.description}
          pageImage={item.href}
          pageImageCaption={item.title}
        />
        <BreadcrumbsModule
            breadcrumbs={[
              {
                title: "Collections",
                url: "/collections"
              },
              { 
                title: item.colName,
                url: "/collections/[colId]",
                as: "/collections/" + item.colId
              },
              {
                title: item.title.join(", ")
              }
            ]}
          />
        <ItemView item={ item } />
      </MainLayout>
  );
}

// File containing items is expected in constants/[colId].js
function getItems(colId) {
  const directory = path.join(process.cwd(), 'constants');
  const fileName = `${ colId }.js`;
  const filePath = path.join(directory, fileName);
  let json = {};
  try {
    const itemsString = fs.readFileSync(filePath, 'utf8');
    json = JSON.parse(itemsString);
  } catch (e) {
    if (e.code === "ENOENT") {
      // File containing items not found.
      console.log(e)
    } else {
      throw e;
    }
  }
  return json;
}

export async function getStaticPaths() {

  // Get IDs of published collections.
  const publishColIds = Object.keys(collections).filter((colId) => {
    return collections[colId]["publish"];
  });

  const paths = publishColIds.flatMap((colId) => {
    const items = getItems(colId);

    // Get item IDs for each collection.
    return Object.keys(items).map((colItemId) => ({
      // Construct route.
      params: { colId: colId, colItemId: colItemId }
    }));
  });

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const items = getItems(params.colId);
  const item = items[params.colItemId];

  item.colId = params.colId;
  item.colName = collections[params.colId]["name"]
  item.itemId = params.colItemId;

  return {
    props: {
      item: item
    }
  }
}

export default CollectionItem;
