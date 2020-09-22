import React from "react"
import scss from "../LeftBorderTextBox/LeftBorderTextBox.module.scss"

// `text` should be enclosed in a <p></p> tag.
const LeftBorderTextBox = ({text}) => {
  return (
    <section className={scss.left_border_text_box__container}>
      {text}
    </section>
  )
}

export default LeftBorderTextBox