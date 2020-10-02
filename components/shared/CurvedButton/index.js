import React from "react"
import scss from "../CurvedButton/CurvedButton.module.scss"

const CurvedButton = ({text}) => {
  return (
    <button className={scss.curvedButton} data-cy="curved_button">{text}</button>
  )
};

export default CurvedButton;
