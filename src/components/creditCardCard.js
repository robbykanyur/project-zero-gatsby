import React, { Component } from "react"
import donationStyles from "./donation.module.css"
import { StripeProvider, Elements } from "react-stripe-elements"

import StripeCard from "./stripeCard.js"

class CreditCardCard extends Component {
  constructor(props) {
    super(props)
    this.state = { stripe: null }
  }

  componentDidMount() {
    this.setState({ stripe: window.Stripe("pk_test_ko6lndOpwsQBw0m8DRkpBHvF") })
  }

  render() {
    return (
      <div
        className={
          donationStyles.innerCard +
          " " +
          this.props.active +
          " " +
          this.props.completed
        }
      >
        <div className={donationStyles.title}>
          <p className="is-2 is-serif is-centered">
            Please enter your payment information:
          </p>
        </div>
        <form className="formControl">
          <div className="control">
            <input
              type="text"
              placeholder="Your name"
              onChange={e => this.props.handlePaymentNameChange(e)}
            />
          </div>
          <div className="control">
            <input
              type="text"
              placeholder="Email address"
              onChange={e => this.props.handlePaymentEmailChange(e)}
            />
          </div>
          <div className={"control " + donationStyles.stripeControl}>
            <StripeProvider stripe={this.state.stripe}>
              <Elements>
                <StripeCard />
              </Elements>
            </StripeProvider>
          </div>
        </form>
        <div className={donationStyles.controlNext}>
          <a
            href="/"
            className={
              donationStyles.button + " " + donationStyles.confirmButton
            }
            onClick={e => this.props.handleCreditCardSubmit(e)}
          >
            Confirm $
            {parseFloat(Math.round(this.props.amount) / 100).toFixed(2)}{" "}
            {this.props.recurring ? "Subscription" : "Payment"}
          </a>
        </div>
        <a
          href="/"
          className={donationStyles.detailLink}
          onClick={e => this.props.startOver(e)}
        >
          Start Over
        </a>
      </div>
    )
  }
}

export default CreditCardCard
