import React, { Component } from "react"
import donationStyles from "./donation.module.css"
import { StripeProvider, Elements } from "react-stripe-elements"

import StripeCard from "./stripeCard.js"

class CreditCardCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stripe: null,
    }
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentDidMount() {
    this.setState({ stripe: window.Stripe("pk_test_ko6lndOpwsQBw0m8DRkpBHvF") })
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.props.handleCreditCardSubmit(e, this.state.inputAmount)
    }
  }

  ccProceed(e) {
    this.props.handleCreditCardSubmit(e)
  }

  render() {
    return (
      <div
        id="donationCreditCardCard"
        className={
          donationStyles.innerCard +
          " " +
          this.props.active +
          " " +
          this.props.completed
        }
      >
        <div className={donationStyles.title}>
          <p id="donationSerifH2" className="is-2 is-serif  is-centered">
            Please enter your payment information:
          </p>
        </div>
        <StripeProvider stripe={this.state.stripe}>
          <Elements>
            <StripeCard
              ccProceed={this.ccProceed}
              customerEmail={this.props.customerEmail}
              customerName={this.props.customerName}
              recurring={this.props.recurring}
              amount={this.props.amount}
              handlePaymentNameChange={this.props.handlePaymentNameChange}
              handlePaymentEmailChange={this.props.handlePaymentEmailChange}
              handleCreditCardSubmit={this.props.handleCreditCardSubmit}
              handleStripeResponse={this.props.handleStripeResponse}
            />
          </Elements>
        </StripeProvider>
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
