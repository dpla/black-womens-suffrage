import React from 'react'
import Link from 'next/link'

const SearchTag = ({label, tag}) => {
  return (
    <Link href={`/search?tags=${tag}`}><a>{label}</a></Link>
  )
}

export default SearchTag
