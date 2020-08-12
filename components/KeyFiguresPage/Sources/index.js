import React from "react"
import scss from "../Sources/Sources.module.scss"

const Sources = ({sources}) => {
  return (
    <section className={scss.sources__container}>
      <h6>Sources</h6>
      {/* <ul>
        {sources.map((source, index) => {
          <li>
            <a href={source.href}>{source.description}</a>
          </li>
        })} */}
      {/* </ul> */}
    </section>
  )
}

export default Sources