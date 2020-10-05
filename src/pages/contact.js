import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import Background from "../components/background";

import ContactImage from "../images/contact-background.png";

import FacebookIcon from "../assets/facebook.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import TwitterIcon from "../assets/twitter.svg";

const MainSection = styled.section`
  @media only screen and (min-width: 320px) {
    width: 90%;
    margin: 0 auto;
    text-align: center;
    .contact__title {
      width: 100%;
      margin: 0 auto;
      text-align: center;
      padding: 2rem 0;
      h1 {
        font-size: 1.5rem;
      }
    }
    .contact__wrapper {
      width: 100%;
      margin: 0 auto;
      position: relative;

      &__img {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        img {
          width: 100%;
          height: 15rem;
        }
      }
      &__inner {
        position: absolute;
        top: 0;
        z-index: 5;
        color: white;
        width: 100%;
        &__content {
          width: 80%;
          padding: 2rem 0;
          margin: 0 auto;
          text-align: center;
          font-size: 1rem;
          .email {
            color: ${(props) => props.theme.blue};
            font-size: 0.8rem;
            padding-top: 1rem;
            a {
              color: inherit;
            }
          }
        }
      }
    }
  }
  @media only screen and (min-width: 375px) {
    .contact__wrapper {
      &__img {
        img {
          height: 18rem;
        }
      }
      &__inner {
        &__content {
          p {
            font-size: 1.1rem;
          }
          .email {
            font-size: 1rem;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 414px) {
    width: 80%;
    .contact__wrapper {
      &__img {
        img {
          height: 22rem;
        }
      }
      &__inner {
        &__content {
          p {
            font-size: 1.2rem;
          }
          .email {
            font-size: 1rem;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .contact__title {
      h1 {
        font-size: 1.75rem;
      }
    }
    .contact__wrapper {
      &__img {
        img {
          height: 22rem;
        }
      }
      &__inner {
        text-align: center;
        width: 100%;
        &__content {
          width: 60%;
          margin: 0 auto;
          text-align: center;
          p {
            font-size: 1.4rem;
          }
          .email {
            font-size: 1.3rem;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    width: 70%;
    .contact__wrapper {
      &__img {
        img {
          height: 25rem;
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .contact__wrapper {
      &__img {
        img {
          height: 30rem;
        }
      }
      &__inner {
        padding-top: 2rem;
      }
    }
  }
`;
const LowerSection = styled.section`
  @media only screen and (min-width: 320px) {
    width: 90%;
    margin: 16.5rem auto 2rem auto;
    text-align: center;
    h2 {
      font-family: "Lubalin-Book";
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
  @media only screen and (min-width: 375px) {
    width: 80%;
    margin-top: 20rem;
  }
  @media only screen and (min-width: 414px) {
    margin-top: 24rem;
  }
  @media only screen and (min-width: 768px) {
    .icons {
      width: 30%;
    }
  }
  @media only screen and (min-width: 1024px) {
    margin-top: 28rem;
    padding-bottom: 18rem;
  }
  @media only screen and (min-width: 1280px) {
    padding-bottom: 5rem;
    margin-top: 33rem;
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

const Contact = (props) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Background />
      <MainWrapper>
        <MainSection>
          <div className="contact__title">
            <h1>Want to know more?</h1>
          </div>
          <div className="contact__wrapper">
            <div className="contact__wrapper__img">
              <img
                src={ContactImage}
                alt="contact page, zano hub and zano ultra"
              />
            </div>
            <div className="contact__wrapper__inner">
              <div className="contact__wrapper__inner__content">
                <p>For more information contact Jenny Knighting</p>
                <p className="email">
                  <a href="mailto:jenny.knighting@zanocontrols.co.uk">
                    jenny.knighting@zanocontrols.co.uk
                  </a>
                </p>
              </div>
            </div>
          </div>
        </MainSection>
        <LowerSection>
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
