import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import thankYouStyles from "../pages/thank-you.module.css"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Footer from "../components/footer"
import Block from "../components/block"
import Button from "../components/button"

const fourOhFourPage = data => {
  return (
    <>
      <Helmet>
        <title>404 - Project Zero</title>
      </Helmet>
      <Layout>
        <>
          <Hero
            title="404"
            photo={data.data.heroImage.childImageSharp.fixed}
          ></Hero>
          <Block>
            <div className={thankYouStyles.lead}>
              <div className="thankYou is-1">
                <p className="is-centered">
                  Sorry, that page couldn't be found.
                </p>
              </div>
              <Button width="167px" link="/" text="Home Page" />
            </div>
          </Block>
          <Footer></Footer>
        </>
      </Layout>
    </>
  )
}

export default fourOhFourPage

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "images/four-hero.jpg" }) {
      childImageSharp {
        fixed(width: 1200, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
