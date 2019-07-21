import React from "react"
import blockStyles from "./block.module.css"

const Block = props => (
  <div
    className={blockStyles.container}
    style={{
      backgroundColor: props.backgroundColor,
      backgroundImage: "url(" + props.backgroundImage + ")",
      paddingBottom: props.containerPaddingBottom,
      marginBottom: props.containerMarginBottom,
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
