import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.css"

const Header = () => (
  <div className={headerStyles.container}>
    <div className={headerStyles.wrapper}>
      <div className={headerStyles.item}>
        <Link to="/about/" className={headerStyles.link}>
          About
        </Link>
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

export default Header
