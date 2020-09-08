import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import Background from "../components/background";
import ContactButton from "../components/contact-button";

import Logo from "../images/ZANO-LOGO-WHITE.png";
import Microchip from "../images/Zano-Microchip-v1.png";
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
`;
const MiddleSection = styled.section`
  @media only screen and (min-width: 320px) {
    width: 90%;
    margin: 0 auto;
    text-align: center;
    .flicker__title {
      padding: 5rem 0 2rem 0;
      h2 {
        font-family: "Lubalin-Book";
        font-size: 1.5rem;
      }
      &__blue {
        color: ${(props) => props.theme.blue};
        padding-bottom: 0.75rem;
        font-weight: bolder;
      }
    }
    .flicker__img {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .flicker__content {
      padding: 2rem 0;
      p {
        font-size: 1.2rem;
      }
      &__blue {
        color: ${(props) => props.theme.blue};
        padding-bottom: 0.25rem;
      }
    }
  }
  @media only screen and (min-width: 414px) {
    width: 80%;
  }
`;
const LowerSection = styled.section`
  @media only screen and (min-width: 320px) {
    width: 90%;
    margin: 0 auto;
    text-align: center;

    div {
      background-image: url(${LowerBackground});
      background-size: 250% 100%;
      color: white;
      padding: 2rem;
      h4 {
        font-family: "Lubalin-Book";
        span {
          color: ${(props) => props.theme.blue};
        }
      }
      img {
        width: 180px;
        margin-top: 1rem;
      }
    }
  }

  @media only screen and (min-width: 414px) {
    width: 80%;
  }
`;
const Ultra = (props) => {
  return (
    <Layout>
      <SEO title="Zano Ultra" />
      <Background />
      <TopSection>
        <div className="ultra__title">
          <h1>
            The world's first <span> 80,00hz </span> LED driver
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
              Complying with regulations, eliminating flicker and subsequent
              health problems for good.
            </h2>
            <img
              src={Microchip}
              alt="Zano Microchip"
              className="ultra__box__wrapper__chip"
            />
          </div>
        </div>
      </TopSection>
      <MiddleSection>
        <div className="flicker__title">
          <h2 className="flicker__title__blue">
            Every LED needs a driver to work.
          </h2>
          <h2>But existing LED drivers cause flicker and health problems.</h2>
        </div>
        <div className="flicker__img">
          <img src={Flicker} alt="" />
        </div>
        <div className="flicker__content">
          <p className="flicker__content__blue">
            Fast track the new Zano Ultra into your existing product range.
          </p>
          <p>
            No product redesign required – we simply supply you with a pcb
            design to fit inside your existing enclosures ready for your
            existing manufacturer to produce.
          </p>
        </div>
      </MiddleSection>
      <LowerSection>
        <div>
          <h4>
            Now add a Zano Hub to your new <span>Zano Ultra </span> LED driver
            and open up a smarter world to automatically control your lights.
          </h4>
          <img src={ZanoHub} alt="Zano Hub" />
        </div>
      </LowerSection>
      <ContactButton />
    </Layout>
  );
};

export default Ultra;
