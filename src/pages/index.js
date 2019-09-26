import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { RichText } from "prismic-reactjs"
import { withPreview } from "gatsby-source-prismic-graphql"
import { linkResolver } from "../utils/linkResolver"
import Img from "gatsby-image"

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
import logo from "../images/base-logo.png"

const renderIndexPage = data => {
  return (
    <>
      <Helmet>
        <title>
          {data.prismic.allPage_homes.edges.slice(0, 1).pop().node.page_title}
        </title>
      </Helmet>

      <Layout>
        <>
          <div id="preload">
            <Img fixed={data.heroImage.childImageSharp.fixed} />
          </div>
          <Header logoSrc={logo} />
          <Block backgroundImage={hero}>
            <div className="animated fadeInUp">
              <div className={indexStyles.hero}>
                <h1 className="is-1 is-centered">
                  {
                    data.prismic.allPage_homes.edges.slice(0, 1).pop().node
                      .lead_heading
                  }
                </h1>
                <div
                  className={indexStyles.wrapLead + " is-centered is-subtitle"}
                >
                  {RichText.render(
                    data.prismic.allPage_homes.edges.slice(0, 1).pop().node
                      .lead_paragraph,
                    linkResolver
                  )}
                </div>
                <div className="is-centered-text">
                  <Button
                    link="/donate"
                    text={
                      data.prismic.allPage_homes.edges.slice(0, 1).pop().node
                        .lead_button
                    }
                    width="193px"
                  />
                </div>
              </div>
            </div>
          </Block>
          <div id="about" name="about"></div>
          <Block>
            <div className={indexStyles.everyPerson}>
              <h2 className="is-1 is-centered is-serif">
                {
                  data.prismic.allPage_homes.edges.slice(0, 1).pop().node
                    .intro_heading
                }
              </h2>
              <div
                className={
                  indexStyles.wrapEveryPerson + " is-centered is-subtitle"
                }
              >
                {RichText.render(
                  data.prismic.allPage_homes.edges.slice(0, 1).pop().node
                    .intro_paragraph,
                  linkResolver
                )}
              </div>
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
                {
                  data.prismic.allPage_homes.edges.slice(0, 1).pop().node
                    .mission_heading
                }
              </h2>
              <div
                className={
                  indexStyles.wrapCoordinated + " is-centered is-subtitle"
                }
              >
                {RichText.render(
                  data.prismic.allPage_homes.edges.slice(0, 1).pop().node
                    .mission_paragraph,
                  linkResolver
                )}
              </div>
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
                      {
                        data.prismic.allPage_homes.edges.slice(0, 1).pop().node
                          .cost_per_month
                      }{" "}
                      per month
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
                  <h3 className={indexStyles.problemItemValue}>
                    {
                      data.prismic.allPage_homes.edges.slice(0, 1).pop().node
                        .problem_value_1
                    }
                  </h3>
                  <p className={indexStyles.problemItemDescription}>
                    {
                      data.prismic.allPage_homes.edges.slice(0, 1).pop().node
                        .problem_description_1
                    }
                  </p>
                </div>
                <div className={indexStyles.problemItem}>
                  <h3 className={indexStyles.problemItemValue}>
                    {
                      data.prismic.allPage_homes.edges.slice(0, 1).pop().node
                        .problem_value_2
                    }
                  </h3>
                  <p className={indexStyles.problemItemDescription}>
                    {
                      data.prismic.allPage_homes.edges.slice(0, 1).pop().node
                        .problem_description_2
                    }
                  </p>
                </div>
                <div className={indexStyles.problemItem}>
                  <h3 className={indexStyles.problemItemValue}>
                    {
                      data.prismic.allPage_homes.edges.slice(0, 1).pop().node
                        .problem_value_3
                    }
                  </h3>
                  <p className={indexStyles.problemItemDescription}>
                    {
                      data.prismic.allPage_homes.edges.slice(0, 1).pop().node
                        .problem_description_3
                    }
                  </p>
                </div>
                <div className={indexStyles.problemItem}>
                  <h3 className={indexStyles.problemItemValue}>
                    {
                      data.prismic.allPage_homes.edges.slice(0, 1).pop().node
                        .problem_value_4
                    }
                  </h3>
                  <p className={indexStyles.problemItemDescription}>
                    {
                      data.prismic.allPage_homes.edges.slice(0, 1).pop().node
                        .problem_description_4
                    }
                  </p>
                </div>
              </div>
              <div className={indexStyles.problemFootnotes}>
                {RichText.render(
                  data.prismic.allPage_homes.edges.slice(0, 1).pop().node
                    .problem_footnotes,
                  linkResolver
                )}
              </div>
            </div>
          </Block>
          <Block>
            <div className={indexStyles.quote}>
              <div className={indexStyles.quoteWrapper}>
                <div className={indexStyles.quotePhoto}>
                  <img
                    src={
                      data.prismic.allPage_homes.edges.slice(0, 1).pop().node
                        .quote_image.url
                    }
                    width="100%"
                    alt={
                      data.prismic.allPage_homes.edges.slice(0, 1).pop().node
                        .quote_image.alt
                    }
                  />
                </div>
                <div className={indexStyles.quoteText}>
                  <p>
                    {
                      data.prismic.allPage_homes.edges.slice(0, 1).pop().node
                        .quote_text
                    }
                  </p>
                </div>
                <div className={indexStyles.quoteAttrib}>
                  {
                    data.prismic.allPage_homes.edges.slice(0, 1).pop().node
                      .quote_attrib
                  }
                </div>
              </div>
            </div>
          </Block>
          <Cta
            linkOneText="Donate"
            linkOneHref="/donate"
            toggleModal={true}
            linkTwoText="Serve"
            linkTwoHref="/serve"
            textContent={
              data.prismic.allPage_homes.edges.slice(0, 1).pop().node.cta_text
            }
          />
        </>
        <Footer />
      </Layout>
    </>
  )
}

export const IndexPage = () => {
  return (
    <>
      <StaticQuery query={query} render={withPreview(renderIndexPage, query)} />
    </>
  )
}

export default IndexPage

const query = graphql`
  {
    prismic {
      allPage_homes {
        edges {
          node {
            cost_per_month
            cta_text
            intro_heading
            intro_paragraph
            lead_button
            lead_heading
            lead_paragraph
            mission_heading
            mission_paragraph
            page_title
            problem_description_1
            problem_description_2
            problem_description_3
            problem_description_4
            problem_footnotes
            problem_value_1
            problem_value_2
            problem_value_3
            problem_value_4
            quote_attrib
            quote_image
            quote_text
            _meta {
              type
            }
          }
        }
      }
    }
    heroImage: file(relativePath: { eq: "images/home-hero.jpg" }) {
      childImageSharp {
        fixed(width: 1200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
