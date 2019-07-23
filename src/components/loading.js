import React from "react"
import loadingStyles from "./loading.module.css"

const Loading = () => (
  <div className={loadingStyles.loadingRing}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
)

export default Loading
