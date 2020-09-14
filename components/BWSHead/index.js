import React from "react"
import Head from "next/head"
import { useRouter } from 'next/router'

const BWSHead = (props) => {
  const router = useRouter()
  const {
    seoType,
    pageTitle,
    pageDescription,
    pageImage,
    pageImageCaption
  } = props;

  const defaultPageTitle = "Black Women's Suffrage | DPLA"

  const defaultDescription = "The Black Women’s Suffrage Digital Collection is a collaborative project to provide digital access to materials documenting the roles and experiences of Black Women in the Women’s Suffrage Movement and, more broadly, women’s rights, voting rights, and civic activism between the 1850s and 1960."

  const defaultImageUrl = "/static/logo/dpla_bws-logo-color-nav.png"

  const currentPath = router.route;
  const baseUrl = 'http://blackwomenssuffrage.dp.la';
  const currentUrl = `${baseUrl}${currentPath}`

  return (
    <div>
      <Head>

        <title>{pageTitle}</title>

        <meta charSet="utf-8" />
        <meta name='application-name' content="Black Women's Suffrage Collection" />
        <meta name="referrer" content="origin-when-cross-origin" />

        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content="Black Women's Suffrage Collection" />
        <meta name='description' content={pageDescription || defaultDescription} />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />

        <meta name='msapplication-TileColor' content='#4E4294' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#000000' />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />

        <link rel='apple-touch-icon' sizes='180x180' href='/static/favicons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/static/favicons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/static/favicons/favicon-16x16.png' />
        <link rel='manifest' href='/static/manifest.json' />
        <link rel='mask-icon' href='/static/favicons/safari-pinned-tab.svg' color='#5bbad5' />
        <link rel='shortcut icon' href='/static/favicons/favicon.ico' />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:url' content={currentUrl || baseUrl}/>
        <meta name='twitter:title' content="Black Women's Suffrage Collection" />
        <meta name='twitter:description' content={pageDescription || defaultDescription} />
        <meta name='twitter:image' content={pageImage || defaultImageUrl} />
        {pageImageCaption &&
          <meta name="twitter:image:alt" content={pageImageCaption} />}
        <meta name='twitter:creator' content='@dpla' />
        <meta name='twitter:site' content='@dpla' />
        <meta property='og:type' content={seoType || "website"} />
        <meta property='og:title' content={pageTitle || defaultPageTitle} />
        <meta property='og:description' content={pageDescription || defaultDescription} />
        <meta property='og:site_name' content={defaultPageTitle} />
        <meta property='og:url' content={currentUrl || baseUrl}/>
        <meta property='og:image' content={pageImage || defaultImageUrl} />

      </Head>

    </div>
  )
}

export default BWSHead;