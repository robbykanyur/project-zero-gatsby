import React, { Component } from "react"
import menuStyles from "./menu.module.css"
import MenuContent from "./menu-content"

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      text: "MENU",
    }
    this.handleToggleClick = this.handleToggleClick.bind(this)
    this.handleBackgroundClick = this.handleBackgroundClick.bind(this)
  }

  handleBackgroundClick = e => {
    if (this.state.active) {
      this.setState({
        active: false,
        text: "MENU",
      })
    }
  }

  handleToggleClick = e => {
    if (this.state.active) {
      this.setState({
        active: false,
        text: "MENU",
      })
    } else {
      this.setState({
        active: true,
        text: "CLOSE",
      })
    }
  }

  render() {
    return (
      <>
        <div className={menuStyles.container + " mobile-only-block"}>
          <MenuContent
            active={this.state.active}
            handleToggleClick={this.handleToggleClick}
            handleBackgroundClick={this.handleBackgroundClick}
            text={this.state.text}
          />
        </div>
      </>
    )
  }
}

export default Menu
