import React from "react"
import pageStyles from "./page.module.css"

const Page = ({ children }) => (
  <div className={pageStyles.container}>{children}</div>
)

export default Page
