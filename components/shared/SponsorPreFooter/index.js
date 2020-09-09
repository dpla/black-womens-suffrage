import React from "react"
import RoundButton from "../RoundButton"
import scss from "../SponsorPreFooter/SponsorPreFooter.module.scss"

const SponsorPreFooter = ({text, sponsor, sponsorLink, buttonText, buttonIcon}) => {

  return (
    <section className={scss.pre_footer__section}>
      <div className={scss.pre_footer}>
        <div className={scss.pre_footer_container}>
          <div className={scss.pre_footer_pink}>
            <p>{text}<span><a href={sponsorLink} target={"_blank"}>{sponsor}</a></span></p>
          </div>
          <div className={scss.pre_footer_button}>
            <RoundButton text={buttonText} icon={buttonIcon} url="/search"/>
          </div>
        </div>
      </div>
   </section>
  )
}

export default SponsorPreFooter