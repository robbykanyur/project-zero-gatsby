import React from "react"
import { useStaticQuery, Link } from "gatsby"

import './reset.css'
import './base.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      { children }
    </div>
  )
}

export default Layout
