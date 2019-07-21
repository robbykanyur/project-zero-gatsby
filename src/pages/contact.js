import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import contactStyles from "./contact.module.css"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Cta from "../components/cta"
import Footer from "../components/footer"
import Block from "../components/block"
import Button from "../components/button"

import heroPhoto from "../images/contact-hero.jpg"
import squares from "../images/contact-square.png"

const ContactPage = () => (
  <>
    <Helmet>
      <title>Contact - Project Zero</title>
    </Helmet>
    <Layout>
      <>
        <Hero title="Contact" photo={heroPhoto}></Hero>
        <Block>
          <div className={contactStyles.lead}>
            <p className="is-1 is-centered-text">
              Do you have questions about how you can help? Reach out to us. We
              would love to hear from you!
            </p>
          </div>
          <div className={contactStyles.captureForm}>
            <form className="formControl" id="teamCapture" name="teamCapture">
              <div className="control">
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="control">
                <input type="email" placeholder="Email Address" />
              </div>
              <div className="control">
                <textarea placeholder="Your Message"></textarea>
              </div>
              <div className="control">
                <Button type="submit" text="Send Message" width="195px" />
              </div>
            </form>
          </div>
        </Block>
        <Block containerPaddingTop="0" containerPaddingBottom="0">
          <div className={contactStyles.detailsContainer}>
            <div className={contactStyles.detailsWrapper}>
              <div className={contactStyles.detailsLeft}>
                <h3>Project Zero</h3>
                <p>
                  101 Colonnade St. #302
                  <br />
                  Lynchburg, VA 24502
                </p>
                <hr />
                <p>
                  contact@projectzerolyh.org
                  <br />
                  (555) 555-5555
                </p>
              </div>
              <div className={contactStyles.detailsRight}>
                <img src={squares} width="100%" alt="Buildings in Lynchburg" />
              </div>
            </div>
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

export default ContactPage
