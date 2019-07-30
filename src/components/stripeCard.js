import React from "react"
import { CardElement, injectStripe } from "react-stripe-elements"
import donationStyles from "./donation.module.css"
import * as Constants from "./constants"

class StripeCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: [],
      cardModified: false,
    }
  }

  async submitToStripe() {
    this.props.handleCreditCardSubmit()
    let { token } = await this.props.stripe.createToken({ name: "Name" })
    let response = await fetch(Constants.API + "charge", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        recurring: this.props.recurring,
        customerEmail: this.props.customerEmail,
        customerName: this.props.customerName,
        amount: this.props.amount,
        token: token,
      }),
    })
    await this.props.handleStripeResponse(response.ok, response)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.validateForm()
  }

  async validateForm() {
    let response = await fetch(
      "https://zero-api.elllipse.com/api/v1/validate/paymentInformation",
      {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formName: this.props.customerName,
          formEmail: this.props.customerEmail,
          cardModified: this.state.cardModified,
        }),
      }
    )
    let body = await response.json()
    await this.handleValidateResponse(response, body)
  }

  handleValidateResponse(response, body) {
    if (response.ok) {
      this.submitToStripe()
    } else {
      this.setState({ errors: body.errors })
    }
  }

  handleCardChange(e) {
    this.setState({
      cardModified: true,
    })
  }

  render() {
    const checkoutStyles = {
      base: {
        fontWeight: "600",
        letterSpacing: "2px",
        textTransform: "uppercase",
        fontSize: "16px",
        fontFamily: "'Courier New', monospace",
        color: "#5dae8c",
        "::placeholder": {
          color: "#cfd3d9",
        },
      },
      invalid: {
        color: "#e74c3c",
      },
    }

    const formErrors = this.state.errors.map((error, key) => (
      <li key={error.id}>{error.message}</li>
    ))

    return (
      <>
        <form
          id="paymentInformationForm"
          className="formControl"
          onKeyPress={this.handleKeyPress}
        >
          <div className="control">
            <input
              ref={el => (this.nameInput = el)}
              type="text"
              placeholder="Your name"
              onChange={e => this.props.handlePaymentNameChange(e)}
            />
          </div>
          <div className="control">
            <input
              ref={el => (this.emailInput = el)}
              type="text"
              placeholder="Email address"
              onChange={e => this.props.handlePaymentEmailChange(e)}
            />
          </div>
          <div className={"control " + donationStyles.stripeControl}>
            <CardElement
              style={checkoutStyles}
              onChange={e => this.handleCardChange(e)}
            />
          </div>
        </form>
        <div className="formErrors">{formErrors}</div>
        <div className={donationStyles.controlNext}>
          <a
            href="/"
            className={
              donationStyles.button + " " + donationStyles.confirmButton
            }
            onClick={e => this.handleSubmit(e)}
          >
            Confirm $
            {parseFloat(Math.round(this.props.amount) / 100).toFixed(2)}{" "}
            {this.props.recurring ? "Subscription" : "Payment"}
          </a>
        </div>
      </>
    )
  }
}

export default injectStripe(StripeCard)
