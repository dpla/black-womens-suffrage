import React from "react"
import MainLayout from "components/MainLayout"
import ItemList from "components/CollectionsPage/ItemList"
import fs from 'fs'
import path from 'path'
import { collections } from "constants/collections"
import BWSHead from "components/BWSHead";
import BreadcrumbsModule from "components/CollectionsPage/BreadcrumbsModule"

function Collection({ collection, items }) {

  return (
      <MainLayout
        className="main"
        role="main"
      >
        <BWSHead 
          pageTitle={`${collection.name} | DPLA`}
          pageDescription={collection.description}
          pageImage={collection.image}
          pageImageCaption={collection.name}
        />
        <BreadcrumbsModule
            breadcrumbs={[
              {
                title: "Collections",
                url: {
                  pathname: "/collections"
                }
              },
              { 
                title: collection.name
              }
            ]}
          />
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
  const constantFile = `${params.colId}.js`
  const directory = path.join(process.cwd(), 'constants');
  const filePath = path.join(directory, constantFile);
  const itemsString = fs.readFileSync(filePath, 'utf8');
  const json = JSON.parse(itemsString);

  const items = Object.keys(json).map((key) => {
    const title = json[key]["title"].join(": ");
    const creator = json[key]["creator"].join("; ");
    const description = json[key]["description"];
    const date = json[key]["date"].join(": ");

    let thumbPath;

    if (params.colId == 'ida-b-wells') {
      thumbPath = 'ibw'
    } else if (params.colId == 'charlotta-bass') {
      thumbPath = 'cb'
    }
    const thumb = `/static/thumbnails/${thumbPath}/${key}.jpg`;

    return {
      colItemId: key,
      title: title,
      creator: creator,
      description: description,
      thumb: thumb,
      date: date
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
