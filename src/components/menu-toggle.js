import React, { Component } from "react"
import menuStyles from "./menu.module.css"

import arrow from "../images/arrow.svg"

class MenuToggle extends Component {
  render() {
    return (
      <div className={menuStyles.toggle} onClick={this.props.handleToggleClick}>
        <div className={menuStyles.arrow}>
          <img src={arrow} width="16px" alt="" />
        </div>
        <div className={menuStyles.toggleText}>{this.props.text}</div>
        <div className={menuStyles.arrow}>
          <img src={arrow} width="16px" alt="" />
        </div>
      </div>
    )
  }
}

export default MenuToggle
