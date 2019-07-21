import React from "react"
import ctaStyles from "./cta.module.css"

import Button from "./button"

const Cta = props => (
  <div className={ctaStyles.container}>
    <div className={ctaStyles.left}></div>
    <div className={ctaStyles.right}>
      <div className={ctaStyles.contentWrapper}>
        <h2 className={ctaStyles.header}>
          Join us in eradicating homelessness in Lynchburg by the year 2020.
        </h2>
        <div className={ctaStyles.buttons}>
          <a href={props.linkOneHref} className={ctaStyles.button}>
            {props.linkOneText}
          </a>
          <a href={props.linkTwoHref} className={ctaStyles.button}>
            {props.linkTwoText}
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Cta
