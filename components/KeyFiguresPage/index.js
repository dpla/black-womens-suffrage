import React from "react"
import scss from "../KeyFiguresPage/KeyFiguresPage.module.scss"
import MobileDropdown from "../shared/MobileDropdown"
import SelectedKeyFigure from "./SelectedKeyFigure"

class KeyFiguresPage extends React.Component {
  constructor() {
    super()

    this.state = {
      selectedKeyFigure: "sojournerTruth",
      keyFigures: []
    }
  }

  render() {
    return (
      <>
        <div className={scss.banner}>
          <div className={scss.banner_left__div}>
            {/* <section className={scss.banner_left__section}> */}
            <h6>KEY FIGURES</h6>
            <p>Shining a light on Black women's activism</p>
            {/* </section> */}
          </div>
          <div className={scss.banner_right__div}>
            <div className={scss.banner_right__section}>
              <img src="/static/images/graphic/about-page/about-graphic-hero.png" />
            </div>
          </div>
        </div>
  
        {/* <MobileDropdown items={keyFigures}/> */}
  
        <div className="wrapper">
          <div className={scss.key_figures__left}>
            {/* fixed nav will go here */}
          </div>
  
          <div className={scss.key_figures__right}>
            <SelectedKeyFigure keyFigure={this.state.selectedKeyFigure}/>
          </div>
          
        </div>
      </>
    )
  }
}
  
export default KeyFiguresPage