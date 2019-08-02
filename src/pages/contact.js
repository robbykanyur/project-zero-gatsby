import React, { Component } from "react"
import { Helmet } from "react-helmet"
import MaskedInput from "react-text-mask"
import { navigate } from "gatsby"
import * as Constants from "../components/constants"

import contactStyles from "./contact.module.css"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Cta from "../components/cta"
import Footer from "../components/footer"
import Block from "../components/block"
import Button from "../components/button"

import heroPhoto from "../images/contact-hero.jpg"
import squares from "../images/contact-square.png"

class ContactPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputName: null,
      inputEmail: null,
      inputPhone: null,
      inputMessage: null,
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

  handleMessageChange(e) {
    this.setState({
      inputMessage: e.target.value,
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
        sourceForm: "Contact",
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
    return (
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
                  Do you have questions about how you can help? Reach out to us.
                  We would love to hear from you!
                </p>
              </div>
              <div className={contactStyles.captureForm}>
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
                  <div className="control">
                    <textarea
                      placeholder="Your Message"
                      onChange={e => this.handleMessageChange(e)}
                    ></textarea>
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
                      link="/"
                      text="Send Message"
                      width="201px"
                      onClick={e => this.handleFormSubmit(e)}
                    />
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
                    <p>cal@projectzerolyh.org</p>
                  </div>
                  <div className={contactStyles.detailsRight}>
                    <img
                      src={squares}
                      width="100%"
                      alt="Buildings in Lynchburg"
                    />
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
              textContent="Help us eradicate homelessness in Lynchburg."
            />
            <Footer></Footer>
          </>
        </Layout>
      </>
    )
  }
}

export default ContactPage
