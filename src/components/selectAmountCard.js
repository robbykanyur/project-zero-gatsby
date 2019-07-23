import React, { Component } from "react"
import donationStyles from "./donation.module.css"

class SelectAmountCard extends Component {
  constructor(props) {
    super(props)
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
            Will you make your donation monthly?
          </p>
        </div>
        <div className={donationStyles.interaction}>
          <div className={donationStyles.monthlySelector}>
            <div
              className={
                donationStyles.selection +
                (this.props.recurring
                  ? " " + donationStyles.selectorActive
                  : "")
              }
              onClick={e => this.props.setRecurring(e, true)}
            >
              Yes, count me in!
            </div>
            <div
              className={
                donationStyles.selectionRight +
                (this.props.recurring
                  ? ""
                  : " " + donationStyles.selectorActiveRight)
              }
              onClick={e => this.props.setRecurring(e, false)}
            >
              No, not this time.
            </div>
          </div>
          <div className={donationStyles.chooseAmount}>
            <div className={donationStyles.amountRow}>
              <a
                href="/"
                className={donationStyles.button}
                onClick={e => this.props.setAmount(e, 1000)}
              >
                Donate $10
              </a>
              <a
                href="/"
                className={donationStyles.button}
                onClick={e => this.props.setAmount(e, 2500)}
              >
                Donate $25
              </a>
              <a
                href="/"
                className={donationStyles.button}
                onClick={e => this.props.setAmount(e, 5000)}
              >
                Donate $50
              </a>
            </div>
            <div className={donationStyles.amountRow}>
              <a
                href="/"
                className={donationStyles.button}
                onClick={e => this.props.setAmount(e, 7500)}
              >
                Donate $75
              </a>
              <a
                href="/"
                className={donationStyles.button}
                onClick={e => this.props.setAmount(e, 10000)}
              >
                Donate $100
              </a>
              <a
                href="/"
                className={donationStyles.button}
                onClick={e => this.props.handleCustom(e)}
              >
                Enter Amount
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SelectAmountCard
