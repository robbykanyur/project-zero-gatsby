import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import indexStyles from "./index.module.css"

import Layout from "../components/layout"
import Header from "../components/header"
import Block from "../components/block"
import Button from "../components/button"
import Cta from "../components/cta"
import Footer from "../components/footer"

import hero from "../images/home-hero.jpg"
import zigzag from "../images/tex-zebra.png"
import polaroid from "../images/home-polaroid.png"
import squares from "../images/home-squares.png"
import paint from "../images/tex-wall.png"
import caleb from "../images/profile-caleb.jpg"

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
            <div className={indexStyles.hero}>
              <h1 className="is-1 is-centered">
                Project Zero works to ensure every resident of Lynchburg,
                Virginia has a roof over their head.
              </h1>
              <p className="is-centered is-subtitle">
                We believe that Lynchburg's 100+ homeless residents are family,
                and that a family cares for its own.
              </p>
              <div className="is-centered-text">
                <Button link="/donate" text="Get Involved" width="193px" />
              </div>
            </div>
          </div>
        </Block>
        <Block>
          <div className={indexStyles.everyPerson}>
            <h2 className="is-1 is-centered is-serif">
              Until every person has a home.
            </h2>
            <p className="is-centered is-subtitle">
              More than a hundred residents of Lynchburg, Virginia are without
              homes, sleeping on streets and under bridges. More than just
              residents, <strong>they are our neighbors.</strong>
            </p>
          </div>
        </Block>
        <Block
          backgroundColor="#f2f2f2"
          pattern={zigzag}
          tileOpacity="0.22"
          containerPaddingBottom="300px"
        >
          <div className={indexStyles.coordinated}>
            <h2 className="is-2 is-centered is-serif">
              Project Zero is a coordinated effort to deliver the resources of
              our community to those in need.
            </h2>
            <p className="is-centered is-subtitle">
              Through partnerships with churches and other non-profit
              organizations, we are striving to end homelessness in Lynchburg{" "}
              <strong>by the year 2020.</strong>
            </p>
            <div className={indexStyles.polaroid}>
              <div className={indexStyles.polaroidContainer}>
                <div className={indexStyles.polaroidWrapper}>
                  <img
                    src={polaroid}
                    width="100%"
                    alt="Homeless neighbors in Lynchburg"
                  />
                </div>
              </div>
            </div>
          </div>
        </Block>
        <Block>
          <div className={indexStyles.costContainer}>
            <div className={indexStyles.costWrapper}>
              <div className={indexStyles.costLeft}>
                <p>
                  It only costs{" "}
                  <span className={indexStyles.costHighlight}>
                    $550 per month
                    <br />
                  </span>{" "}
                  to provide{" "}
                  <span className={indexStyles.costHighlight}>
                    housing, clothing,
                    <br /> food,
                  </span>{" "}
                  and{" "}
                  <span className={indexStyles.costHighlight}>
                    healthcare
                  </span>{" "}
                  for a <br />
                  homeless neighbor.
                </p>
              </div>
              <div className={indexStyles.costRight}>
                <img
                  className={indexStyles.costSquares}
                  src={squares}
                  width="100%"
                  alt="Homeless neighbors sleeping on the streets of Lynchburg"
                />
                <div className={indexStyles.costLine}></div>
              </div>
            </div>
          </div>
        </Block>
        <Block
          backgroundColor="#3F4F63"
          pattern={paint}
          tileOpacity="0.5"
          containerPaddingBottom="0"
        >
          <div className={indexStyles.problem}>
            <h2>The Problem</h2>
            <div className={indexStyles.problemRow}>
              <div className={indexStyles.problemItem}>
                <h3 className={indexStyles.problemItemValue}>23.1%</h3>
                <p className={indexStyles.problemItemDescription}>
                  poverty rate*
                </p>
              </div>
              <div className={indexStyles.problemItem}>
                <h3 className={indexStyles.problemItemValue}>112</h3>
                <p className={indexStyles.problemItemDescription}>
                  homeless individuals
                </p>
              </div>
              <div className={indexStyles.problemItem}>
                <h3 className={indexStyles.problemItemValue}>~300</h3>
                <p className={indexStyles.problemItemDescription}>
                  religious organizations**
                </p>
              </div>
              <div className={indexStyles.problemItem}>
                <h3 className={indexStyles.problemItemValue}>$39,589</h3>
                <p className={indexStyles.problemItemDescription}>
                  median household income
                </p>
              </div>
            </div>
            <div className={indexStyles.problemFootnotes}>
              <p>*9.6% higher than the national average</p>
              <p>**In the city of Lynchburg and surrounding counties</p>
            </div>
          </div>
        </Block>
        <Block>
          <div className={indexStyles.quote}>
            <div className={indexStyles.quoteWrapper}>
              <div className={indexStyles.quotePhoto}>
                <img src={caleb} width="100%" alt="Caleb Fitzpatrick" />
              </div>
              <div className={indexStyles.quoteText}>
                <p>
                  &ldquo;Ending homelessness in this city is a much more
                  attainable goal than most people realize. With your help, we
                  can accomplish this.&rdquo;
                </p>
              </div>
              <div className={indexStyles.quoteAttrib}>
                <p>&ndash; Caleb Fitzpatrick, Director</p>
              </div>
            </div>
          </div>
        </Block>
        <Cta
          linkOneHref="/donate"
          linkTwoHref="/serve"
          linkOneText="Donate"
          linkTwoText="Serve"
        ></Cta>
        <Footer></Footer>
      </>
    </Layout>
  </>
)

export default IndexPage
