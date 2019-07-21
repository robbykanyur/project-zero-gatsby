import React from "react"
import buttonStyles from "./button.module.css"

const Button = props => (
  <a className={buttonStyles.button} href={props.link}>
    {props.text}
  </a>
)

export default Button
