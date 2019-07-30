import React from "react"
import { Helmet } from "react-helmet"
import MaskedInput from "react-text-mask"
import { navigate } from "gatsby"

import teamStyles from "./our-team.module.css"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Cta from "../components/cta"
import Footer from "../components/footer"
import Block from "../components/block"
import Button from "../components/button"

import heroPhoto from "../images/team-hero.jpg"
import tessa from "../images/profile-tessa.jpg"
import cal from "../images/profile-cal.jpg"

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
    let response = await fetch("http://localhost:3000/api/v1/form", {
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
    return (
      <>
        <Helmet>
          <title>Our Team - Project Zero</title>
        </Helmet>
        <Layout>
          <>
            <Hero title="Our Team" photo={heroPhoto}></Hero>
            <Block>
              <div className={teamStyles.lead}>
                <p className="is-1">
                  Our team is made up of young people who came to Lynchburg for
                  an education and fell in love with the city and its people.
                  With that love came a responsibility to care for our neighbors
                  in need.
                </p>
              </div>
            </Block>
            <Block containerPaddingTop="0" containerPaddingBottom="0">
              <div className={teamStyles.biosContainer}>
                <div className={teamStyles.biosWrapper}>
                  <div className={teamStyles.bioItem}>
                    <div className={teamStyles.bioPhoto}>
                      <img src={cal} width="100%" alt="Cal Best" />
                    </div>
                    <div className={teamStyles.bioName}>Cal Best</div>
                    <div className={teamStyles.bioPosition}>
                      Executive Director
                    </div>
                  </div>
                  <div className={teamStyles.bioItem}>
                    <div className={teamStyles.bioPhoto}>
                      <img src={tessa} width="100%" alt="Tessa Wienholt" />
                    </div>
                    <div className={teamStyles.bioName}>Tessa Wienholt</div>
                    <div className={teamStyles.bioPosition}>
                      Associate Director
                    </div>
                  </div>
                </div>
              </div>
            </Block>
            <Block>
              <div className={teamStyles.captureContainer}>
                <div className={teamStyles.captureWrapper}>
                  <h2 className="is-serif is-1 is-centered">Join us.</h2>
                  <p className="is-2 is-centered">
                    Do you have a passion for bridging the gap between our
                    community's resources and its residents? We would love to
                    have you join the Project Zero movement.
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
              displaySecondButton="none"
              toggleModal={this.toggleModal}
              textContent="Help us eradicate homelessness in Lynchburg."
            />
            <Footer></Footer>
          </>
        </Layout>
      </>
    )
  }
}

export default OurTeamPage
