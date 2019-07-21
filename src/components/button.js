import React from "react"
import buttonStyles from "./button.module.css"

const Button = props => (
  <div className={buttonStyles.container}>
    <div className={buttonStyles.wrapper} style={{ width: props.width }}>
      <a className={buttonStyles.button} href={props.link}>
        {props.text}
      </a>
    </div>
  </div>
)

export default Button
