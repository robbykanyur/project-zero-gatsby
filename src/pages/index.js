import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Header from "../components/header"
import Block from "../components/block"
import Button from "../components/button"

import hero from "../images/home-hero.jpg"
import zigzag from "../images/tex-zebra.png"
import polaroid from "../images/home-polaroid.png"

const IndexPage = () => (
  <>
    <Helmet>
      <title>Home - Project Zero</title>
    </Helmet>

    <Layout>
      <>
        <Header></Header>
        <Block backgroundImage={hero}>
          <div className="animated fadeInUp">
            <h1 className="is-1 is-centered" style={{ width: "837px" }}>
              Project Zero works to ensure every resident of Lynchburg, Virginia
              has a roof over their head.
            </h1>
            <p className="is-centered is-subtitle" style={{ width: "596px" }}>
              We believe that Lynchburg's 100+ homeless residents are family,
              and that a family cares for its own.
            </p>
            <div className="is-centered-text">
              <Button link="/donate" text="Get Involved" width="193px" />
            </div>
          </div>
        </Block>
        <Block>
          <h2 className="is-1 is-centered is-serif" style={{ width: "506px" }}>
            Until every person has a home.
          </h2>
          <p className="is-centered is-subtitle" style={{ width: "596px" }}>
            More than a hundred residents of Lynchburg, Virginia are without
            homes, sleeping on streets and under bridges. More than just
            residents, <strong>they are our neighbors.</strong>
          </p>
        </Block>
        <Block
          backgroundColor="#f2f2f2"
          pattern={zigzag}
          tileOpacity="0.22"
          containerPaddingBottom="300px"
        >
          <h2
            className="is-2 is-centered is-serif"
            style={{ width: "670px", backgroundSize: "auto" }}
          >
            Project Zero is a coordinated effort to deliver the resources of our
            community to those in need.
          </h2>
          <p className="is-centered is-subtitle" style={{ width: "596px" }}>
            Through partnerships with churches and other non-profit
            organizations, we are striving to end homelessness in Lynchburg{" "}
            <strong>by the year 2020.</strong>
          </p>
          <div
            class="polaroid-container"
            style={{
              width: "100%",
              height: "360px",
              top: "265px",
              position: "absolute",
            }}
          >
            <div
              class="polaroid-wrapper"
              style={{
                width: "842px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <img
                src={polaroid}
                width="100%"
                alt="Homeless neighbors in Lynchburg"
              />
            </div>
          </div>
        </Block>
      </>
    </Layout>
  </>
)

export default IndexPage
