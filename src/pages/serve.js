import React from "react"
import { Helmet } from "react-helmet"
import MaskedInput from "react-text-mask"
import { navigate } from "gatsby"

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
    let response = await fetch("http://localhost:3000/api/v1/form", {
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
    return (
      <>
        <Helmet>
          <title>Donate Time - Project Zero</title>
        </Helmet>
        <Layout>
          <>
            <Hero title="Donate Time" photo={heroPhoto}></Hero>
            <Block>
              <div className={serveStyles.lead}>
                <p className="is-1 is-centered-text">
                  Ready to help &ldquo;on the ground?&rdquo; Reach out and learn
                  how you can go beyond a financial donation and care for your
                  neighbors in person.
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
              linkOneHref="/donate"
              displaySecondButton="none"
              textContent="You can also support Project Zero financially."
            />
            <Footer></Footer>
          </>
        </Layout>
      </>
    )
  }
}

export default ServePage
