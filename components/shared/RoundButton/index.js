import React from "react"
import scss from "../RoundButton/RoundButton.module.scss"

const RoundButton = ({text, icon}) => {
  return (
    <button className={scss.roundButton}>
      {text}
      <img src={icon}/>
    </button>
  )
};

export default RoundButton;
