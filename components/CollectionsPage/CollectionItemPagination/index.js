import React from "react"
import scss from "./CollectionItemPagination.module.scss"
import { withRouter } from "next/router"

class CollectionItemPagination extends React.Component {
  handleClick = (event) => {
    const { value } = event.target

    if (value === 'next' && this.props.next !== null) {
      return this.props.router.push(`/collections/${this.props.collection}/${this.props.next}`)
    }

    if (value === 'prev' && this.props.prev !== null) {
      return this.props.router.push(`/collections/${this.props.collection}/${this.props.prev}`)
    }
  
  }

  render() {
    return (
      <div className={scss.buttons}>
        <button value="prev" onClick={this.handleClick} className={`${scss.iconButton} ${scss.button__prev}`}></button>
          {this.props.currentItemNumber} / {this.props.amountOfItems}
        <button value="next" onClick={this.handleClick} className={`${scss.iconButton} ${scss.button__next}`}></button>
      </div>
    )
  }

}

export default withRouter(CollectionItemPagination)