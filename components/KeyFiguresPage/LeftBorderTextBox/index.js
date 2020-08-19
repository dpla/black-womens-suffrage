import React from "react"
import scss from "../LeftBorderTextBox/LeftBorderTextBox.module.scss"

const LeftBorderTextBox = ({text}) => {
  return (
    <section className={scss.left_border_text_box__container}>
      <p>{text}</p>
    </section>
  )
}

export default LeftBorderTextBox