import React from "react"
import scss from "../Sources/Sources.module.scss"

const Sources = ({ sources }) => {
  return (
    <section className={scss.sources__container}>
      <div>
        <p>SOURCES</p>
        <ul>
          { sources.map((source) =>
            <li>
              <a href={ source.href }>{ source.description }</a>
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}

export default Sources
