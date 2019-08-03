import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import footerStyles from "./footer.module.css"

const Footer = props => {
  const d = useStaticQuery(graphql`
    {
      prismic {
        allComponent_footers {
          edges {
            node {
              address_line_1
              address_line_2
            }
          }
        }
      }
    }
  `)
  const data = d.prismic.allComponent_footers.edges.slice(0, 1).pop().node
  if (!data) return null

  return (
    <div className={footerStyles.container}>
      <div className={footerStyles.wrapper}>
        <p className={footerStyles.paragraph}>
          {data.address_line_1} &#47;&#47; {data.address_line_2}
        </p>
        <div className={footerStyles.linksWrapper}>
          <Link className={footerStyles.link} to="/">
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
}

export default Footer
