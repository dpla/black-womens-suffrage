import React from "react"
import scss from "../HomePage/HomePage.module.scss"
import CurvedButton from "../shared/CurvedButton"

const HomePage = () => {
  return (
    <div id={scss.main}>
      <div id={scss.container}>
        <p className={scss.heroText}>Black women’s suffrage.</p>
        <p className={scss.heroText}>Thousands of artifacts.</p>
        <p className={scss.heroText}>Thousands of stories.</p>
        <CurvedButton text="Learn More"/>
      </div>
    </div>
  )
};

export default HomePage;
