import React from "react"
import buttonStyles from "./button.module.css"
import { Link } from "gatsby"

const Button = props => (
  <div className={buttonStyles.container}>
    <div className={buttonStyles.wrapper} style={{ width: props.width }}>
      <Link
        className={buttonStyles.button}
        to={props.link}
        onClick={props.onClick}
      >
        {props.text}
      </Link>
    </div>
  </div>
)

export default Button
