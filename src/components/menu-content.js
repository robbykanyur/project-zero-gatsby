import React, { Component } from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import { withPreview } from "gatsby-source-prismic-graphql"
import menuStyles from "./menu.module.css"
import { navigate } from "@reach/router"
import MenuToggle from "./menu-toggle"

class MenuContent extends Component {
  render() {
    const menuIsActive = this.props.active ? menuStyles.active : ""
    const handleAboutClick = e => navigate("/#about")
    return (
      <>
        <div
          className={menuStyles.container + " " + menuIsActive}
          onClick={this.props.handleBackgroundClick}
        >
          <MenuToggle
            handleToggleClick={this.props.handleToggleClick}
            text={this.props.text}
          />
          <StaticQuery
            query={query}
            render={withPreview(
              data => (
                <>
                  <div className={menuStyles.links}>
                    <button
                      className={menuStyles.link + " " + menuStyles.linkButton}
                      onClick={handleAboutClick}
                    >
                      {
                        data.prismic.allComponent_headers.edges
                          .slice(0, 1)
                          .pop().node.about_link_text
                      }
                    </button>
                    <Link to="/our-team/" className={menuStyles.link}>
                      {
                        data.prismic.allComponent_headers.edges
                          .slice(0, 1)
                          .pop().node.team_link_text
                      }
                    </Link>
                    <Link to="/contact/" className={menuStyles.link}>
                      {
                        data.prismic.allComponent_headers.edges
                          .slice(0, 1)
                          .pop().node.contact_link_text
                      }
                    </Link>
                    <Link to="/donate/" className={menuStyles.link}>
                      {
                        data.prismic.allComponent_headers.edges
                          .slice(0, 1)
                          .pop().node.donate_link_text
                      }
                    </Link>
                  </div>
                </>
              ),
              query
            )}
          />
        </div>
      </>
    )
  }
}

export default MenuContent

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
