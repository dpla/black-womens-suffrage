import React from "react"
import scss from "../KeyFiguresPage/KeyFiguresPage.module.scss"
import MobileDropdown from "../shared/MobileDropdown"
import SelectedKeyFigure from "./SelectedKeyFigure"
import { keyFigures } from "../../constants/key-figures";

class KeyFiguresPage extends React.Component {
  constructor() {
    super()

    this.state = {
      selectedKeyFigure: "sojournerTruth"
    }
  }

  render() {
    return (
      <>
        <div className={scss.banner}>
          <div className={scss.banner_left__div}>
            <h6>KEY FIGURES</h6>
            <p>Shining a light on Black women's activism</p>
          </div>
          <div className={scss.banner_right__div}>
            <div className={scss.banner_right__section}>
              <img src="/static/images/graphic/about-page/about-graphic-hero.png" />
            </div>
          </div>
        </div>
  
        {/* <MobileDropdown items={keyFigures}/> */}
  
        <div className={`${scss.key_figures} wrapper`}>
          <div className={scss.key_figures__left}>
            <ul>
              {keyFigures.map((figure, index) => {
                return (
                  <li key={`key-figure-${index+1}`}>{figure}</li>                  
                )
              })}
            </ul>
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