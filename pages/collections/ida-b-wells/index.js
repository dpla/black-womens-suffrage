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
            { items.map((item) => (
              <li>
                <p>{ item.title }</p>
              </li>
            ))}
          </ul>
        </section>
      </MainLayout>
  )
};

export async function getStaticProps() {
  const ibwDirectory = path.join(process.cwd(), 'constants');
  const filePath = path.join(ibwDirectory, 'ida-b-wells.js');
  const itemsString = fs.readFileSync(filePath, 'utf8');
  const json = JSON.parse(itemsString);

  const items = Object.keys(json).map((key) => {
    const title = json[key]["title"].join(": ");

    return {
      title: title
    }
  });

  return {
    props: {
      items: items
    }
  }
}


export default IdaBWells;
