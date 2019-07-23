import React, { Component } from "react"
import donationStyles from "./donation.module.css"

import SelectAmountCard from "./selectAmountCard.js"
import CustomAmountCard from "./customAmountCard.js"
import CreditCardCard from "./creditCardCard.js"
import LoadingCard from "./loadingCard.js"

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
  }

  get initialState() {
    return {
      recurring: true,
      amount: 0,
      progress: 25,
      selectAmountActive: true,
      selectAmountCompleted: false,
      customAmountActive: false,
      customAmountCompleted: false,
      creditCardActive: false,
      creditCardCompleted: false,
      successActive: false,
      successCompleted: false,
      failureCompleted: false,
      loadingCardActive: false,
      loadingCardCompleted: false,
      paymentName: null,
      paymentEmail: null,
    }
  }

  startOver(e) {
    e.preventDefault()
    this.setState(this.initialState)
  }

  handleCustomAmountSubmit(e, value) {
    e.preventDefault()
    const stripped = parseInt(parseFloat(value.replace(/[^.\d]/g, "")) * 100)
    this.setState(state => ({
      amount: stripped,
      progress: 60,
      customAmountCompleted: true,
      creditCardActive: true,
    }))
  }

  setAmount(e, value) {
    e.preventDefault()
    this.setState(state => ({
      amount: value,
      selectAmountCompleted: true,
      creditCardActive: true,
      progress: 50,
    }))
  }

  goBack(e, currentCard, newCard, progress) {
    e.preventDefault()
    this.setState(state => ({
      [currentCard]: false,
      [newCard]: false,
      progress: progress,
    }))
  }

  handleCustom(e) {
    e.preventDefault()
    this.setState(state => ({
      progress: 40,
      selectAmountCompleted: true,
      customAmountActive: true,
    }))
  }

  setRecurring(e, value) {
    e.preventDefault()
    this.setState(state => ({
      recurring: value,
    }))
  }

  handleCreditCardSubmit(e) {
    e.preventDefault()
    var incrementProgress = null
    if (this.state.customAmountActive) {
      incrementProgress = 80
    } else {
      incrementProgress = 75
    }
    this.setState(state => ({
      creditCardCompleted: true,
      loadingCardActive: true,
      progress: incrementProgress,
    }))
    this.simulateStripeResponse()
  }

  simulateStripeResponse() {
    this.sleep(2000).then(() => {
      this.setState(state => ({
        loadingCardCompleted: true,
        progress: 100,
      }))
    })
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
        />

        <CreditCardCard
          startOver={this.startOver}
          handleCreditCardSubmit={this.handleCreditCardSubmit}
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
