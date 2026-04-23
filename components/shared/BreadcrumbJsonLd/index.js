import React from "react";
import { SITE_URL } from "constants/site";

function resolveUrl(url) {
  if (!url) return null;
  if (typeof url === "string") return SITE_URL + url;
  if (url.pathname) return SITE_URL + url.pathname;
  return null;
}

function BreadcrumbJsonLd({ breadcrumbs }) {
  if (!Array.isArray(breadcrumbs) || breadcrumbs.length === 0) return null;

  const itemListElement = breadcrumbs.map((breadcrumb, index) => {
    const href = resolveUrl(breadcrumb.url);
    const entry = {
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.title,
    };
    if (href) entry.item = href;
    return entry;
  });

  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, "\\u003c") }}
    />
  );
}

export default BreadcrumbJsonLd;
