import React from "react"
import scss from "./CollectionItemPagination.module.scss"
import { withRouter } from "next/router"

class CollectionItemPagination extends React.Component {
  handleChange = (event) => {
    const { value } = event.target
    value === 'next' ? this.props.router.push(`/collections/${this.props.collection}/${this.props.next}`) : this.props.router.push(`/collections/${this.props.collection}/${this.props.prev}`)
  }

  render() {
    return (
      <div className={scss.buttons}>
        <button value="prev" onClick={this.handleChange} className={`${scss.iconButton} ${scss.button__prev}`}>
          <img src="/static/dpla-icons/chevron-thick-black.svg"/>
        </button>
          {this.props.currentItemNumber} / {this.props.amountOfItems}
        <button value="next" onClick={this.handleChange} className={scss.iconButton}>
          <img src="/static/dpla-icons/chevron-thick-black.svg"/>
        </button>
      </div>
    )
  }

}

export default withRouter(CollectionItemPagination)