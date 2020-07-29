import React from "react"
import scss from "../HomePage/HomePage.module.scss"
import RoundButton from "../shared/RoundButton"

const HomePage = () => {
  return (
    <>
    <div className={scss.hero}>
      <div className={scss.hero__left}>
        <section className={`${scss.container} ${scss.container__left}`}>
          <p className={scss.hero__text}>Black women’s suffrage.</p>
          <p className={scss.hero__text}>Thousands of artifacts.</p>
          <p className={scss.hero__text}>Thousands of stories.</p>
          <RoundButton text="LEARN MORE" icon={"../static/images/icon/button-arrow.svg"} className={scss.hero__button}/>
        </section>
      </div>
      <div className={scss.hero__right}>
        <div className={`${scss.container} ${scss.container__right}`}></div>
      </div>   
    </div>

    <div className={scss.collection}>
      <div className={scss.collection__left}>
        <h6>BLACK WOMEN’S SUFFRAGE PORTAL</h6>
        <p className={scss.collection__text_large}>The Black Women’s Suffrage Digital Collection is a collaborative project to provide digital access to materials documenting the roles and experiences of Black Women in the Women’s Suffrage Movement and, more broadly, women’s rights, voting rights,
        and civic activism between the 1850s and 1960.</p>
        <p className={scss.collection__text_small}>The materials in this collection include photographs, correspondence, speeches, event programs, publications, oral histories, and other artifacts.</p>
        <RoundButton text="SEARCH THE COLLECTION" icon={"../static/images/icon/button-arrow.svg"} className={scss.collection__button}/>
      </div>

      <div className={scss.collection__right}>
        <div className={scss.collection__img}></div>
      </div>     
    </div>

    
    </>
  )
};

export default HomePage;