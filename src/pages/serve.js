import React from "react"
import { Helmet } from "react-helmet"
import MaskedInput from "react-text-mask"
import { navigate, graphql } from "gatsby"
import * as Constants from "../components/constants"
import { RichText } from "prismic-reactjs"

import serveStyles from "./serve.module.css"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Cta from "../components/cta"
import Footer from "../components/footer"
import Block from "../components/block"
import Button from "../components/button"

import heroPhoto from "../images/serve-hero.jpg"

class ServePage extends React.Component {
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
        sourceForm: "Serve",
        formName: this.state.inputName,
        formEmail: this.state.inputEmail,
        formPhone: this.state.inputPhone,
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
    const data = this.props.data.prismic.allServes.edges.slice(0, 1).pop().node
    return (
      <>
        <Helmet>
          <title>{data.page_title}</title>
        </Helmet>
        <Layout>
          <>
            <Hero title={data.page_header} photo={heroPhoto}></Hero>
            <Block>
              <div className={serveStyles.lead + " is-1"}>
                <p className="is-1 is-centered-text">
                  {RichText.render(data.lead_paragraph)}
                </p>
              </div>
              <div className={serveStyles.captureForm}>
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
                      text="Count Me In"
                      width="195px"
                      onClick={e => this.handleFormSubmit(e)}
                    />
                  </div>
                  <div className="captcha">
                    <input type="checkbox" /> Check this box if you are a human.
                  </div>
                </form>
              </div>
            </Block>
            <Cta
              contentWidth="400px"
              linkOneText="Donate"
              toggleModal={true}
              linkOneHref="/donate"
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

export default ServePage

export const query = graphql`
  {
    prismic {
      allServes {
        edges {
          node {
            lead_paragraph
            page_header
            page_title
            cta_text
          }
        }
      }
    }
  }
`
