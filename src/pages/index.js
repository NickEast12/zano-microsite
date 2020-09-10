import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";

import Background from "../components/background";

import ZanoMicrochip from "../components/images/ZanoMicrochip";

import ZanoHubLogo from "../images/Zano-Hub-logo.png";
import ZanoUltraLogo from "../images/Zano-Ultra-logo.png";
import TemplateLogo from "../images/ZANO-LOGO-WHITE.png";
import ZanoHubLogoReverse from "../images/Zano-Hub-reverse.png";
import ZanoUltraLogoReverse from "../images/Zano-Ultra-reverse.png";

import ZanoHubBackGround from "../images/Zano-hub-background.png";
import ZanoUltraBackground from "../images/Zano-Ultra-background-image.png";
import Product2 from "../images/Zanohub.png";

import Product1 from "../images/Zano-Microchip-v1.png";

import LegalBackground1 from "../images/light2.png";
import LegalBackground2 from "../images/why-does.png";

const HomePageWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;
const TitleSection = styled.section`
  @media only screen and (min-width: 320px) {
    width: 90%;
    margin: 0 auto;
    padding: 2rem 0;
    h1 {
      text-align: center;
      font-family: "Lubalin-Book";
      span {
        font-weight: bold;
        color: ${(props) => props.theme.blue};
        font-family: "Lubalin-Book";
      }
    }
  }
  @media only screen and (min-width: 414px) {
    width: 80%;
  }
  @media only screen and (min-width: 768px) {
    padding: 4rem 0;
    width: 80%;
    h1 {
      font-size: 1.95rem;
    }
  }
`;
const ProductSection = styled.section`
  @media only screen and (min-width: 320px) {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 3rem;
    text-align: center;
    position: relative;

    .product__left,
    .product__right {
      color: white;
      padding: 3rem 2rem 0rem 3rem;
      height: 20rem;

      p {
        margin: 1rem 0 0.5rem 0;
        font-size: 1.1rem;
      }
    }
    .product__left {
      background-image: url(${ZanoUltraBackground});
      background-repeat: no-repeat;
      background-size: 100% 100%;
      margin-bottom: 23px;
      &__img__wrapper {
        padding: 0;
      }
      &__logo {
        width: 175px;
      }
      &__img {
        width: 150px;
        padding-top: 0.5rem;
      }
    }
    .product__right {
      background-image: url(${ZanoHubBackGround});
      background-repeat: no-repeat;
      background-size: 100% 100%;
      &__logo {
        width: 175px;
      }
      &__img {
        width: 150px;
        padding-top: 0.5rem;
      }
    }
    .plus__wrapper {
      background: red;
      width: 100%;
      position: absolute;
      z-index: 5;
      text-align: center;
      top: 21.2rem;
      .plus {
        width: 5%;
        margin: 0 auto;
        padding: 0;
        div {
          position: absolute;
          width: 26px;
          height: 80px;
          padding: 0;
          margin-bottom: 1rem;
          background: ${(props) => props.theme.blue};

          &:nth-child(2) {
            transform: rotate(90deg);
          }
        }
      }
    }
  }
  @media only screen and (min-width: 414px) {
    width: 80%;
  }
  @media only screen and (min-width: 460px) {
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 35px;

    div {
      height: 22.5rem;
    }
    .product__left {
      padding-top: 4rem;
      &__logo {
        width: 160px;
      }
      &__img {
        width: 160px;
      }
    }
    .product__right {
      padding-top: 4rem;
      &__logo {
        width: 160px;
      }
      &__img {
        width: 160px;
        padding-top: 0;
      }
    }
    .plus__wrapper {
      top: 2rem;
      left: -3px;
      .plus {
        div {
          width: 35px;
        }
      }
    }
  }
  @media only screen and (min-width: 997px) {
    .plus__wrapper {
      left: 2.6px;
    }
  }
  @media only screen and (min-width: 1024px) {
    width: 80%;

    .product__left,
    .product__right {
      p {
        font-size: 1.2rem;
        width: 70%;
        margin: 1rem auto;
      }
      &__logo {
        width: 200px;
      }
    }
    .product__left {
      &__img {
        width: 235px;
        margin-top: 1.5rem;
      }
    }
    .product__right {
      &__img {
        width: 215px;
        margin-top: 2.5rem;
      }
    }
    .plus__wrapper {
      left: 2.8px;
      .plus {
        div {
          width: 36px;
        }
      }
    }
  }

  @media only screen and (min-width: 1128px) {
    .plus__wrapper {
      left: 3.5px;
    }
  }
  @media only screen and (min-width: 1214px) {
    .plus__wrapper {
      left: 6.5px;
    }
  }
  @media only screen and (min-width: 1230px) {
    .plus__wrapper {
      left: 6.5px;
    }
  }
  @media only screen and (min-width: 1280px) {
    width: 70%;
    .product__right,
    .product__left {
      &__logo {
        width: 240px;
      }
    }
    .plus__wrapper {
      left: 5px;
    }
  }
  @media only screen and (min-width: 1348px) {
    .plus__wrapper {
      left: 6px;
    }
  }
  @media only screen and (min-width: 1420px) {
    .plus__wrapper {
      left: 8px;
    }
  }

  @media only screen and (min-width: 1440px) {
    .plus__wrapper {
      left: 7px;
    }
  }
`;
const LowerProduct = styled.section`
  @media only screen and (min-width: 320px) {
    width: 100%;
    .lower__product {
      width: 90%;
      margin: 0 auto;
      text-align: center;
      &__equals {
        div {
          margin: 0 auto;
          width: 90px;
          height: 20px;
          background: ${(props) => props.theme.blue};
          margin-bottom: 1rem;
        }
      }
      h2 {
        margin: 2rem 0 1.5rem 0;
        font-size: 2rem;
        font-family: "Lubalin-Book";
      }
      h3 {
        font-weight: 100;
        font-size: 1.5rem;
        span {
          font-weight: bold;
        }
      }
      h4 {
        margin: 1rem 0;
        font-size: 1.45rem;
        font-weight: 100;

        span {
          color: ${(props) => props.theme.blue};
          font-weight: bold;
        }
      }
      &__stamp {
        width: 100%;
        div {
          width: 150px;
          margin: 2rem auto;
          padding: 2rem 0;
          background: black;
          border-radius: 100%;
          border: solid 7px ${(props) => props.theme.blue};
          img {
            width: 120px;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 375px) {
    .lower__product {
      &__stamp {
        width: 80%;
        margin: 0 auto;
      }
    }
  }
  @media only screen and (min-width: 414px) {
    .lower__product {
      width: 80%;
    }
  }
  @media only screen and (min-width: 768px) {
    .lower__product {
      width: 80%;
      &__stamp {
        width: 45%;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    .lower__product {
      width: 80%;
      &__stamp {
        width: 30%;
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .lower__product {
      width: 70%;
      &__stamp {
        margin: 4rem auto;
      }
    }
  }
`;
const Regulation = styled.section`
  @media only screen and (min-width: 320px) {
    width: 100%;
    h4 {
      text-align: center;
      padding: 1.5rem 0;
      font-size: 1.5rem;
      font-family: "Lubalin-Book";
    }
    .regulation__wrapper {
      width: 90%;
      margin: 0 auto;
      text-align: left;
      color: white;
      position: relative;
      padding-bottom: 1.5rem;
      &__top,
      &__bottom {
        padding: 2rem;
        height: 25rem;
      }
      &__top {
        background-image: url(${LegalBackground1});
        background-repeat: no-repeat;
        background-size: 180% 150%;
        margin-bottom: 1.5rem;
        p {
          font-size: 0.9rem;
          span {
            color: ${(props) => props.theme.blue};
          }
        }
        h5 {
          padding-top: 2rem;
          font-size: 1rem;
          font-weight: 100;
          width: 65%;
        }
      }
      &__bottom {
        background-image: url(${LegalBackground2});
        background-repeat: no-repeat;
        background-size: 104% 105%;
        position: relative;
        h5 {
          padding-top: 0.5rem;
          font-size: 1.1rem;
          font-weight: 100;
        }
        p {
          margin: 1rem 0;
          font-weight: bold;
          font-size: 0.9rem;
          width: 70%;
          span {
            color: ${(props) => props.theme.blue};
          }
        }
        h6 {
          margin-top: 2rem;
          width: 35%;
          font-size: 0.95rem;
          font-weight: 100;
        }
        &__float {
          position: absolute;
          bottom: 1.5em;
          right: 0.01rem;
          z-index: 5;
          width: 25%;
          font-size: 0.9rem;
        }
      }

      &__img {
        position: absolute;
        top: calc(0% + 25rem);
        left: calc(0% + 10rem);
        img {
          width: 120px;
          transform: rotate(25deg);
        }
      }
    }
  }
  @media only screen and (min-width: 375px) {
    .regulation__wrapper {
      &__top {
        p {
          font-size: 1rem;
        }
        h5 {
          font-size: 1.2rem;
        }
      }
      &__img {
        top: calc(0% + 25rem);
        left: calc(0% + 12rem);
        img {
          width: 140px;
        }
      }
      &__bottom {
        background-size: 115% 105%;
        h5 {
          font-size: 1.2rem;
        }
        p {
          font-size: 1rem;
        }
        h6 {
          font-size: 0.9rem;
        }
        &__float {
          right: 0.45rem;
          text-align: right;
        }
      }
    }
  }
  @media only screen and (min-width: 414px) {
    /* need to reduce unused CSS */
    h4 {
      font-size: 1.65rem;
    }
    .regulation__wrapper {
      width: 80%;
      &__top {
        p {
          font-size: 1rem;
        }
        h5 {
          font-size: 1.2rem;
        }
      }
      &__img {
        top: calc(0% + 25rem);
        left: calc(0% + 12rem);
        img {
          width: 140px;
        }
      }
      &__bottom {
        background-size: 105% 130%;
        h5 {
          font-size: 1.2rem;
        }
        p {
          font-size: 1rem;
        }
        h6 {
          font-size: 1rem;
        }
        &__float {
          right: 0.35rem;
          text-align: right;
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .regulation__wrapper {
      &__top,
      &__bottom {
        height: 20rem;
        padding: 3rem;
      }
      &__top {
        p {
          font-size: 1.25rem;
          width: 90%;
        }
        h5 {
          font-size: 1.55rem;
        }
      }
      &__bottom {
        h5 {
          font-size: 1.55rem;
        }
        p {
          font-size: 1.25rem;
          width: 55%;
        }
        h6 {
          font-size: 1.25rem;
          width: 50%;
        }
        &__float {
          font-size: 1.1rem;
          width: 20%;
          right: 0.6rem;
        }
      }
      &__img {
        top: calc(0% + 19rem);
        left: calc(0% + 27.5rem);
        img {
          width: 225px;
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    .regulation__wrapper {
      width: 80%;
      &__bottom {
        &__float {
          font-size: 1.3rem;
        }
      }
      &__img {
        left: calc(0% + 35rem);
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .regulation__wrapper {
      width: 70%;
      &__bottom,
      &__top {
        padding: 2.5rem;
      }
      &__top {
        background-size: 150% 145%;
        p {
          width: 70%;
        }
        h5 {
          width: 40%;
        }
      }
      &__bottom {
        background-size: 104% 125%;
        h6 {
          width: 40%;
        }
        &__float {
        }
      }
    }
  }
`;
const ButtonLinks = styled.section`
  @media only screen and (min-width: 320px) {
    width: 100%;
    margin: 1.5rem 0 3rem 0;
    .button__wrapper {
      width: 90%;
      margin: 0 auto;
      &__product {
        width: 170px;
        background: transparent;
        border-radius: 100%;
        border: solid 7px ${(props) => props.theme.blue};
        margin: 0 auto;
        padding: 1.5rem 0;
        height: 6rem;
        color: white;
        text-align: center;
        margin-bottom: 2rem;
        p {
          margin: 0.5rem 0;
          font-size: 0.9rem;
          color: black;
        }
        &__logo {
          margin-top: 1rem;
          width: 150px;
          display: block;
          margin: 0 auto;
        }
        &__product {
          width: 80px;
          margin-top: 0.45rem;
        }
        &__product2 {
          width: 70px;
          margin-top: 0.45rem;
        }
      }
      &__contact {
        width: 170px;
        background: black;
        border-radius: 100%;
        border: solid 7px ${(props) => props.theme.blue};
        margin: 0 auto 1.25rem auto;
        padding: 1.5rem 0;
        height: 6rem;
        color: white;
        text-align: center;
        p {
          width: 90%;
          margin: 2rem auto;
          font-size: 1.2rem;
        }
      }
    }
  }
  @media only screen and (min-width: 375px) {
    .button__wrapper {
      &__product,
      &__contact {
        width: 160px;
      }
    }
  }
  @media only screen and (min-width: 414px) {
    .button__wrapper {
      &__product,
      &__contact {
        width: 180px;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .button__wrapper {
      display: flex;
      width: 80%;
      justify-content: space-between;
      &__product,
      &__contact {
        width: 160px;
      }
      &__contact {
        p {
          margin: 1.75rem auto;
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    .button__wrapper {
      justify-content: space-evenly;
    }
  }
  @media only screen and (min-width: 1280px) {
    .button__wrapper {
      width: 60%;
      &__product,
      &__contact {
        height: 7rem;
        width: 190px;
      }
      &__contact {
        P {
          font-size: 1.5rem;
        }
      }
      &__product {
        &__product {
          margin-top: 0.5rem;
          width: 80px;
        }
        &__product2 {
          width: 80px;
        }
      }
    }
  }
`;

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <Background></Background>
    <HomePageWrapper>
      <TitleSection>
        <h1>
          A <span>technology breakthrough</span> that changes what's possible.
        </h1>
      </TitleSection>
      <ProductSection>
        <div className="product__left">
          <img
            className="product__left__logo"
            src={ZanoHubLogoReverse}
            alt="Zano Hub Logo"
          />
          <p>
            The world's first 80,000hz LED driver, eliminating light flicker for
            good.
          </p>
          <img className="product__left__img" src={Product1} alt="Zano Hub" />
          {/* <div className="product__left__img__wrapper">
            <ZanoMicrochip />
          </div> */}
        </div>
        <div className="product__right">
          <img
            className="product__right__logo"
            src={ZanoUltraLogoReverse}
            alt=" Zano Ultra Logo"
          />
          <p>the next generation in smart, integrated lighting control</p>
          <img
            className="product__right__img"
            src={Product2}
            alt="Zano Ultra"
          />
        </div>
        <section className="plus__wrapper">
          <section className="plus">
            <div></div>
            <div></div>
          </section>
        </section>
      </ProductSection>
      <LowerProduct>
        <div className="lower__product">
          <div className="lower__product__equals">
            <div></div>
            <div></div>
          </div>
          <h2>Total lighting control</h2>
          <h3>
            Brought to you by the team that introduced the <span>first </span>
            digital dimmer, the <span>first </span> off the shelf multi-point
            dimming solution and the <span>first </span>
            product that can dim between 0-1000W/VA LED.
          </h3>
          <h4>
            <span>Tried and tested Zano technology:</span> offering your
            customer high-end lighting control without the huge investment.
          </h4>
          <div className="lower__product__stamp">
            <div>
              <img src={TemplateLogo} alt="Zano Logo" />
            </div>
          </div>
        </div>
      </LowerProduct>
      <Regulation>
        <h4>And it's perfect timing...</h4>
        <div className="regulation__wrapper">
          <div className="regulation__wrapper__top">
            <p>
              <span>
                From 1st September 2021 a new EU directive comes into force
                stating that there is a maximum level of allowable flicker from
                an LED light source. It is now recognised that flicker has a
                negative effect on the human nervous system.
              </span>{" "}
              The majority of LEDs currently being sold do not comply with the
              new regulations to eliminate flicker. Light fittings sold from the
              1st September 2021 must comply <br /> with the new regulations.
            </p>
            <p></p>
            <h5>Zano Ultra eliminates flicker completely.</h5>
          </div>
          <div className="regulation__wrapper__bottom">
            <h5>Why does this matter? </h5>
            <p>
              “It is certain that the alternating component (flicker)
              <span>
                {" "}
                has a negative effect on the nervous system of Humans
              </span>{" "}
              the alternating component is a stress load for the nervous system”
            </p>
            <h6>Peter Erwin, European Directive study, LED Professional.com</h6>
            <span className="regulation__wrapper__bottom__float">
              Flicker caused by drivers is wreaking havoc on our health.
            </span>
          </div>
          <div className="regulation__wrapper__img">
            <img src={Product1} alt="Zano Controller" />
          </div>
        </div>
      </Regulation>
      <ButtonLinks>
        <div className="button__wrapper">
          <div className="button__wrapper__product">
            <Link to="/zano-ultra">
              <p>Learn more </p>
              <img
                className="button__wrapper__product__logo"
                src={ZanoUltraLogo}
                alt="Zano Logo"
              />
              <img
                className="button__wrapper__product__product"
                src={Product1}
                alt=""
              />
            </Link>
          </div>
          <Link to="/contact">
            <div className="button__wrapper__contact">
              <p>Contact us now</p>
            </div>
          </Link>
          <div className="button__wrapper__product">
            <Link to="/zano-hub">
              <p>Learn more </p>
              <img
                className="button__wrapper__product__logo"
                src={ZanoHubLogo}
                alt="Zano Logo"
              />
              <img
                className="button__wrapper__product__product2"
                src={Product2}
                alt=""
              />
            </Link>
          </div>
        </div>
      </ButtonLinks>
    </HomePageWrapper>
  </Layout>
);

export default IndexPage;
