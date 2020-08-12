import React from "react"
import Link from "next/link"
import scss from "../MobileDropdown/MobileDropdown.module.scss"

const MobileDropdown = ({items}) => {
  return (
    <select>
      {/* <option value="test">test</option> */}
      {items.map((item, index) => {
      <option value="test">test</option>

        // <option value={item.value} key={`dropdown-item-${index + 1}`}>{item.name}</option>
      })}
    </select>
  )
}

export default MobileDropdown