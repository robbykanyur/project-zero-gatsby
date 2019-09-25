import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import headerStyles from "./header.module.css"
import { navigate } from "@reach/router"
import { withPreview } from "gatsby-source-prismic-graphql"

const Header = props => {
  const handleClick = e => navigate("/#about")
  return (
    <StaticQuery
      query={query}
      render={withPreview(
        data => (
          <>
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
                    {
                      data.prismic.allComponent_headers.edges.slice(0, 1).pop()
                        .node.about_link_text
                    }
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
                    {
                      data.prismic.allComponent_headers.edges.slice(0, 1).pop()
                        .node.team_link_text
                    }
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
                    <img
                      src={props.logoSrc}
                      width="100%"
                      alt="Project Zero"
                      critical
                    />
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
                    {
                      data.prismic.allComponent_headers.edges.slice(0, 1).pop()
                        .node.contact_link_text
                    }
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
                    {
                      data.prismic.allComponent_headers.edges.slice(0, 1).pop()
                        .node.donate_link_text
                    }
                  </Link>
                </div>
              </div>
            </div>
          </>
        ),
        query
      )}
    />
  )
}

export default Header

const query = graphql`
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
`
