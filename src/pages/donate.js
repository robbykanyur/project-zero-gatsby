import React from "react"
import { Helmet } from "react-helmet"

import donateStyles from "./donate.module.css"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Cta from "../components/cta"
import Footer from "../components/footer"
import Block from "../components/block"
import Donation from "../components/donation"

import heroPhoto from "../images/donation-hero.jpg"

const DonatePage = () => (
  <>
    <Helmet>
      <title>Make a Donation - Project Zero</title>
    </Helmet>
    <Layout>
      <>
        <Hero title="Make a Donation" photo={heroPhoto}></Hero>
        <Block>
          <div className={donateStyles.lead + " is-1"}>
            <p className="is-1 is-centered-text">
              Per individual, the cost of obtaining housing, clothing, food, and
              healthcare is approximately $550 per month.
            </p>
            <p className="is-1 is-centered-text">
              As a community with a GDP of more than $8 billion per year,
              raising this amount for every homeless person in Lynchburg is{" "}
              <strong>realistic and achievable with your help.</strong>
            </p>
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
          textContent="You can also support Project Zero by donating your time."
        />
        <Footer></Footer>
      </>
    </Layout>
  </>
)

export default DonatePage
