import React from 'react'
import Link from 'gatsby-link'

const Footer = ({ siteTitle }) => (
  <footer>
   <div className="footer-container">
      <div className="footer-title">
        <p>
          <Link to="/">
            {siteTitle}
          </Link>
        </p>
      </div>
      <div className="social-media-links">
        <ul>
          <li><Link to="/">Facebook</Link></li>
          <li><Link to="/">LinkedIn</Link></li>
          <li><Link to="/">Instagram</Link></li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
