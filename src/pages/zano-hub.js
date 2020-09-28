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

import Icon1 from "../images/icons/Zano01.png";
import Icon2 from "../images/icons/Zano02.png";
import Icon3 from "../images/icons/Zano03.png";
import Icon4 from "../images/icons/Zano04.png";
import Icon5 from "../images/icons/Zano05.png";
import Icon6 from "../images/icons/Zano06.png";
import Icon7 from "../images/icons/Zano07.png";
import Icon8 from "../images/icons/Zano08.png";

const TopSection = styled.section`
  @media only screen and (min-width: 320px) {
    .ultra__title {
      width: 70%;
      margin: 0 auto;
      text-align: center;
      padding: 2rem 0;
      h1 {
        font-family: "Lubalin-Book";
      }
      span {
        color: ${(props) => props.theme.blue};
        font-family: "Lubalin-Book";
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
  @media only screen and (min-width: 768px) {
    .ultra__title {
      width: 70%;
    }
    .ultra__box {
      width: 80%;
      &__wrapper {
        h2 {
          width: 80%;
          margin: 0 auto;
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    .ultra__title {
      h1 {
        padding: 2rem 0;
      }
    }
    .ultra__box {
      width: 70%;
      &__wrapper {
        h2 {
          font-size: 1.5rem;
        }
        &__logo {
          width: 100px;
        }
        &__chip {
          width: 205px;
        }
      }
    }
  }
  @media only screen and (min-width: 1440px) {
    .ultra__title {
      max-width: 1440px;
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
        img {
          width: 80px;
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
  @media only screen and (min-width: 768px) {
    margin-top: 4rem;
    .icon__wrapper {
      margin: 0 auto;
      text-align: center;
      /* grid-template-columns: 1fr 1fr 1fr 1fr; */
      div {
        width: 80%;
        margin: 0 auto;
        img {
          width: 50px;
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    .icon__wrapper {
      margin: 0 auto;
      text-align: center;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      div {
        width: 80%;
        margin: 0 auto;
        padding-bottom: 1rem;
        img {
          width: 50px;
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    width: 70%;
    .icon__wrapper {
      margin-top: 9rem;
      div {
        h5 {
          font-size: 1.15rem;
        }
        img {
          width: 70px;
        }
      }
    }
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
  @media only screen and (min-width: 1024px) {
    padding: 3.5rem 0 0 0;
    width: 70%;
    div {
      h4 {
        font-size: 1.45rem;
      }
    }
  }
`;

const MainWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  @media only screen and (min-width: 1024px) {
    width: 80%;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 1140px;
  }
`;

const Ultra = (props) => {
  return (
    <Layout>
      <SEO title="Zano Hub" />
      <Background />
      <MainWrapper>
        <TopSection>
          <div className="ultra__title">
            <h1>
              The <span> next generation </span> in smart, intergrated lighting
              control.
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
              <img src={Icon1} alt="Direct Connection Icon" />
              <h5>Direct Connections</h5>
              <p>
                Switches still connect directly to the lights so also work
                without the hub
              </p>
            </div>
            <div>
              <img src={Icon2} alt="Safe and secure icon" />
              <h5>Safe and secure</h5>
              <p>Using AS128 encryption</p>
            </div>
            <div>
              <img src={Icon3} alt="Daylight saving icon" />
              <h5>Daylight saving</h5>
              <p>
                Automatically reduce light level during the working day reducing
                energy costs
              </p>
            </div>
            <div>
              <img src={Icon4} alt="Energy saving icon" />
              <h5>Energy saving</h5>
              <p>
                Sensors switch off or reduce light levels if rooms are not used
              </p>
            </div>
            <div>
              <img src={Icon5} alt="Smart PIR Icon" />
              <h5>Smart PIR</h5>
              <p>
                Extra features over and above all standard PIRs. Fully
                customisable via our app
              </p>
            </div>
            <div>
              <img src={Icon6} alt="Emergency lighting control Icon" />
              <h5>Emergency lighting control</h5>
              <p>
                Tuneable run-time. Automatic alerts. Automatic fault
                notifications. Automatic testing and reporting
              </p>
            </div>
            <div>
              <img
                src={Icon7}
                alt="Emergency lighting battery management Icon"
              />
              <h5>Emergency lighting battery management</h5>
              <p>
                Automatic battery status reports. Automatic battery failure
                alerts. Patent protected dual battery option to allow for
                continuous protection. Offering your customer high-end lighting
                control without the huge investment
              </p>
            </div>
            <div>
              <img src={Icon8} alt="Circadian lighting Icon" />
              <h5>Circadian lighting</h5>
              <p>
                Let your customer enjoy the health benefits of Circadian
                lighting
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
      </MainWrapper>
    </Layout>
  );
};

export default Ultra;
