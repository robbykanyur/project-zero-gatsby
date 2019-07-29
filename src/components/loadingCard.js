import React, { Component } from "react"
import donationStyles from "./donation.module.css"
import Loading from "./loading"

class LoadingCard extends Component {
  render() {
    return (
      <>
        <div
          className={
            donationStyles.innerCard +
            " " +
            this.props.active +
            " " +
            this.props.completed
          }
        >
          <div className="is-centered">
            <Loading />
          </div>
        </div>
      </>
    )
  }
}

export default LoadingCard
