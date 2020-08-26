import React from "react"
import Router from "next/router"
import MainLayout from "components/MainLayout"
import KeyFiguresPage from "components/KeyFiguresPage"
import { keyFigures } from "constants/key-figures"

function KeyFiguresIndex({ figId }) {

  // Redirect to the first key figure.
  React.useEffect(() => {
    Router.push("/key-figures/[figId]", `/key-figures/${ figId }`)
  });
  return null;

};

export async function getStaticProps({ params }) {

  const figId = Object.keys(keyFigures)[0];

  return {
    props: {
      figId: figId
    }
  }
}

export default KeyFiguresIndex
