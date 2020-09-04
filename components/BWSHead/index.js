import React from "react"
import Head from "next/head"

class BWSHead extends React.Component {
  render() {
    const {
      seoType,
      pageTitle,
      pageDescription,
      pageImage,
      pageImageCaption
    } = this.props;

    const defaultPageTitle = "Black Women's Suffrage | DPLA"

    const defaultDescription = "The Black Women’s Suffrage Digital Collection is a collaborative project to provide digital access to materials documenting the roles and experiences of Black Women in the Women’s Suffrage Movement and, more broadly, women’s rights, voting rights, and civic activism between the 1850s and 1960."

    const {defaultImageUrl} = "/static/logo/dpla_bws-logo-color-nav.png";

    return (
      <div>
        <Head>

          <title>{pageTitle}</title>

          <meta charSet="utf-8" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <meta name="referrer" content="origin-when-cross-origin" />
          <meta
            name="description"
            content={pageDescription || defaultDescription}
          />

          <meta name="og:site_name" content={defaultPageTitle} />
          <meta name="og:title" content={pageTitle || defaultPageTitle} />
          <meta name="og:type" content={seoType || "website"} />
          <meta name="og:image" content={pageImage || defaultImageUrl} />
          <meta
            name="og:description"
            content={pageDescription || defaultDescription}
          />
          
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@dpla" />
          <meta name="twitter:creator" content="@dpla" />
          <meta name="twitter:image" content={pageImage || defaultImageUrl} />
          {pageImageCaption &&
            <meta name="twitter:image:alt" content={pageImageCaption} />}

        </Head>

      </div>
    )
  }
}

export default BWSHead;

