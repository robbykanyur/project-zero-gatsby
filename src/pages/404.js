import React from "react"
import { Helmet } from "react-helmet"

import thankYouStyles from "../pages/thank-you.module.css"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Footer from "../components/footer"
import Block from "../components/block"
import Button from "../components/button"

import heroPhoto from "../images/thank-you-hero.jpg"

const fourOhFourPage = () => (
  <>
    <Helmet>
      <title>404 - Project Zero</title>
    </Helmet>
    <Layout>
      <>
        <div id="preload">
          <img src={heroPhoto} width="100%" alt="preload" />
        </div>
        <Hero title="404" photo={heroPhoto}></Hero>
        <Block>
          <div className={thankYouStyles.lead}>
            <div className="is-1">
              <p className="is-centered">Sorry, that page couldn't be found.</p>
            </div>
            <Button width="167px" link="/" text="Home Page" />
          </div>
        </Block>
        <Footer></Footer>
      </>
    </Layout>
  </>
)

export default fourOhFourPage
