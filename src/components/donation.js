import React, { Component } from "react"
import donationStyles from "./donation.module.css"
import * as Constants from "./constants"

import SelectAmountCard from "./selectAmountCard.js"
import CustomAmountCard from "./customAmountCard.js"
import CreditCardCard from "./creditCardCard.js"
import LoadingCard from "./loadingCard.js"
import ResultCard from "./resultCard.js"

class Donation extends Component {
  constructor(props) {
    super(props)
    this.state = this.initialState
    this.setAmount = this.setAmount.bind(this)
    this.setRecurring = this.setRecurring.bind(this)
    this.handleCustom = this.handleCustom.bind(this)
    this.goBack = this.goBack.bind(this)
    this.handleCustomAmountSubmit = this.handleCustomAmountSubmit.bind(this)
    this.startOver = this.startOver.bind(this)
    this.handleCreditCardSubmit = this.handleCreditCardSubmit.bind(this)
    this.handlePaymentNameChange = this.handlePaymentNameChange.bind(this)
    this.handlePaymentEmailChange = this.handlePaymentEmailChange.bind(this)
    this.handleStripeResponse = this.handleStripeResponse.bind(this)
  }

  get initialState() {
    return {
      recurring: true,
      amount: null,
      progress: 25,
      selectAmountActive: true,
      selectAmountCompleted: false,
      customAmountActive: false,
      customAmountCompleted: false,
      creditCardActive: false,
      creditCardCompleted: false,
      successActive: false,
      resultCardActive: false,
      loadingCardActive: false,
      loadingCardCompleted: false,
      paymentName: null,
      paymentEmail: null,
      paymentSuccessful: null,
      enterButtonAction: null,
      paymentFailureReason: null,
      customAmountErrors: [],
    }
  }

  startOver(e) {
    e.preventDefault()
    this.setState(this.initialState)
    document.getElementById("customAmountForm").reset()
    document.getElementById("paymentInformationForm").reset()
  }

  async handleCustomAmountSubmit(e, value) {
    await e.preventDefault()
    let response = await fetch(Constants.API + "validate/customAmount", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customAmount: value,
      }),
    })
    let body = await response.json()
    this.handleCustomAmountResponse(response, body, value)
  }

  handleCustomAmountResponse(response, body, value) {
    if (response.ok) {
      this.handleCustomAmountSuccess(body, value)
    } else {
      this.setState({ customAmountErrors: body.errors })
    }
  }

  handleCustomAmountSuccess(body, value) {
    const stripped = parseInt(parseFloat(value.replace(/[^.\d]/g, "")) * 100)
    this.setState((state, props) => ({
      amount: stripped,
      progress: 60,
      customAmountCompleted: true,
      creditCardActive: true,
    }))
  }

  setAmount(e, value) {
    e.preventDefault()
    this.setState((state, props) => ({
      amount: value,
      selectAmountCompleted: true,
      creditCardActive: true,
      progress: 50,
    }))
  }

  goBack(e, currentCard, newCard, progress) {
    e.preventDefault()
    this.setState((state, props) => ({
      [currentCard]: false,
      [newCard]: false,
      progress: progress,
    }))
  }

  handleCustom(e) {
    e.preventDefault()
    this.setState((state, props) => ({
      progress: 40,
      selectAmountCompleted: true,
      customAmountActive: true,
    }))
  }

  setRecurring(e, value) {
    e.preventDefault()
    this.setState((state, props) => ({
      recurring: value,
    }))
  }

  handleCreditCardSubmit() {
    var incrementProgress = null
    if (this.state.customAmountActive) {
      incrementProgress = 80
    } else {
      incrementProgress = 75
    }
    this.setState((state, props) => ({
      creditCardCompleted: true,
      loadingCardActive: true,
      progress: incrementProgress,
    }))
  }

  handleStripeResponse(ok, response) {
    this.setState((state, props) => ({
      loadingCardCompleted: true,
      progress: 100,
      paymentSuccessful: ok,
      resultCardActive: true,
    }))
    console.log(response.json())
  }

  sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  handlePaymentNameChange(e) {
    this.setState({
      paymentName: e.target.value,
    })
  }

  handlePaymentEmailChange(e) {
    this.setState({
      paymentEmail: e.target.value,
    })
  }

  render() {
    return (
      <div className={donationStyles.card}>
        <SelectAmountCard
          recurring={this.state.recurring}
          setAmount={this.setAmount}
          handleCustom={this.handleCustom}
          setRecurring={this.setRecurring}
          active={
            this.state.selectAmountActive ? donationStyles.innerCardActive : ""
          }
          completed={
            this.state.selectAmountCompleted
              ? donationStyles.innerCardCompleted
              : ""
          }
        />

        <CustomAmountCard
          setAmount={this.setAmount}
          handleCustom={this.handleCustom}
          goBack={this.goBack}
          handleCustomAmountSubmit={this.handleCustomAmountSubmit}
          active={
            this.state.customAmountActive ? donationStyles.innerCardActive : ""
          }
          completed={
            this.state.customAmountCompleted
              ? donationStyles.innerCardCompleted
              : ""
          }
          errors={this.state.customAmountErrors}
        />

        <CreditCardCard
          startOver={this.startOver}
          handleCreditCardSubmit={this.handleCreditCardSubmit}
          handleStripeResponse={this.handleStripeResponse}
          amount={this.state.amount}
          active={
            this.state.creditCardActive ? donationStyles.innerCardActive : ""
          }
          recurring={this.state.recurring}
          handlePaymentEmailChange={this.handlePaymentEmailChange}
          handlePaymentNameChange={this.handlePaymentNameChange}
          completed={
            this.state.creditCardCompleted
              ? donationStyles.innerCardCompleted
              : ""
          }
          customerEmail={this.state.paymentEmail}
          customerName={this.state.paymentName}
        />

        <LoadingCard
          active={
            this.state.loadingCardActive ? donationStyles.innerCardActive : ""
          }
          completed={
            this.state.loadingCardCompleted
              ? donationStyles.innerCardCompleted
              : ""
          }
        />

        <ResultCard
          active={
            this.state.resultCardActive ? donationStyles.innerCardActive : ""
          }
          paymentSuccessful={this.state.paymentSuccessful}
          startOver={this.startOver}
          paymentEmail={this.state.paymentEmail}
          location={this.props.location}
          toggleModal={this.props.toggleModal}
        />

        <div className={donationStyles.progressBar}>
          <div
            className={donationStyles.progressIndicator}
            style={{ width: this.state.progress + "%" }}
          ></div>
        </div>
      </div>
    )
  }
}

export default Donation
