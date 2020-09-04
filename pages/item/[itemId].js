import React from "react";

import fetch from "isomorphic-fetch";

import BWSHead from "components/BWSHead";
import MainLayout from "components/MainLayout";
import CiteButton from "components/shared/CiteButton";
import BreadcrumbsModule from "components/ItemComponents/BreadcrumbsModule";
import Content from "components/ItemComponents/Content";

import { API_ENDPOINT } from "constants/items";

import {
  getCurrentUrl,
  getCurrentFullUrl,
  joinIfArray,
  getItemThumbnail,
} from "lib";

import css from "components/ItemComponents/itemComponent.module.scss";

const ItemDetail = ({url, item}) => {
  return (
    <MainLayout>
      <BWSHead 
        pageTitle={`${item.title} | DPLA`}
        pageDescription={item.description}
        pageImage={item.thumbnailUrl}
      />
      <BreadcrumbsModule
        breadcrumbs={[
          {
            title: "All items",
            url: {
              pathname: "/search"
            }
          },
          { title: joinIfArray(item.title), search: "" }
        ]}
        route={url}
      />

      <main
         id="main"
         role="main"
         className={`container ${css.contentWrapper}`}
       >
         <Content item={item} url={url} />
      </main>

    </MainLayout>
  );
};

export async function getServerSideProps(context) {
  const itemId = context.params.itemId;
  const req = context.req;
  const res = context.res;
  const currentFullUrl = getCurrentFullUrl(req);
  const currentUrl = getCurrentUrl(req);
  try {
    const res = await fetch(`${currentUrl}${API_ENDPOINT}/${itemId}`);
    const json = await res.json();

    const doc = json.docs[0];
    const thumbnailUrl = getItemThumbnail(doc);
    const date = doc.sourceResource.date &&
      Array.isArray(doc.sourceResource.date)
      ? doc.sourceResource.date[0]
      : doc.sourceResource.date;
    const language = doc.sourceResource.language &&
        (Array.isArray(doc.sourceResource.language)
      ? doc.sourceResource.language.map(lang => {
          return lang.name;
        })
      : doc.sourceResource.language) || "";
    const strippedDoc = Object.assign({}, doc, { originalRecord: "" });
    delete strippedDoc.originalRecord;
    return { props : {
      currentFullUrl,
      item: Object.assign({}, doc.sourceResource, {
        id: doc.id,
        thumbnailUrl,
        contributor: doc.dataProvider,
        intermediateProvider: doc.intermediateProvider ? doc.intermediateProvider : "",
        date: date ? date : "",
        language: language ? language : "",
        partner: doc.provider.name,
        sourceUrl: doc.isShownAt,
        useDefaultImage: !doc.object,
        edmRights: doc.rights ? doc.rights : "",
        doc: strippedDoc,
        originalRecord: doc.originalRecord
      })
    } };
  } catch (error) {
    console.log(error);
    if (res) {
      res.statusCode = 404;
    }
    return { props: {error: { statusCode: 404 } } };
  }
};
export default ItemDetail;
