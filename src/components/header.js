import React, { Component } from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.css"
import { navigate } from "@reach/router"

class Header extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    navigate("/#about")
  }

  render() {
    return (
      <div
        className={headerStyles.container}
        style={{ background: this.props.backgroundColor }}
      >
        <div className={headerStyles.wrapper}>
          <div className={headerStyles.item}>
            <button
              className={headerStyles.link}
              onClick={this.handleClick}
              style={{
                color: this.props.linkColor,
                borderColor: this.props.linkColor,
              }}
            >
              About
            </button>
          </div>
          <div className={headerStyles.item}>
            <Link
              to="/our-team/"
              className={headerStyles.link}
              style={{
                color: this.props.linkColor,
                borderColor: this.props.linkColor,
              }}
            >
              Our Team
            </Link>
          </div>
          <div className={headerStyles.item}>
            <Link
              link="/"
              className={headerStyles.logo}
              style={{
                backgroundImage: this.props.logoSrc,
                borderColor: this.props.linkColor,
              }}
            >
              <img src={this.props.logoSrc} width="100%" alt="Project Zero" />
            </Link>
          </div>
          <div className={headerStyles.item}>
            <Link
              to="/contact/"
              className={headerStyles.link}
              style={{
                color: this.props.linkColor,
                borderColor: this.props.linkColor,
              }}
            >
              Contact
            </Link>
          </div>
          <div className={headerStyles.item}>
            <Link
              to="/donate/"
              className={headerStyles.link}
              style={{
                color: this.props.linkColor,
                borderColor: this.props.linkColor,
              }}
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
