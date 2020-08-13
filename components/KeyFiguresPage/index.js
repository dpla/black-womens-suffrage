import React from "react"
import scss from "../KeyFiguresPage/KeyFiguresPage.module.scss"
import MobileDropdown from "../shared/MobileDropdown"
import SelectedKeyFigure from "./SelectedKeyFigure"
import { keyFigures } from "../../constants/key-figures";

class KeyFiguresPage extends React.Component {
  constructor() {
    super()

    this.state = {
      selectedKeyFigure: "truth",
      activeLink: 1
    }
  }

  handleClick = (event) => {
      // console.log(event.currentTarget.getAttribute('value'))
      this.setState({
        selectedKeyFigure: event.currentTarget.getAttribute('value'),
        activeLink: parseInt(event.currentTarget.getAttribute('id'))
      })
  }

  render() {
    return (
      <>
        <section className={scss.banner}>
          <div className={scss.banner_left__div}>
            <h6>KEY FIGURES</h6>
            <p>Shining a light on Black women's activism</p>
          </div>
          <div className={scss.banner_right__div}>
            <div className={scss.banner_right__section}>
              <img src="/static/images/graphic/about-page/about-graphic-hero.png" />
            </div>
          </div>
        </section>
  
        {/* <MobileDropdown items={keyFigures}/> */}
  
        <section className={`${scss.key_figures} wrapper`}>
          <div className={scss.key_figures__left}>
            <ul>
              {keyFigures.map((figure, index) => {
                return (
                  <li 
                  key={`key-figure-${index+1}`} 
                  id={index}
                  onClick={this.handleClick} 
                  value={figure.value} 
                  className={
                    (index === this.state.activeLink ? scss.key_figures__active_item : scss.key_figures__li)
                  }>{figure.name}</li>                  
                )
              })}
            </ul>
          </div>
  
          <div className={scss.key_figures__right}>
            <SelectedKeyFigure keyFigure={this.state.selectedKeyFigure}/>
          </div> 
        </section>
      </>
    )
  }
}
  
export default KeyFiguresPage