import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <header>
   <div className="header-container">
      <h1 className="header-title">
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
