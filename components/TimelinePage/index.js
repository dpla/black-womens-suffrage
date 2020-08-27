import React from "react"
import scss from "components/TimelinePage/TimelinePage.module.scss"
import PageBanner from "components/shared/PageBanner"
import Dropdown from 'react-dropdown'
import Year1820to1859 from "./Year1820to1859"
import Year1860to1869 from "./Year1860to1869"
import dynamic from "next/dynamic"

class TimelinePage extends React.Component {
  constructor() {
    super()

    this.state = {
      selected: "1820-1859",
      prevYear: null,
      nextYear: "1860-1869",
      dropdownOptions: ["1820-1859", "1860-1869", "1870-1889", "1890-1899", "1900-1909", "1910-1919", "1920-1929", "1930-1959", "1960-present", "Sources"],
      activeLink: 0
    }
  }

  getNewNext = (active) => {
    return this.state.dropdownOptions[active + 1] === undefined ? null :
      this.state.dropdownOptions[active + 1];
  }

  getNewPrev = (active) => {
    return this.state.dropdownOptions[active - 1] === undefined ? null :
      this.state.dropdownOptions[active - 1];
  }

  _onSelect = (option) => {
    const newSelected = option.label;
    const newActiveLink = this.state.dropdownOptions.indexOf(newSelected);
    const newNext = this.getNewNext(newActiveLink);
    const newPrev = this.getNewPrev(newActiveLink);

    this.setState({
      selected: newSelected,
      activeLink: newActiveLink,
      nextYear: newNext,
      prevYear: newPrev
    })
  }

  handleClick = (event) => {
    const newSelected = event.currentTarget.getAttribute('value');
    const newActiveLink = parseInt(event.currentTarget.getAttribute('id'));
    const newNext = this.getNewNext(newActiveLink);
    const newPrev = this.getNewPrev(newActiveLink);

    this.setState({
      selected: newSelected,
      activeLink: newActiveLink,
      nextYear: newNext,
      prevYear: newPrev
    })
    
    if(typeof window !== 'undefined') window.scrollTo(0, 0)
}

  render() {
    const title = "TIMELINE",
      text = "Celebrating Black women and the vote.",
      graphic = "static/graphic/timeline-page/timeline-graphic-hero.png",
      initialYear = "1820-1859";

    const templateName = this.state.selected == "Sources" ? "TimelineSources" :
      "Year" + this.state.selected.replace("-", "to")

    const DynamicComponent = dynamic(import(`./${ templateName }`))

    return (
      <>
        <PageBanner title={title} text={text} graphic={graphic} />

        <section className={`section__default ${scss.timeline}`}>
          <Dropdown options={this.state.dropdownOptions} onChange={this._onSelect} value={this.state.selected} className={scss.timeline__dropdown}/>

          <div className={scss.timeline__left}>
            <ul>
              {this.state.dropdownOptions.map((years, index) => {
                return (
                  <li 
                  key={`timeline-years-${index+1}`} 
                  id={index}
                  onClick={this.handleClick} 
                  value={years} 
                  className={
                    (index === this.state.activeLink ? scss.timeline__active_item : scss.timeline__li)
                  }>{years}</li>                  
                )
              })}
            </ul>
          </div>
          <div className={scss.timeline__right}>
            {<DynamicComponent />}

            <section className={scss.pagination__container}>
            {this.state.prevYear &&
              <div 
              className={scss.pagination__prev}
              value={this.state.prevYear}
              id={this.state.activeLink-1}
              onClick={this.handleClick}>
                <div>
                  <h5>PREVIOUS</h5>
                  <img src="/static/icon/button-arrow.svg" />
                </div>
                <h4>{this.state.prevYear}</h4>
              </div>
            }

            {this.state.nextYear &&
              <div
              className={scss.pagination__next}
              value={this.state.nextYear}
              id={this.state.activeLink+1}
              onClick={this.handleClick}>
                <div>
                  <h5>NEXT</h5>
                  <img src="/static/icon/button-arrow.svg" />
                </div>
                <h4>{this.state.nextYear}</h4>
              </div>
            }
          </section>
          </div>     
        </section>
      </>
    )
  }
}

export default TimelinePage;
