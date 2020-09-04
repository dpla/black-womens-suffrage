import React from "react"
import RoundButton from "shared/RoundButton"

const SearchPrompt = ({ figure }) => {
  const text = "Search the collection for " + figure.name;

  return (
    <RoundButton text={text} icon="/static/icon/button-arrow.svg" url={figure.search} />
  )
}

export default SearchPrompt

