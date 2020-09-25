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
    const { value } = event.target
    value === 'next' ? this.props.router.push(`/collections/${this.props.collection}/${this.props.next}`) : this.props.router.push(`/collections/${this.props.collection}/${this.props.prev}`)
  }

  render() {
    return (
      <>
        <button value="prev" onClick={this.handleChange} className={scss.iconButton}>
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