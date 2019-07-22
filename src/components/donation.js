import React, { Component } from "react"
import { navigate } from "@reach/router"
import donationStyles from "./donation.module.css"

import SelectAmountCard from "./selectAmountCard.js"
import CustomAmountCard from "./customAmountCard.js"

class Donation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recurring: true,
      amount: 0,
      progress: 33,
      selectAmountActive: true,
      selectAmountCompleted: false,
      customAmountActive: false,
      customAmountCompleted: false,
      creditCardActive: false,
      creditCardCompleted: false,
      successActive: false,
      successCompleted: false,
      failureCompleted: false,
    }
    this.setAmount = this.setAmount.bind(this)
    this.setRecurring = this.setRecurring.bind(this)
    this.handleCustom = this.handleCustom.bind(this)
    this.goBack = this.goBack.bind(this)
    this.handleCustomAmountSubmit = this.handleCustomAmountSubmit.bind(this)
  }

  handleCustomAmountSubmit(e, value) {
    e.preventDefault()
    const stripped = parseInt(parseFloat(value.replace(/[^.\d]/g,'')) * 100)
    this.setState(state => ({
      amount: stripped,
      progress: 75,
      customAmountCompleted: true,
    }))
  }

  setAmount(e, value) {
    e.preventDefault()
    this.setState(state => ({
      amount: value,
      selectAmountCompleted: true,
      progress: 66,
    }))
  }

  goBack(e, currentCard, newCard, progress) {
    e.preventDefault()
    this.setState(state => ({
      [currentCard]: false,
      [newCard]: false,
      progress: progress
    }))
  }

  handleCustom(e) {
    e.preventDefault()
    this.setState(state => ({
      progress: 50,
      selectAmountCompleted: true,
      customAmountActive: true
    }))
  }

  setRecurring(e, value) {
    e.preventDefault()
    this.setState(state => ({
      recurring: value,
    }))
  }

  render() {
    return (
      <div className={donationStyles.card}>
        <SelectAmountCard recurring={this.state.recurring} setAmount={this.setAmount} handleCustom={this.handleCustom}
          setRecurring={this.setRecurring}
          active={this.state.selectAmountActive ? donationStyles.innerCardActive : ''} 
          completed={this.state.selectAmountCompleted ? donationStyles.innerCardCompleted : ''}/>

        <CustomAmountCard setAmount={this.setAmount} handleCustom={this.handleCustom} goBack={this.goBack}
          handleCustomAmountSubmit={this.handleCustomAmountSubmit} 
          active={this.state.customAmountActive ? donationStyles.innerCardActive : ''} 
          completed={this.state.customAmountCompleted ? donationStyles.innerCardCompleted : ''}/>

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
