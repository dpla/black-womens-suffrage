import React from "react"
import Head from "next/head"

class DPLAHead extends React.Component {
  render() {
    // const { defaultImageUrl } = "/static/dpla-icons/dpla-logo-square_250.png";
    const {
      seoType,
      pageTitle,
      pageDescription
    } = this.props;

    return (
      <div>
        <Head>
          <title>{ pageTitle }</title>
          <meta charSet="utf-8" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <meta name="referrer" content="origin-when-cross-origin" />

      </div>
    )
  }
}
