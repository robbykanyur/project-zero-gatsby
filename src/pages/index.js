import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Header from "../components/header"
import Block from "../components/block"
import Button from "../components/button"

import hero from "../images/home-hero.jpg"

const IndexPage = () => (
  <>
    <Helmet>
      <title>Home - Project Zero</title>
    </Helmet>

    <Layout>
      <>
        <Header></Header>
        <Block backgroundImage={hero}>
          <h1 class="is-1 is-centered" style={{ width: "837px" }}>
            Project Zero works to ensure every resident of Lynchburg, Virginia
            has a roof over their head.
          </h1>
          <p class="is-centered is-subtitle" style={{ width: "596px" }}>
            We believe that Lynchburg's 100+ homeless residents are family, and
            that a family cares for its own.
          </p>
          <div class="is-centered-text">
            <Button link="/donate" text="Get Involved" />
          </div>
        </Block>
      </>
    </Layout>
  </>
)

export default IndexPage
