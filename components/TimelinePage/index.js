import React from "react";
import scss from "components/TimelinePage/TimelinePage.module.scss"
import PageBanner from "components/shared/PageBanner"
import TimelineTile from "components/TimelinePage/TimelineTile"
import Dropdown from 'react-dropdown';
import { timelineData } from "constants/timeline"

class TimelinePage extends React.Component {
  constructor() {
    super()

    this.state = {
      selected: timelineData[0].title,
      yearData: timelineData[0].data,
      prevYear: null,
      nextYear: timelineData[1].title,
      dropdownOptions: ["1820-1859", "1860-1869", "1870-1889", "1890-1899", "1900-1909", "1910-1919", "1920-1929", "1930-1959", "1960-present"]
    }
  }

  _onSelect = (option) => {
    const results = this.searchTimelineData(option.label, timelineData)

    this.setState({ 
      selected: option.label, 
      yearData: results.data
    })
    this.setTimelineNavYears(option.label)
  }

  searchTimelineData = (title, timelineDataArray) => {
    for (var i = 0; i < timelineDataArray.length; i++) {
      if (timelineDataArray[i].title === title) {
        return timelineDataArray[i];
      }
    }
  }

  setTimelineNavYears = (title) => {
    const options = this.state.dropdownOptions;

    for (var i = 0; i < options.length; i++) {
        if (options[i] === title) {
          if (i === 0) {
            this.setState({
              prevYear: null,
              nextYear: options[i + 1]
            })
          } else if (i === options.length - 1) {
            this.setState({
              prevYear: options[i - 1],
              nextYear: null
            })
          } else {
            this.setState({
              prevYear: options[i - 1],
              nextYear: options[i + 1]
            })
          } 
          

        }
    }
  }

  render() {
    const title = "TIMELINE",
      text = "Celebrating Black women and the vote.",
      graphic = "static/graphic/timeline-page/timeline-graphic-hero.png",
      initialYear = "1820-1859";

    return (
      <>
        <PageBanner title={title} text={text} graphic={graphic} />

        <section className={`section__default ${scss.timeline}`}>
          <Dropdown options={this.state.dropdownOptions} onChange={this._onSelect} value={initialYear} />

          {this.state.yearData.map((tile, index) => {
            return (
              <TimelineTile key={index} year={tile.year} text={tile.text} />
            )
          })
          }

          <section className={scss.pagination__container}>
            {this.state.prevYear &&
              <div className={scss.pagination__prev}>
                <div>
                  <h5>PREVIOUS</h5>
                  <img src="/static/assets/icon/button-arrow.svg" />
                </div>
                <h4>{this.state.prevYear}</h4>
              </div>
            }

            {this.state.nextYear &&
              <div className={scss.pagination__next}>
                <div>
                  <h5>NEXT</h5>
                  <img src="/static/icon/button-arrow.svg" />
                </div>
                <h4>{this.state.nextYear}</h4>
              </div>
            }
          </section>
        </section>
      </>
    )
  }
}

export default TimelinePage;
