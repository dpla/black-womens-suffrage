import React from "react"
import Router from "next/router"
import MainLayout from "components/MainLayout"
import KeyFiguresPage from "components/KeyFiguresPage"
import { keyFigures } from "constants/key-figures"

function KeyFiguresIndex({ figure }) {

  // Redirect to the first key figure.
  React.useEffect(() => {
    Router.replace("/key-figures", `/key-figures/${ figure.figId }`)
  })

  return (
      <MainLayout
        className="main"
        role="main"
        pageTitle={ figure.name }
      >
        <KeyFiguresPage figure={ figure } />
      </MainLayout>
  )

};

export async function getStaticProps({ params }) {

  const figId = Object.keys(keyFigures)[0];
  var figure = keyFigures[figId];
  figure["figId"] = figId;

  return {
    props: {
      figure: figure
    }
  }
}

export default KeyFiguresIndex
