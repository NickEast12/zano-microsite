import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import Background from "../components/background";
import ContactButton from "../components/contact-button";

import Logo from "../images/ZANO-LOGO-WHITE.png";

import ZanoBackground from "../images/Zano-hub-background.png";
import Flicker from "../images/flicker.png";
import LowerBackground from "../images/light2.png";
import ZanoHub from "../images/Zanohub.png";

const TopSection = styled.section`
  @media only screen and (min-width: 320px) {
    .ultra__title {
      width: 70%;
      margin: 0 auto;
      text-align: center;
      padding: 2rem 0;
      h1 {
        font-family: "Lubalin";
      }
      span {
        color: ${(props) => props.theme.blue};
        font-family: "Lubalin";
      }
    }
    .ultra__box {
      width: 90%;
      margin: 0 auto;
      text-align: center;
      background: url(${ZanoBackground});
      background-size: 100% 170%;
      background-repeat: no-repeat;
      &__wrapper {
        color: white;
        padding: 2rem 2rem 1rem 2rem;
        height: 13em;
        h2 {
          font-size: 1rem;
          padding: 1.25rem 0;
          font-weight: 100;
        }
        &__logo {
          width: 100px;
        }
        &__chip {
          width: 175px;
        }
      }
    }
  }
  @media only screen and (min-width: 414px) {
    .ultra__box {
      width: 80%;
    }
  }
`;
const IconSection = styled.section`
  @media only screen and (min-width: 320px) {
    width: 90%;
    margin: 7rem auto 1rem auto;
    text-align: center;
    .icon__wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      div {
        margin-bottom: 1rem;
        i {
        }
        h5 {
          font-size: 1rem;
        }
        p {
          font-size: 0.9rem;
          padding-top: 0.5rem;
        }
      }
    }
  }

  @media only screen and (min-width: 414px) {
    width: 80%;
  }
`;

const LowerSection = styled.section`
  @media only screen and (min-width: 320px) {
    padding: 2rem 0 0 0;
    div {
      width: 90%;
      margin: 0 auto;
      text-align: center;
      .lower__blue {
        color: ${(props) => props.theme.blue};
        font-weight: 100;
        margin-bottom: 0.75rem;
      }
      h4 {
        font-weight: 100;
      }
    }
  }

  @media only screen and (min-width: 414px) {
    width: 80%;
    margin: 0 auto;
  }
`;

const Ultra = (props) => {
  return (
    <Layout>
      <SEO title="Zano Hub" />
      <Background />
      <TopSection>
        <div className="ultra__title">
          <h1>
            The in smart, intergrated lighting control.
            <span> next generation </span>
          </h1>
        </div>
        <div className="ultra__box">
          <div className="ultra__box__wrapper">
            <img
              src={Logo}
              alt="Zano Logo"
              className="ultra__box__wrapper__logo"
            />
            <h2>
              Superior, secure and robust wireless communication to automate
              lighting control in any building.
            </h2>
            <img
              src={ZanoHub}
              alt="Zano Hub"
              className="ultra__box__wrapper__chip"
            />
          </div>
        </div>
      </TopSection>
      <IconSection>
        <div className="icon__wrapper">
          <div>
            <i>ICON</i>
            <h5>Direct Connections</h5>
            <p>
              Switches still connect directly to the lights so also work without
              the hub
            </p>
          </div>
          <div>
            <i>ICON</i>
            <h5>Safe and secure</h5>
            <p>Using AS128 encryption</p>
          </div>
          <div>
            <i>ICON</i>
            <h5>Daylight saving</h5>
            <p>
              Automatically reduce light level during the working day reducing
              energy costs
            </p>
          </div>
          <div>
            <i>ICON</i>
            <h5>Energy saving</h5>
            <p>
              Sensors switch off or reduce light levels if rooms are not used
            </p>
          </div>
          <div>
            <i>ICON</i>
            <h5>Smart PIR</h5>
            <p>
              Extra features over and above all standard PIRs. Fully
              customisable via our app
            </p>
          </div>
          <div>
            <i>ICON</i>
            <h5>Emergency lighting control</h5>
            <p>
              Tuneable run-time. Automatic alerts. Automatic fault
              notifications. Automatic testing and reporting
            </p>
          </div>
          <div>
            <i>ICON</i>
            <h5>Emergency lighting battery management</h5>
            <p>
              Automatic battery status reports. Automatic battery failure
              alerts. Patent protected dual battery option to allow for
              continuous protection. Offering your customer high-end lighting
              control without the huge investment
            </p>
          </div>
          <div>
            <i>ICON</i>
            <h5>Circadian lighting</h5>
            <p>
              Let your customer enjoy the health benefits of Circadian lighting
            </p>
          </div>
        </div>
      </IconSection>
      <LowerSection>
        <div>
          <h4 className="lower__blue">
            UK Building Regulations introduced in April 2019 now enforce
            automated lighting in commercial buildings.
          </h4>
          <h4>
            The Zano hub enables commercial buildings to comply simply and
            affordably. Communicating independently via Zano 868 radio meaning
            there is no reliance or problems associated with WiFi.
          </h4>
        </div>
      </LowerSection>
      <ContactButton />
    </Layout>
  );
};

export default Ultra;
