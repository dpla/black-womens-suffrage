import React from "react";


import BWSHead from "components/BWSHead";
import MainLayout from "components/MainLayout";
import CiteButton from "components/shared/CiteButton";
import BreadcrumbsModule from "components/ItemComponents/BreadcrumbsModule";
import Content from "components/ItemComponents/Content";

import {
  getCurrentFullUrl,
  joinIfArray,
  getItemThumbnail,
} from "lib";

import css from "components/ItemComponents/itemComponent.module.scss";

const ItemDetail = ({url, item, errorState}) => {
  if (errorState || !item) {
    return (
      <MainLayout>
        <BWSHead pageTitle="Item unavailable | DPLA" />
        <main id="main" role="main" className="container">
          <p className={css.errorMessage}>
            This item couldn&apos;t be loaded. Please try again.
          </p>
        </main>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <BWSHead
        pageTitle={`${item.title} | DPLA`}
        pageDescription={item.description}
        pageImage={item.thumbnailUrl}
        canonicalUrl={url}
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
  const url = getCurrentFullUrl(context.req);
  try {
    const apiVersion = process.env.API_VERSION || "v2";
    const apiRes = await fetch(
      `${process.env.API_URL}/${apiVersion}/items/${encodeURIComponent(itemId)}?api_key=${process.env.API_KEY}`,
      { headers: { "DPLA-INTERNAL-ACCESS": process.env.DPLA_INTERNAL_ACCESS } }
    );
    if (!apiRes.ok) {
      console.error(`[Item] API request failed: ${apiRes.status} ${apiRes.statusText}`);
      if (apiRes.status === 404 || apiRes.status === 410) {
        return { notFound: true };
      }
      context.res.statusCode = apiRes.status === 429 || apiRes.status >= 500 ? 503 : 502;
      return { props: { url, item: null, errorState: true } };
    }
    const json = await apiRes.json();

    const doc = json.docs[0];
    if (!doc) {
      return { notFound: true };
    }
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
      url,
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
    const safeMsg = (error.message || String(error)).replace(/api_key=[^&\s]*/g, "api_key=[redacted]");
    console.error('[Item] Unexpected error:', safeMsg);
    context.res.statusCode = 503;
    return { props: { url, item: null, errorState: true } };
  }
};
export default ItemDetail;
