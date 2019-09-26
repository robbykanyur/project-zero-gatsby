import React from "react"
import heroStyles from "./hero.module.css"
import Header from "./header"
import BackgroundImage from "gatsby-background-image"

import alt from "../images/base-logo-alt.png"

const Hero = props => (
  <div className={heroStyles.container}>
    <div className={heroStyles.hero}>
      <BackgroundImage fluid={props.photo} className="gatsby-hero">
        <Header backgroundColor="none" linkColor="#ffffff" logoSrc={alt} />
        <h1>{props.title}</h1>
      </BackgroundImage>
    </div>
  </div>
)

export default Hero
