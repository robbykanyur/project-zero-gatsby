import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import serveStyles from "./serve.module.css"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Cta from "../components/cta"
import Footer from "../components/footer"
import Block from "../components/block"
import Button from "../components/button"

import heroPhoto from "../images/serve-hero.jpg"

const ServePage = () => (
  <>
    <Helmet>
      <title>Donate Time - Project Zero</title>
    </Helmet>
    <Layout>
      <>
        <Hero title="Donate Time" photo={heroPhoto}></Hero>
        <Block>
          <div className={serveStyles.lead}>
            <p className="is-1 is-centered-text">
              Ready to help &ldquo;on the ground?&rdquo; Reach out and learn how
              you can go beyond a financial donation and care for your neighbors
              in person.
            </p>
          </div>
          <div className={serveStyles.captureForm}>
            <form className="formControl" id="teamCapture" name="teamCapture">
              <div className="control">
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="control">
                <input type="email" placeholder="Email Address" />
              </div>
              <div className="control">
                <Button type="submit" text="Count Me In" width="195px" />
              </div>
            </form>
          </div>
        </Block>
        <Cta
          linkOneText="Donate"
          linkOneHref="/donate"
          linkTwoText="Serve"
          linkOneHref="/serve"
        />
        <Footer></Footer>
      </>
    </Layout>
  </>
)

export default ServePage
