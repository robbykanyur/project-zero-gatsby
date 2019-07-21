import React from "react"
import ctaStyles from "./cta.module.css"

const Cta = props => (
  <div className={ctaStyles.container}>
    <div className={ctaStyles.left}></div>
    <div className={ctaStyles.right}>
      <div className={ctaStyles.contentWrapper}>
        <h2 className={ctaStyles.header} style={{ width: props.contentWidth }}>
          {props.textContent}
        </h2>
        <div className={ctaStyles.buttons}>
          <a
            href={props.linkOneHref}
            className={ctaStyles.button}
            style={{ width: props.linkOneWidth }}
          >
            {props.linkOneText}
          </a>
          <a
            href={props.linkTwoHref}
            className={ctaStyles.button}
            style={{ display: props.displaySecondButton }}
          >
            {props.linkTwoText}
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Cta
