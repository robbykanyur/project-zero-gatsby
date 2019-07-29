import React from "react"
import { CardElement, injectStripe } from "react-stripe-elements"
import donationStyles from "./donation.module.css"

class StripeCard extends React.Component {
  async submit(e) {
    e.preventDefault()
    this.props.handleCreditCardSubmit(e)
    let { token } = await this.props.stripe.createToken({ name: "Name" })
    let response = await fetch("http://localhost:3000/api/v1/charge", {
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

    if (response.ok) {
      this.props.handleStripeResponse(true, response)
    } else {
      this.props.handleStripeResponse(false, response)
    }
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
    }

    return (
      <>
        <form className="formControl" onKeyPress={this.handleKeyPress}>
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
            <CardElement style={checkoutStyles} />
          </div>
        </form>
        <div className={donationStyles.controlNext}>
          <a
            href="/"
            className={
              donationStyles.button + " " + donationStyles.confirmButton
            }
            onClick={e => this.submit(e)}
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
