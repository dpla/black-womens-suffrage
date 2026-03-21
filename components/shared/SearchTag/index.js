import React from 'react'
import Link from 'next/link'

const SearchTag = ({label, tag}) => {
  return (
    <Link href={`/search?tags=${tag}`}>{label}</Link>
  )
}

export default SearchTag
