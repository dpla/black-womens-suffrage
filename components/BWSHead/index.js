import React from "react"
import Head from "next/head"

const defaultDescription = "The Digital Public Library of America brings together the riches of America’s libraries, archives, and museums, and makes them freely available to the world."

const defaultPageTitle = "Black Women's Suffrage"

class BWSHead extends React.Component {
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

        </Head>

      </div>
    )
  }
}

export default BWSHead;

