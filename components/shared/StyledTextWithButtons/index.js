import React from "react"
import scss from "../StyledTextWithButtons/StyledTextWithButtons.module.scss"
import RoundButton from "../RoundButton"

const StyledTextWithButtons = ({ title, subtitle, text, buttonText1, buttonIcon1, buttonText2, buttonIcon2 }) => {
  return (
    <>
      <section className={scss.container}>
        <h6 className={scss.title}>{title}</h6>
        <p className={scss.section__text_large}>{subtitle}</p>
        <p className={scss.section__text_small}>{text}</p>

        {buttonText1 && 
          <RoundButton text={buttonText1} icon={buttonIcon1} className={scss.section__button} />        
        }

        {buttonText2 && 
          <RoundButton text={buttonText2} icon={buttonIcon2} className={scss.section__button} />
        }
      </section>
    </>
  )
};

export default StyledTextWithButtons;