import React, { Component } from "react"
import donationStyles from "./donation.module.css"
import MaskedInput from "react-text-mask"
import createNumberMask from "text-mask-addons/dist/createNumberMask"

class CustomAmountCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputAmount: 0,
    }
    this.handleAmountChange = this.handleAmountChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.props.handleCustomAmountSubmit(e, this.state.inputAmount)
    }
  }

  handleAmountChange(e) {
    this.setState({
      inputAmount: e.target.value,
    })
  }

  render() {
    const currencyMask = createNumberMask({
      prefix: "$",
      suffix: ".00",
    })

    const formErrors = this.props.errors.map((error, key) => (
      <li key={error.id}>{error.message}</li>
    ))

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
            Please enter your donation amount:
          </p>
        </div>
        <div className={donationStyles.bigNumber}>
          <div className="control">
            <form id="customAmountForm">
              <MaskedInput
                ref={i => {
                  this.customAmountInput = i
                }}
                id="customAmount"
                name="customAmount"
                type="text"
                mask={currencyMask}
                placeholder="$100.00"
                onChange={e => {
                  this.handleAmountChange(e)
                }}
                onKeyPress={this.handleKeyPress}
              />
            </form>
          </div>
        </div>
        <div className="formErrors">{formErrors}</div>
        <div className={donationStyles.controlNext}>
          <a
            href="/"
            className={donationStyles.button}
            onClick={e =>
              this.props.handleCustomAmountSubmit(e, this.state.inputAmount)
            }
          >
            Next
          </a>
        </div>
        <a
          href="/"
          className={donationStyles.detailLink}
          onClick={e =>
            this.props.goBack(
              e,
              "customAmountActive",
              "selectAmountCompleted",
              33
            )
          }
        >
          Go Back
        </a>
      </div>
    )
  }
}

export default CustomAmountCard
