import React from "react"
import scss from "../BorderedTextBox/BorderedTextBox.module.scss"

const BorderedTextBox = ({text}) => {
  return (
    <section className={scss.bordered_text_box__container}>
      <p>{text}</p>
    </section>
  )
}

export default BorderedTextBox