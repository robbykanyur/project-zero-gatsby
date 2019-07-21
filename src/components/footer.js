import React from "react"
import { Link } from "gatsby"
import footerStyles from "./footer.module.css"

const Footer = ({ children }) => (
  <div className={footerStyles.container}>
    <div className={footerStyles.wrapper}>
      <p className={footerStyles.paragraph}>
        101 Colonnade St. #302 // Lynchburg, VA 24502
      </p>
      <div className={footerStyles.linksWrapper}>
        <Link className={footerStyles.link} to="/about">
          About
        </Link>
        <Link className={footerStyles.link} to="/our-team">
          Our Team
        </Link>
        <Link className={footerStyles.link} to="/contact">
          Contact
        </Link>
        <Link className={footerStyles.link} to="/donate">
          Donate
        </Link>
      </div>
    </div>
  </div>
)

export default Footer
