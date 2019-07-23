import React from "react"
import donationStyles from "./donation.module.css"

class ResultCard extends React.Component {
  render() {
    if (this.props.paymentSuccessful === true) {
      return (
        <>
          <div className={donationStyles.innerCard + " " + this.props.active}>
            <div className={donationStyles.socialShare + " is-centered"}>
              <h2 className="is-serif is-1">
                Thank you for your contribution!
              </h2>
              <p className="is-2">Will you help us spread the word?</p>
              <div className={donationStyles.shareButton}>
                <a
                  href="http://facebook.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className={donationStyles.button}
                >
                  Share on Facebook
                </a>
              </div>
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
              <p className="is-2">Something went wrong.</p>
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
