import React from "react"
import Link from "next/link"
import scss from "./CollectionItemPagination.module.scss"
import { withRouter } from "next/router"

class CollectionItemPagination extends React.Component {
  constructor(props) {
    super()
  }

  componentDidMount() {

  }

  _onSelect = (option) => {
    const newColItem = figIds.find(key => keyFigures[key]["name"] === option.label);
    router.push("/collections/[colId]/[colItemId]", `/key-figures/${ newFig }`);
  }

  handleChange = (event) => {
    // console.log('hi')
    console.log(event.target.value)
    // event.target.value === 'next' ? console.log('true') : console.log('nope')
    // event.target.value === 'next' ?? this.props.router.push(`/collections/${this.props.next}`)
  }

  render() {
    return (
      <>
        <button value="prev" onClick={(e) => {this.handleChange(e)}} className={scss.iconButton}>
          <img src="/static/icon/carousel/corousel-arrow-left.png"/>
        </button>
        <button value="next" onClick={this.handleChange} className={scss.iconButton}>
          <img src="/static/icon/carousel/corousel-arrow-right.png"/>
        </button>
      </>
    )
  }

}

export default withRouter(CollectionItemPagination)