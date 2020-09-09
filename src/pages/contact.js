import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import Background from "../components/background";

import BoxBackground from "../images/Zano-hub-background.png";
import ZanoChip from "../images/Zano-Microchip-v1.png";
import ZanoHub from "../images/Zanohub.png";

import FacebookIcon from "../assets/facebook.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import TwitterIcon from "../assets/twitter.svg";

const MainSection = styled.section`
  @media only screen and (min-width: 320px) {
    width: 90%;
    margin: 0 auto;
    text-align: center;
    .contact__wrapper {
      h1 {
        font-family: "Lubalin-Book";
        padding: 2rem 0;
      }
      &__box {
        background-image: url(${BoxBackground});
        background-size: 100% 150%;
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
          margin: 2rem auto 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          text-align: center;
          &__chip {
            img {
              width: 100px;
            }
          }
          &__hub {
            img {
              width: 95px;
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
  @media only screen and (min-width: 768px) {
    .contact__wrapper {
      &__box {
        padding: 3rem;
        &__content {
          font-size: 1.3rem;
        }
        &__email {
          font-size: 1.25rem;
        }
        &__grid {
          margin-top: 0;
          &__chip {
            img {
              width: 150px;
            }
          }
          &__hub {
            img {
              width: 140px;
            }
          }
          &__plus {
            margin: 2.5rem 55% 0 auto;

            div {
              width: 18px;
              height: 70px;
            }
          }
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    width: 70%;
    .contact__wrapper {
      &__box {
        padding: 4rem 0;
        &__content {
          font-size: 1.5rem;
        }
        &__email {
          font-size: 1.5rem;
        }
        &__grid {
          margin-top: 2rem;
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .contact__wrapper {
      &__box {
        height: 15rem;
        &__grid {
          width: 80%;
          margin: 3.5rem auto 0 auto;
          &__chip {
            img {
              width: 200px;
            }
          }
          &__hub {
            img {
              width: 190px;
            }
          }
          &__plus {
            margin: 5.5rem 55% 0 auto;

            div {
              height: 100px;
            }
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
      margin: 2rem 0 1rem 0;
    }
    .icons {
      width: 70%;
      margin: 0 auto;
      display: flex;
      justify-content: space-evenly;
      text-align: center;
      align-content: center;
      align-items: center;
      div {
        margin: 1.5rem 0;
      }
      svg {
        width: 25px;

        fill: ${(props) => props.theme.blue};
      }
    }
  }
  @media only screen and (min-width: 414px) {
    width: 80%;
  }
  @media only screen and (min-width: 768px) {
    .equals {
      height: 70px;
    }
    .icons {
      width: 30%;
    }
  }
  @media only screen and (min-width: 1024px) {
    margin-top: 4rem;
    padding-bottom: 15rem;
  }
  @media only screen and (min-width: 1280px) {
    .equals {
      margin-top: 6rem;
      div {
        width: 100px;
      }
    }
  }
`;

const MainWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;

const Contact = (props) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Background />
      <MainWrapper>
        <MainSection>
          <div className="contact__wrapper">
            <h1>Want to know more?</h1>
            <div className="contact__wrapper__box">
              <p className="contact__wrapper__box__content">
                For more information contact Jenny Knighting
              </p>
              <p className="contact__wrapper__box__email ">
                <a href="mailto:jenny.knighting@zanocontrols.co.uk">
                  jenny.knighting@zanocontrols.co.uk
                </a>
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
          <div className="icons">
            <div>
              <FacebookIcon />
            </div>
            <div>
              <LinkedinIcon />
            </div>
            <div>
              <TwitterIcon />
            </div>
          </div>
        </LowerSection>
      </MainWrapper>
    </Layout>
  );
};

export default Contact;
