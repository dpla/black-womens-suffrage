import React from "react"
import scss from "../HomePage/HomePage.module.scss"
import RoundButton from "../shared/RoundButton"

const HomePage = () => {
  return (
    <div id={scss.main}>

      <div id={scss.leftHeroDiv}>
        <section className={scss.container} id={scss.leftContainer}>
          <p className={scss.heroText}>Black women’s suffrage.</p>
          <p className={scss.heroText}>Thousands of artifacts.</p>
          <p className={scss.heroText}>Thousands of stories.</p>
          <RoundButton text="LEARN MORE" icon={"../static/images/icon/button-arrow.svg"} id={scss.heroButton}/>
        </section>
      </div>
      

      <section className={scss.container} id={scss.rightContainer}>

      </section>

    </div>
  )
};

export default HomePage;
