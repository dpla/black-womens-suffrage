import React from "react"
import scss from "../BorderedTextBox/BorderedTextBox.module.scss"

// `text` should be enclosed in a <p></p> tag.
const BorderedTextBox = ({text}) => {
  return (
    <section className={scss.bordered_text_box__container}>
      {text}
    </section>
  )
}

export default BorderedTextBox