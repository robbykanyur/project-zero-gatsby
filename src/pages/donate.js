import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import { withPreview } from "gatsby-source-prismic-graphql"
import { linkResolver } from "../utils/linkResolver"

import donateStyles from "./donate.module.css"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Cta from "../components/cta"
import Footer from "../components/footer"
import Block from "../components/block"
import Donation from "../components/donation"

import heroPhoto from "../images/donation-hero.jpg"

const renderDonatePage = data => (
  <>
    <Helmet>
      <title>
        {data.prismic.allPage_donates.edges.slice(0, 1).pop().node.page_title}
      </title>
    </Helmet>
    <Layout>
      <>
        <Hero
          title={
            data.prismic.allPage_donates.edges.slice(0, 1).pop().node
              .header_text
          }
          photo={heroPhoto}
        ></Hero>
        <Block>
          <div className={donateStyles.lead + " is-1 is-centered-text"}>
            {RichText.render(
              data.prismic.allPage_donates.edges.slice(0, 1).pop().node
                .lead_paragraph,
              linkResolver
            )}
            <hr />
          </div>
          <Donation />
        </Block>
        <Cta
          noDonationForm={true}
          contentWidth="440px"
          linkOneText="Join the Team"
          linkOneHref="/serve"
          linkOneWidth="210px"
          linkTwoHref="/"
          displaySecondButton="none"
          textContent={
            data.prismic.allPage_donates.edges.slice(0, 1).pop().node.cta_text
          }
        />
        <Footer></Footer>
      </>
    </Layout>
  </>
)

export const DonatePage = () => {
  return (
    <>
      <StaticQuery
        query={query}
        render={withPreview(renderDonatePage, query)}
      />
    </>
  )
}

export default DonatePage

const query = graphql`
  {
    prismic {
      allPage_donates {
        edges {
          node {
            cta_text
            header_text
            lead_paragraph
            page_title
          }
        }
      }
    }
  }
`
