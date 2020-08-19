import React from "react"
import scss from "../KeyFiguresPage/KeyFiguresPage.module.scss"
import SelectedKeyFigure from "./SelectedKeyFigure"
import { keyFigures } from "constants/key-figures"
import PageBanner from "shared/PageBanner"

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
        <PageBanner title="KEY FIGURES" text="Shining a light on Black women's activism" graphic="/static/graphic/about-page/about-graphic-hero.png"/>
  
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