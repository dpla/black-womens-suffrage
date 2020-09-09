import React from "react"
import scss from "../StyledText/StyledText.module.scss"

const StyledText = ({ title, subtitle, text }) => {
  return (
    <>
      {title &&
        <p className={scss.title}>{title}</p>
      }
      <p className={scss.section__text_large}>{subtitle}</p>
      <p className={scss.section__text_small}>{text}</p>
    </>
  )
};

export default StyledText;