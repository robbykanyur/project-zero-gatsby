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
          <div class="control">
            <MaskedInput
              name="customAmount"
              type="text"
              mask={currencyMask}
              placeholder="$100.00"
              onChange={e => {
                this.handleAmountChange(e)
              }}
            />
          </div>
        </div>
        <div className={donationStyles.customAmountNext}>
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
