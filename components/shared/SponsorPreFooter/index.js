import React from "react"
import RoundButton from "../RoundButton"
import scss from "../SponsorPreFooter/SponsorPreFooter.module.scss"

const SponsorPreFooter = ({text, sponsor, buttonText, buttonIcon}) => {
  return (
    <div className={scss.pre_footer}>
    <div className={scss.pre_footer_container}>
      <div className={scss.pre_footer_pink}>
        <p>{text}<span>{sponsor}</span></p>
      </div>
      <div className={scss.pre_footer_button}>
        <RoundButton text={buttonText} icon={buttonIcon} url={"/search"}/>
      </div>
    </div>
  </div>
  )
}

export default SponsorPreFooter