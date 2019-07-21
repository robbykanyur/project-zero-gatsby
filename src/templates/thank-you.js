import React from "react"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"

import thankYouStyles from "./thank-you.module.css"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Cta from "../components/cta"
import Footer from "../components/footer"
import Block from "../components/block"
import Button from "../components/button"

import heroPhoto from "../images/thank-you-hero.jpg"

const thankYouPage = ({ data }) => {
  const content = data.markdownRemark
  return (
    <>
      <Helmet>
        <title>Thank You - Project Zero</title>
      </Helmet>
      <Layout>
        <>
          <Hero title="Thank You!" photo={heroPhoto}></Hero>
          <Block>
            <div className={thankYouStyles.lead}>
              <div dangerouslySetInnerHTML={{ __html: content.html }} />
              <Button width="162px" link="/" text="Home Page" />
            </div>
          </Block>
          <Footer></Footer>
        </>
      </Layout>
    </>
  )
}

export default thankYouPage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`
