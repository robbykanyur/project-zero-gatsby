import React, { Component } from "react"
import modalStyles from "./modal.module.css"

import Donation from "../components/donation"

class Modal extends Component {
  render() {
    return (
      <div
        ref={elem => (this.listener = elem)}
        id="modalBG"
        className={
          modalStyles.container +
          " " +
          (this.props.active ? modalStyles.active : "")
        }
        tabIndex="1"
        onKeyDown={this.props.handleKeyPress}
        onClick={this.props.handleClick}
      >
        <Donation location="modal" toggleModal={this.props.toggleModal} />
      </div>
    )
  }
}

export default Modal
