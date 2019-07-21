import React from "react"
import heroStyles from "./hero.module.css"
import Header from "./header"

import alt from "../images/base-logo-new-alt.png"
import photo from "../images/team-hero.jpg"

const Hero = props => (
  <div className={heroStyles.container}>
    <div
      className={heroStyles.hero}
      style={{ backgroundImage: "url( " + photo + ")" }}
    >
      <Header backgroundColor="none" linkColor="#ffffff" logoSrc={alt} />
      <h1>{props.title}</h1>
    </div>
  </div>
)

export default Hero
