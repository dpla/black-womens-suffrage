import React from "react"
import scss from "../RoundButton/RoundButton.module.scss"
import Link from "next/link";

const RoundButton = ({text, icon, url}) => {
  return (
    <Link href={url} className={scss.roundButton} data-cy="round_button">
        {text}
        <img src={icon} alt={""}/>
    </Link>
  )
};

export default RoundButton;
