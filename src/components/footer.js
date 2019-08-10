import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import footerStyles from "./footer.module.css"
import { withPreview } from "gatsby-source-prismic-graphql"

const Footer = props => {
  return (
    <StaticQuery
      query={query}
      render={withPreview(
        data => (
          <>
            <div className={footerStyles.container}>
              <div className={footerStyles.wrapper}>
                <p className={footerStyles.paragraph}>
                  {
                    data.prismic.allComponent_footers.edges.slice(0, 1).pop()
                      .node.address_line_1
                  }{" "}
                  &#47;&#47;{" "}
                  {
                    data.prismic.allComponent_footers.edges.slice(0, 1).pop()
                      .node.address_line_2
                  }
                </p>
                <div className={footerStyles.linksWrapper}>
                  <Link className={footerStyles.link} to="/">
                    {
                      data.prismic.allComponent_headers.edges.slice(0, 1).pop()
                        .node.about_link_text
                    }
                  </Link>
                  <Link className={footerStyles.link} to="/our-team">
                    {
                      data.prismic.allComponent_headers.edges.slice(0, 1).pop()
                        .node.team_link_text
                    }
                  </Link>
                  <Link className={footerStyles.link} to="/contact">
                    {
                      data.prismic.allComponent_headers.edges.slice(0, 1).pop()
                        .node.contact_link_text
                    }
                  </Link>
                  <Link className={footerStyles.link} to="/donate">
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

export default Footer

export const query = graphql`
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
`
