import React from "react"
import { CardElement } from "react-stripe-elements"

class StripeCard extends React.Component {
  render() {
    const checkoutStyles = {
      base: {
        fontWeight: "600",
        letterSpacing: "2px",
        textTransform: "uppercase",
        fontSize: "16px",
        fontFamily: "'Courier New', monospace",
        color: "#5dae8c",
        "::placeholder": {
          color: "#cfd3d9",
        },
      },
    }
    return <CardElement style={checkoutStyles} />
  }
}

export default StripeCard
