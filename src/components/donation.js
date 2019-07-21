import React, { Component } from "react"
import donationStyles from "./donation.module.css"

class Donation extends Component {
  constructor() {
    super()
    this.state = {
      recurring: true,
      amount: 0,
      progress: 33,
      headerText: "Will you make your donation monthly?",
    }
    this.setAmount = this.setAmount.bind(this)
    this.setRecurring = this.setRecurring.bind(this)
    this.handleCustom = this.handleCustom.bind(this)
  }

  setAmount(e, value) {
    e.preventDefault()
    this.setState(state => ({
      amount: value,
      progress: 66,
    }))
  }

  handleCustom(e) {
    e.preventDefault()
    this.setState(state => ({
      progress: 50,
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
        <div className={donationStyles.title}>
          <p className="is-2 is-serif is-centered">{this.state.headerText}</p>
        </div>
        <div className={donationStyles.interaction}>
          <div className={donationStyles.monthlySelector}>
            <div
              className={
                donationStyles.selection +
                (this.state.recurring
                  ? " " + donationStyles.selectorActive
                  : "")
              }
              onClick={e => this.setRecurring(e, true)}
            >
              Yes, count me in!
            </div>
            <div
              className={
                donationStyles.selectionRight +
                (this.state.recurring
                  ? ""
                  : " " + donationStyles.selectorActiveRight)
              }
              onClick={e => this.setRecurring(e, false)}
            >
              No, not this time.
            </div>
          </div>
          <div className={donationStyles.chooseAmount}>
            <div className={donationStyles.amountRow}>
              <a
                href="/"
                className={donationStyles.button}
                onClick={e => this.setAmount(e, 1000)}
              >
                Donate $10
              </a>
              <a
                href="/"
                className={donationStyles.button}
                onClick={e => this.setAmount(e, 2500)}
              >
                Donate $25
              </a>
              <a
                href="/"
                className={donationStyles.button}
                onClick={e => this.setAmount(e, 5000)}
              >
                Donate $50
              </a>
            </div>
            <div className={donationStyles.amountRow}>
              <a
                href="/"
                className={donationStyles.button}
                onClick={e => this.setAmount(e, 7500)}
              >
                Donate $75
              </a>
              <a
                href="/"
                className={donationStyles.button}
                onClick={e => this.setAmount(e, 10000)}
              >
                Donate $100
              </a>
              <a
                href="/"
                className={donationStyles.button}
                onClick={e => this.handleCustom(e)}
              >
                Enter Amount
              </a>
            </div>
          </div>
          <div className={donationStyles.progressBar}>
            <div
              className={donationStyles.progressIndicator}
              style={{ width: this.state.progress + "%" }}
            ></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Donation
