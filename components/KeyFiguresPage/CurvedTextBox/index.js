import React from "react"
import scss from "../CurvedTextBox/CurvedTextBox.module.scss"

// `text` should be enclosed in a <p></p> tag.
const CurvedTextBox = ({text}) => {
  return (
    <section className={scss.curved_text_box__container}>
      {text}
    </section>
  )
}

export default CurvedTextBox