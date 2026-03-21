import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link from 'next/link'
import React from 'react'

const ActiveLink = ({ children, activeClassName, href, className = '', ...props }) => {
  const { pathname } = useRouter()

  const isActive = pathname.split("/")[1] === href.split("/")[1]
  const combinedClassName = isActive
    ? `${className} ${activeClassName}`.trim()
    : className || null

  return (
    <Link href={href} className={combinedClassName} {...props}>
      {children}
    </Link>
  )
}

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
}

export default ActiveLink
