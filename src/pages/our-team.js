import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import ourTeamStyles from "./our-team.module.css"

import Layout from "../components/layout"
import Page from "../components/page"
import Header from "../components/header"
import Cta from "../components/cta"
import Footer from "../components/footer"

const OurTeamPage = () => (
  <>
    <Helmet>
      <title>Our Team - Project Zero</title>
    </Helmet>
    <Layout>
      <>
        <Page>
          <Header></Header>
          <Footer></Footer>
        </Page>
      </>
    </Layout>
  </>
)

export default OurTeamPage
