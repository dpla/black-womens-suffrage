import React from "react"
import scss from "../IconButton/IconButton.module.scss"

const IconButton = ({ icon }) => {
  return (
    <>
      <button className={scss.iconButton}>
        <img src={icon}/>
      </button>
    </>
  )
};

export default IconButton;