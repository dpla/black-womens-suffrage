import React from "react"
import MainLayout from "../../../components/MainLayout"
import fs from 'fs'
import path from 'path'

function IdaBWells({ items }) {
  // const items = JSON.parse(itemsString);

  return (
      <MainLayout className="main" role="main">
        <section>
          <ul>
            { Object.keys(items).map((key) => (
              <li>
                <p>{ items[key]["title"].join(": ") }</p>
              </li>
            )) }
          </ul>
        </section>
      </MainLayout>
  )
};

export async function getStaticProps() {
  const ibwDirectory = path.join(process.cwd(), 'constants');
  const filePath = path.join(ibwDirectory, 'ida-b-wells.js');
  const itemsString = fs.readFileSync(filePath, 'utf8');
  const items = JSON.parse(itemsString);

  return {
    props: {
      items: items
    }
  }
}


export default IdaBWells;
