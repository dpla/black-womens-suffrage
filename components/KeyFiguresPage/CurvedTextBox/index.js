import React from "react"
import scss from "../CurvedTextBox/CurvedTextBox.module.scss"

const CurvedTextBox = ({text}) => {
  return (
    <section className={scss.curved_text_box__container}>
      <p>{text}</p>
    </section>
  )
}

export default CurvedTextBox