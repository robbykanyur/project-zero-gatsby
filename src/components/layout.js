import React from "react"
import Helmet from "react-helmet"

import openGraph from "../images/open-graph.jpg"

import "./layout.css"
import "./fonts.css"

const Layout = ({ children }) => (
  <>
    <Helmet>
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content={openGraph} />
      <meta property="og:image" content={openGraph} />
    </Helmet>
    <div>{children}</div>
  </>
)

export default Layout
