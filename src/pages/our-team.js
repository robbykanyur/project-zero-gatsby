import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import teamStyles from "./our-team.module.css"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Cta from "../components/cta"
import Footer from "../components/footer"
import Block from "../components/block"
import Button from "../components/button"

import caleb from "../images/profile-caleb.jpg"
import tessa from "../images/profile-tessa.jpg"
import cal from "../images/profile-cal.jpg"
import madi from "../images/profile-madi.jpg"
import tyler from "../images/profile-tyler.jpg"

const OurTeamPage = () => (
  <>
    <Helmet>
      <title>Our Team - Project Zero</title>
    </Helmet>
    <Layout>
      <>
        <Hero title="Our Team"></Hero>
        <Block>
          <div className={teamStyles.lead}>
            <p className="is-1">
              Our team is made up of young people who came to Lynchburg for an
              education and fell in love with the city and its people. With that
              love came a responsibility to care for our neighbors in need.
            </p>
          </div>
        </Block>
        <Block containerPaddingTop="0" containerPaddingBottom="0">
          <div className={teamStyles.biosContainer}>
            <div className={teamStyles.biosWrapper}>
              <div className={teamStyles.bioItem}>
                <div className={teamStyles.bioPhoto}>
                  <img src={caleb} width="100%" alt="Caleb Fitzpatrick" />
                </div>
                <div className={teamStyles.bioName}>Caleb Fitzpatrick</div>
                <div className={teamStyles.bioPosition}>Executive Director</div>
              </div>
              <div className={teamStyles.bioItem}>
                <div className={teamStyles.bioPhoto}>
                  <img src={tessa} width="100%" alt="Tessa Wienholt" />
                </div>
                <div className={teamStyles.bioName}>Tessa Wienholt</div>
                <div className={teamStyles.bioPosition}>Associate Director</div>
              </div>
              <div className={teamStyles.bioItem}>
                <div className={teamStyles.bioPhoto}>
                  <img src={cal} width="100%" alt="Cal Best" />
                </div>
                <div className={teamStyles.bioName}>Cal Best</div>
                <div className={teamStyles.bioPosition}>
                  Assistant Director, Finance
                </div>
              </div>
            </div>
            <div className={teamStyles.biosWrapper}>
              <div className={teamStyles.bioItem}>
                <div className={teamStyles.bioPhoto}>
                  <img src={madi} width="100%" alt="Madi Cowell" />
                </div>
                <div className={teamStyles.bioName}>Madi Cowell</div>
                <div className={teamStyles.bioPosition}>
                  Furnishings Coordinator
                </div>
              </div>
              <div className={teamStyles.bioItem}>
                <div className={teamStyles.bioPhoto}>
                  <img src={tyler} width="100%" alt="Tyler Mowery" />
                </div>
                <div className={teamStyles.bioName}>Tyler Mowery</div>
                <div className={teamStyles.bioPosition}>
                  Housing Coordinator
                </div>
              </div>
            </div>
          </div>
        </Block>
        <Block>
          <div className={teamStyles.captureContainer}>
            <div className={teamStyles.captureWrapper}>
              <h2 className="is-serif is-1 is-centered">Join us.</h2>
              <p className="is-2 is-centered">
                Do you have a passion for bridging the gap between our
                community's resources and its residents? We would love to have
                you join the Project Zero movement.
              </p>
              <div className={teamStyles.captureForm}>
                <form
                  className="formControl"
                  id="teamCapture"
                  name="teamCapture"
                >
                  <div className="control">
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="control">
                    <input type="email" placeholder="Email Address" />
                  </div>
                  <div className="control">
                    <Button type="submit" text="Yes, I'm In" width="154px" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Block>
        <Cta
          displaySecondButton="none"
          linkOneText="Donate"
          linkOneHref="/donate"
        />
        <Footer></Footer>
      </>
    </Layout>
  </>
)

export default OurTeamPage
