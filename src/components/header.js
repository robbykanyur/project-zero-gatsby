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
      <div className={headerStyles.container}>
        <div className={headerStyles.wrapper}>
          <div className={headerStyles.item}>
            <button className={headerStyles.link} onClick={this.handleClick}>
              About
            </button>
          </div>
          <div className={headerStyles.item}>
            <Link to="/our-team/" className={headerStyles.link}>
              Our Team
            </Link>
          </div>
          <div className={headerStyles.item}>
            <a href="/" className={headerStyles.logo}>
              Project Zero
            </a>
          </div>
          <div className={headerStyles.item}>
            <Link to="/contact/" className={headerStyles.link}>
              Contact
            </Link>
          </div>
          <div className={headerStyles.item}>
            <Link to="/donate/" className={headerStyles.link}>
              Donate
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
