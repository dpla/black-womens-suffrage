import React from "react"
import MainLayout from "components/MainLayout"
import KeyFiguresPage from "components/KeyFiguresPage"
import { keyFigures } from "constants/key-figures"
import Head from "next/head";


function KeyFigure({ figure }) {

  return (
      <MainLayout
        className="main"
        role="main"
      >
        <Head>
          <title>{figure.name} | DPLA</title>
        </Head>
        <KeyFiguresPage figure={ figure } />
      </MainLayout>
  )
};

export async function getStaticPaths() {

  const paths = Object.keys(keyFigures).map((key) => ({
    params: { figId: key },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {

  var figure = keyFigures[params.figId];
  figure["figId"] = params.figId;

  return {
    props: {
      figure: figure
    }
  }
}

export default KeyFigure
