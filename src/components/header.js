import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import headerStyles from "./header.module.css"
import { navigate } from "@reach/router"

const Header = props => {
  const d = useStaticQuery(graphql`
    {
      prismic {
        allComponent_headers {
          edges {
            node {
              about_link_text
              contact_link_text
              donate_link_text
              team_link_text
            }
          }
        }
      }
    }
  `)
  const data = d.prismic.allComponent_headers.edges.slice(0, 1).pop().node
  if (!data) return null

  const handleClick = e => navigate("/#about")

  return (
    <div
      className={headerStyles.container}
      style={{ background: props.backgroundColor }}
    >
      <div className={headerStyles.wrapper}>
        <div className={headerStyles.item}>
          <button
            className={headerStyles.link}
            onClick={handleClick}
            style={{
              color: props.linkColor,
              borderColor: props.linkColor,
            }}
          >
            {data.about_link_text}
          </button>
        </div>
        <div className={headerStyles.item}>
          <Link
            to="/our-team/"
            className={headerStyles.link}
            style={{
              color: props.linkColor,
              borderColor: props.linkColor,
            }}
          >
            {data.team_link_text}
          </Link>
        </div>
        <div className={headerStyles.item}>
          <Link
            to="/"
            className={headerStyles.logo}
            style={{
              backgroundImage: props.logoSrc,
              borderColor: props.linkColor,
            }}
          >
            <img src={props.logoSrc} width="100%" alt="Project Zero" />
          </Link>
        </div>
        <div className={headerStyles.item}>
          <Link
            to="/contact/"
            className={headerStyles.link}
            style={{
              color: props.linkColor,
              borderColor: props.linkColor,
            }}
          >
            {data.contact_link_text}
          </Link>
        </div>
        <div className={headerStyles.item}>
          <Link
            to="/donate/"
            className={headerStyles.link}
            style={{
              color: props.linkColor,
              borderColor: props.linkColor,
            }}
          >
            {data.donate_link_text}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
