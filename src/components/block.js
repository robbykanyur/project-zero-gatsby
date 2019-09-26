import React from "react"
import blockStyles from "./block.module.css"

const Block = props => (
  <div
    className={blockStyles.container + " " + props.customClassName}
    style={{
      backgroundColor: props.backgroundColor,
      paddingTop: props.containerPaddingTop,
      paddingBottom: props.containerPaddingBottom,
      marginBottom: props.containerMarginBottom,
      overflow: props.containerOverflow,
    }}
  >
    <div className={blockStyles.wrapper}>{props.children}</div>
    <div
      className={blockStyles.tile}
      style={{
        backgroundColor: props.backgroundColor,
        backgroundImage: "url(" + props.pattern + ")",
        opacity: props.tileOpacity,
      }}
    ></div>
  </div>
)

export default Block
