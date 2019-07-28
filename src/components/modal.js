import React, { Component } from "react"
import modalStyles from "./modal.module.css"

import Donation from "../components/donation"

class Modal extends Component {
  render() {
    return (
      <div
        className={
          modalStyles.container +
          " " +
          (this.props.active ? modalStyles.active : "")
        }
      >
        <Donation />
      </div>
    )
  }
}

export default Modal
