import React from "react"
import buttonStyles from "./button.module.css"

const Button = props => (
  <div className={buttonStyles.container}>
    <div className={buttonStyles.wrapper} style={{ width: props.width }}>
      <button
        type={props.type}
        className={buttonStyles.button}
        href={props.link}
      >
        {props.text}
      </button>
    </div>
  </div>
)

export default Button
