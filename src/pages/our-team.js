import React from "react"
import { Helmet } from "react-helmet"
import MaskedInput from "react-text-mask"
import { navigate, graphql } from "gatsby"
import * as Constants from "../components/constants"
import { RichText } from "prismic-reactjs"

import teamStyles from "./our-team.module.css"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Cta from "../components/cta"
import Footer from "../components/footer"
import Block from "../components/block"
import Button from "../components/button"

class OurTeamPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputName: null,
      inputEmail: null,
      inputPhone: null,
      captcha: null,
      errors: [],
    }
  }

  handleNameChange(e) {
    this.setState({
      inputName: e.target.value,
    })
  }

  handleEmailChange(e) {
    this.setState({
      inputEmail: e.target.value,
    })
  }

  handlePhoneChange(e) {
    this.setState({
      inputPhone: e.target.value,
    })
  }

  handleCaptchaChange(e) {
    this.setState({
      captcha: e.target.value,
    })
  }

  handleFormResponse(response, body) {
    if (response.ok) {
      navigate("/thank-you-contact")
    } else {
      this.setState({ errors: body.errors })
    }
  }

  async handleFormSubmit(e) {
    await e.preventDefault()
    let response = await fetch(Constants.API + "form", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sourceForm: "Team",
        formName: this.state.inputName,
        formEmail: this.state.inputEmail,
        formPhone: this.state.inputPhone,
        formMessage: this.state.inputMessage,
        formCaptcha: this.state.captcha,
      }),
    })
    let body = await response.json()
    this.handleFormResponse(response, body)
  }

  render() {
    const mask = [
      "(",
      /\d/,
      /\d/,
      /\d/,
      ")",
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ]
    const formErrors = this.state.errors.map((error, key) => (
      <li key={error.id}>{error.message}</li>
    ))
    const query = this.props.data
    const data = this.props.data.prismic.allPage_teams.edges.slice(0, 1).pop()
      .node
    return (
      <>
        <Helmet>
          <title>{data.page_title}</title>
        </Helmet>
        <Layout>
          <>
            <Hero
              title={data.hero_text}
              photo={query.heroImage.childImageSharp.fixed}
            ></Hero>
            <Block>
              <div className={teamStyles.lead}>
                <div className="is-1 pageContent">
                  {RichText.render(data.lead_paragraph)}
                </div>
              </div>
            </Block>
            <Block
              containerPaddingTop="0"
              containerPaddingBottom="0"
              customClassName="teamBios"
              mobileFullWidth="true"
            >
              <div className={teamStyles.biosContainer}>
                <div className={teamStyles.biosWrapper}>
                  {data.body[0].fields.map(function(bio, index) {
                    return (
                      <div className={teamStyles.bioItem}>
                        <div className={teamStyles.bioPhoto}>
                          <img
                            src={bio.person_photo.url}
                            alt={bio.person_photo.alt}
                            width="100%"
                          />
                        </div>
                        <div className={teamStyles.bioName}>
                          {bio.person_name}
                        </div>
                        <div className={teamStyles.bioPosition}>
                          {bio.person_title}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Block>
            <Block>
              <div className={teamStyles.captureContainer}>
                <div className={teamStyles.captureWrapper}>
                  <h2 className="is-serif is-1 is-centered">
                    {data.form_header}
                  </h2>
                  <p className="is-2 is-centered pageContent">
                    {RichText.render(data.form_paragraph)}
                  </p>
                  <div className={teamStyles.captureForm}>
                    <form
                      className="formControl"
                      id="teamCapture"
                      name="teamCapture"
                    >
                      <div className="control">
                        <input
                          type="text"
                          placeholder="Your Name"
                          onChange={e => this.handleNameChange(e)}
                        />
                      </div>
                      <div className="control">
                        <input
                          type="email"
                          placeholder="Email Address"
                          onChange={e => this.handleEmailChange(e)}
                        />
                      </div>
                      <div className="control">
                        <MaskedInput
                          type="phone"
                          placeholder="Phone Number"
                          mask={mask}
                          placeholderChar="&nbsp;"
                          onChange={e => this.handlePhoneChange(e)}
                        />
                      </div>
                      <div className="captcha">
                        <input
                          type="checkbox"
                          onChange={e => this.handleCaptchaChange(e)}
                        />{" "}
                        Check this box if you are a human.
                      </div>
                      <div className="formErrors">{formErrors}</div>
                      <div className="control">
                        <Button
                          link="/thank-you-serve"
                          text="Yes, I'm In"
                          width="155px"
                          onClick={e => this.handleFormSubmit(e)}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Block>
            <Cta
              linkOneText="Donate"
              linkOneHref="/donate"
              toggleModal={true}
              displaySecondButton="none"
              textContent={data.cta_text}
            />
            <Footer></Footer>
          </>
        </Layout>
      </>
    )
  }
}

export default OurTeamPage

export const query = graphql`
  {
    prismic {
      allPage_teams {
        edges {
          node {
            page_title
            lead_paragraph
            hero_text
            form_paragraph
            form_header
            cta_text
            body {
              ... on PRISMIC_Page_teamBodyTeam_member {
                type
                label
                fields {
                  person_name
                  person_photo
                  person_title
                }
              }
            }
          }
        }
      }
    }
    heroImage: file(relativePath: { eq: "images/team-hero.jpg" }) {
      childImageSharp {
        fixed(width: 1200, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
