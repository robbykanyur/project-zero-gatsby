import React from "react"
import Helmet from "react-helmet"

import openGraph from "../images/open-graph-v2.jpg"

import "./layout.css"
import "./fonts.css"

const Layout = ({ children }) => (
  <>
    <Helmet>
      />
      <meta name="og:type" content="website" />
      <meta name="og:title" content="Project Zero" />
      <meta property="og:image" content={openGraph} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Helmet>
    <div>{children}</div>
  </>
)

export default Layout
