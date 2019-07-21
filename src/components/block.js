import React from "react"
import blockStyles from "./block.module.css"

const Block = props => (
  <div
    className={blockStyles.container}
    style={{ backgroundImage: "url(" + props.backgroundImage + ")" }}
  >
    <div className={blockStyles.wrapper}>{props.children}</div>
  </div>
)

export default Block
