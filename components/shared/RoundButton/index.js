import React from "react"
import scss from "../RoundButton/RoundButton.module.scss"
import Link from "next/link";

const RoundButton = ({text, icon, url}) => {
  return (
    <Link href={url}>
        <a className={scss.roundButton} data-cy="round_button">
            {text}
            <img src={icon} alt={""}/>
        </a>
    </Link>
  )
};

export default RoundButton;
