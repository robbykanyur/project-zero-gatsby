import React from "react"
import donationStyles from "./donation.module.css"
import { Link } from "gatsby"

class ResultCard extends React.Component {
  toggleModalAndStartOver(e) {
    this.props.toggleModal(e)
    this.sleep(500).then(() => {
      this.props.startOver(e)
    })
  }

  sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  render() {
    if (this.props.paymentSuccessful === true) {
      return (
        <>
          <div className={donationStyles.innerCard + " " + this.props.active}>
            <div className={donationStyles.socialShare + " is-centered"}>
              <h2 className="is-serif is-1">
                Thank you for your contribution!
              </h2>
              <p className="is-2">
                A receipt will be emailed to{" "}
                <strong>{this.props.paymentEmail}</strong>.
              </p>
              {this.props.location === "modal" ? (
                <div className={donationStyles.shareButton}>
                  <a
                    href="/"
                    className={donationStyles.button}
                    onClick={e => this.toggleModalAndStartOver(e)}
                  >
                    Back To Website
                  </a>
                </div>
              ) : (
                <div className={donationStyles.shareButton}>
                  <Link to="/" className={donationStyles.button}>
                    Home Page
                  </Link>
                </div>
              )}
            </div>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className={donationStyles.innerCard + " " + this.props.active}>
            <div className={donationStyles.socialShare + " is-centered"}>
              <h2 className="is-serif is-1">Your payment was unsuccessful.</h2>
              <div className={donationStyles.shareButton}>
                <a
                  href="/"
                  className={donationStyles.button}
                  onClick={e => this.props.startOver(e)}
                >
                  Start Over
                </a>
              </div>
            </div>
          </div>
        </>
      )
    }
  }
}

export default ResultCard
