import React, { Component } from "react"
import { Helmet } from "react-helmet"
import MaskedInput from "react-text-mask"
import { navigate, graphql } from "gatsby"
import * as Constants from "../components/constants"
import { RichText } from "prismic-reactjs"
import contactStyles from "./contact.module.css"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Cta from "../components/cta"
import Footer from "../components/footer"
import Block from "../components/block"
import Button from "../components/button"

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
    const query = this.props.data
    const data = this.props.data.prismic.allPage_contacts.edges
      .slice(0, 1)
      .pop().node
    return (
      <>
        <Helmet>
          <title>{data.page_title}</title>
        </Helmet>
        <Layout>
          <>
            <Hero
              title={data.header_text}
              photo={query.heroImage.childImageSharp.fixed}
            ></Hero>
            <Block>
              <div
                className={
                  contactStyles.lead + " pageContent is-1 is-centered-text"
                }
              >
                {RichText.render(data.lead_paragraph)}
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
            <Block
              containerPaddingTop="0"
              containerPaddingBottom="0"
              customClassName="contactDetails"
            >
              <div className={contactStyles.detailsContainer}>
                <div className={contactStyles.detailsWrapper}>
                  <div className={contactStyles.detailsLeft}>
                    <h3>Project Zero</h3>
                    <p>
                      {data.address_line_1}
                      <br />
                      {data.address_line_2}
                    </p>
                    <hr />
                    <p>{data.contact_email}</p>
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
              textContent={data.cta_text}
            />
            <Footer></Footer>
          </>
        </Layout>
      </>
    )
  }
}

export default ContactPage

export const query = graphql`
  {
    prismic {
      allPage_contacts {
        edges {
          node {
            address_line_1
            address_line_2
            contact_email
            cta_text
            header_text
            lead_paragraph
            page_title
          }
        }
      }
    }
    heroImage: file(relativePath: { eq: "images/contact-hero.jpg" }) {
      childImageSharp {
        fixed(quality: 100, width: 1200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
