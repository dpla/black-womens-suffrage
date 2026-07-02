import React from "react";


import BWSHead from "components/BWSHead";
import MainLayout from "components/MainLayout";
import CiteButton from "components/shared/CiteButton";
import BreadcrumbsModule from "components/ItemComponents/BreadcrumbsModule";
import BreadcrumbJsonLd from "components/shared/BreadcrumbJsonLd";
import Content from "components/ItemComponents/Content";

import {
  getCurrentFullUrl,
  joinIfArray,
  getItemThumbnail,
} from "lib";
import { DPLA_ITEM_ID_REGEX } from "constants/items";

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
          { title: "All items", url: { pathname: "/search" } },
          { title: joinIfArray(item.title), search: "" },
        ]}
        route={url}
      />
      <BreadcrumbJsonLd
        breadcrumbs={[
          { title: "All items", url: "/search" },
          { title: joinIfArray(item.title) },
        ]}
      />

      <main
         id="main"
         role="main"
         className={`container ${css.contentWrapper}`}
       >
         <Content item={item} url={url} />
         <div className={css.faveAndCiteButtons}>
           <div className={css.metadataLinks}>
             <h2>Metadata</h2>
             <ul>
               <li><a href={`/item/${item.id}.raw`}>Original record</a></li>
               <li><a href={`/item/${item.id}.json`}>Enriched JSON-LD</a></li>
             </ul>
           </div>
         </div>
      </main>

    </MainLayout>
  );
};

export async function getServerSideProps(context) {
  const itemId = context.params.itemId;
  if (typeof itemId !== "string" || !DPLA_ITEM_ID_REGEX.test(itemId)) {
    return { notFound: true };
  }
  const url = getCurrentFullUrl(context.req);
  try {
    const apiVersion = process.env.API_VERSION || "v2";
    const apiRes = await fetch(
      `${process.env.API_URL}/${apiVersion}/items/${encodeURIComponent(itemId)}?api_key=${process.env.API_KEY}`,
      { headers: { "DPLA-INTERNAL-ACCESS": process.env.DPLA_INTERNAL_ACCESS } }
    );
    if (!apiRes.ok) {
      console.error(`[Item] API request failed: ${apiRes.status} ${apiRes.statusText}`);
      // Real upstream outage (rate-limited or server error): retryable 503 error page.
      if (apiRes.status === 429 || apiRes.status >= 500) {
        context.res.statusCode = 503;
        context.res.setHeader("Retry-After", "10");
        return { props: { url, item: null, errorState: true } };
      }
      // Client 4xx (404/410/400): item not available — 404 page, not 5xx (see #149).
      return { notFound: true };
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
          return lang?.name;
        })
      : doc.sourceResource.language) || "";
    const { originalRecord, ...strippedDoc } = doc;
    return { props : {
      url,
      item: Object.assign({}, doc.sourceResource, {
        id: doc.id,
        thumbnailUrl,
        contributor: doc.dataProvider?.name ?? "",
        intermediateProvider: doc.intermediateProvider ? doc.intermediateProvider : "",
        date: date ? date : "",
        language: language ? language : "",
        partner: doc.provider?.name ?? "",
        sourceUrl: doc.isShownAt,
        useDefaultImage: !doc.object,
        edmRights: doc.rights ? doc.rights : "",
        doc: strippedDoc,
        originalRecord
      })
    } };
  } catch (error) {
    const safeMsg = String(error?.message ?? error).replace(/api_key=[^&\s]*/g, "api_key=[redacted]");
    console.error('[Item] Unexpected error:', safeMsg);
    context.res.statusCode = 503;
    return { props: { url, item: null, errorState: true } };
  }
};
export default ItemDetail;
