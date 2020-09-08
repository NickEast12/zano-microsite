import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import Background from "../components/background";

import BoxBackground from "../images/Zano-hub-background.png";
import ZanoChip from "../images/Zano-Microchip-v1.png";
import ZanoHub from "../images/Zanohub.png";

const MainSection = styled.section`
  @media only screen and (min-width: 320px) {
    width: 90%;
    margin: 0 auto;
    text-align: center;
    .contact__wrapper {
      h1 {
        font-family: "Lubalin";
        padding: 2rem 0;
      }
      &__box {
        background-image: url(${BoxBackground});
        background-size: cover;
        background-repeat: no-repeat;
        padding: 2rem 0;
        color: white;
        height: 9.5rem;

        &__content {
          font-size: 1rem;
          width: 80%;
          margin: 0 auto;
        }
        &__email {
          font-size: 0.9rem;
          padding: 1.5rem 0;
          color: ${(props) => props.theme.blue};
        }
        &__grid {
          width: 95%;
          margin: 1.5rem auto 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          text-align: center;
          &__chip {
            img {
              width: 90px;
            }
          }
          &__hub {
            img {
              width: 80px;
            }
          }
          &__plus {
            z-index: 5;
            margin: 1rem 55% 0 auto;

            div {
              position: absolute;
              width: 12px;
              height: 50px;
              padding: 0;
              background: ${(props) => props.theme.blue};

              &:nth-child(2) {
                transform: rotate(90deg);
                margin-bottom: 0;
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (min-width: 414px) {
    width: 80%;
    .contact__wrapper {
      h1 {
        padding: 3rem 0;
      }
      &__box {
        background-size: 110% 150%;
        height: 10rem;
        &__content {
          font-size: 1.1rem;
        }
        &__email {
          font-size: 1rem;
        }
        &__grid {
          margin-top: 2rem;
          &__chip {
            img {
              width: 100px;
            }
          }
          &__hub {
            img {
              width: 90px;
            }
          }
          &__plus {
            margin-top: 1.5rem;
          }
        }
      }
    }
  }
`;
const LowerSection = styled.section`
  @media only screen and (min-width: 320px) {
    width: 90%;
    margin: 3rem auto 2rem auto;
    text-align: center;

    .equals {
      text-align: center;
      margin: 0 auto;

      div {
        background: ${(props) => props.theme.blue};
        width: 50px;
        height: 15px;
        margin: 0 auto 1rem auto;
      }
    }
    h2 {
      font-family: "Lubalin";
    }
  }
  @media only screen and (min-width: 414px) {
    width: 80%;
  }
`;

const Contact = (props) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Background />

      <MainSection>
        <div className="contact__wrapper">
          <h1>Want to know more?</h1>
          <div className="contact__wrapper__box">
            <p className="contact__wrapper__box__content">
              For more information contact Jenny Knighting
            </p>
            <p className="contact__wrapper__box__email ">
              {" "}
              jenny.knighting@zanocontrols.co.uk
            </p>
            <div className="contact__wrapper__box__grid">
              <div className="contact__wrapper__box__grid__chip">
                <img src={ZanoChip} alt="Zano Chip" />
              </div>
              <div className="contact__wrapper__box__grid__plus">
                <div></div>
                <div></div>
              </div>
              <div className="contact__wrapper__box__grid__hub">
                <img src={ZanoHub} alt="Zano Hub" />
              </div>
            </div>
          </div>
        </div>
      </MainSection>
      <LowerSection>
        <div className="equals">
          <div></div>
          <div></div>
        </div>
        <h2>Total lighting control</h2>
        <p>www.zanocontrol.co.uk</p>
        <p>0345 519 5858</p>
      </LowerSection>
    </Layout>
  );
};

export default Contact;
