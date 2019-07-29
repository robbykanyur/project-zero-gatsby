import React, { Component } from "react"
import ctaStyles from "./cta.module.css"
import { Link } from "gatsby"

import Modal from "./modal"

class Cta extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalActive: false,
    }
    this.toggleModal = this.toggleModal.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleKeyPress(e) {
    if (e.key === "Escape") {
      this.toggleModal(e)
    }
  }

  handleClick(e) {
    if (e.target === e.currentTarget) {
      this.toggleModal(e)
    }
  }

  toggleModal(e) {
    e.preventDefault()
    this.setState({
      modalActive: !this.state.modalActive,
    })
    this.forceUpdate()
  }

  render() {
    return (
      <>
        <div className={ctaStyles.container}>
          <div className={ctaStyles.left}></div>
          <div className={ctaStyles.right}>
            <div className={ctaStyles.contentWrapper}>
              <h2
                className={ctaStyles.header}
                style={{ width: this.props.contentWidth }}
              >
                {this.props.textContent}
              </h2>
              <div className={ctaStyles.buttons}>
                <Link
                  to={this.props.linkOneHref}
                  className={ctaStyles.button}
                  style={{ width: this.props.linkOneWidth }}
                  onClick={
                    this.props.toggleModal === true
                      ? e => this.toggleModal(e)
                      : ""
                  }
                >
                  {this.props.linkOneText}
                </Link>
                <Link
                  to={this.props.linkTwoHref}
                  className={ctaStyles.button}
                  style={{ display: this.props.displaySecondButton }}
                >
                  {this.props.linkTwoText}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Modal
          active={this.state.modalActive}
          handleKeyPress={this.handleKeyPress}
          toggleModal={this.toggleModal}
          handleClick={this.handleClick}
        />
      </>
    )
  }
}

export default Cta
