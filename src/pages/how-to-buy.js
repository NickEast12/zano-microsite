import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import Background from "../components/background";
import ContactButton from "../components/contact-button";

import ZanoChip from "../images/Zano-Microchip-v1.png";
import ZanoHub from "../images/Zanohub.png";

const MainWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  @media only screen and (min-width: 1024px) {
    width: 80%;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;
const MainSection = styled.section`
  @media only screen and (min-width: 320px) {
    width: 90%;
    margin: 0 auto;
    text-align: center;
    div {
      h1 {
        font-family: "Lubalin-Book";
        padding: 2rem 0;
      }
      .chip {
        width: 150px;
        margin-bottom: 1rem;
      }
      .blue {
        color: ${(props) => props.theme.blue};
        font-weight: 100;
        padding-bottom: 1rem;
      }
      h3 {
        font-weight: 100;
        span {
          color: ${(props) => props.theme.blue};
        }
      }
      p {
        font-size: 1rem;
        margin: 1rem 0;
        span {
          color: ${(props) => props.theme.blue};
          font-weight: bolder;
        }
      }
      h4 {
        font-size: 1rem;
        margin-top: 1.5rem;
        font-family: "Lubalin-Book";
      }
      .hub {
        width: 150px;
        margin-top: 1.5rem;
      }
      .lower {
        margin-top: 2rem;
        font-weight: 100;
      }
    }
  }
  @media only screen and (min-width: 414px) {
    width: 80%;
  }
  @media only screen and (min-width: 768px) {
    width: 70%;
    div {
      .chip {
        width: 200px;
      }
      .hub {
        width: 170px;
      }
      h3 {
        font-size: 1.7rem;
      }
      h4 {
        font-size: 1.2rem;
      }
    }
  }
`;

const HowToBuy = (props) => {
  return (
    <Layout>
      <SEO title="How to buy" />
      <Background />
      <MainWrapper>
        <MainSection>
          <div>
            <h1>How do I buy?</h1>
            <img className="chip" src={ZanoChip} alt="Zano Hub" />
            <h3 className="blue">
              We will sell a licence for the Zano Ultra microprocessor.
            </h3>
            <h3>
              Manufacturers can then embed this revolutionary technology into
              their designs.
            </h3>
            <p>
              These microprocessors will be pre-programmed at manufacturing
              stage and shipped out to the customers manufacturing plant to be
              installed into their new LED drivers. They will have{" "}
              <span> ZANO 868 </span> embedded into them which will allow for
              communication and remote software upgrades.
            </p>
            <h4>
              Through this new technology users can then access the Zano Hub.
            </h4>
            <img className="hub" src={ZanoHub} alt="Zano Hub" />
            <h3 className="lower">
              As a specialist in lighting control we understand the requirements
              and regulations for lighting in the UK,{" "}
              <span>
                making us the perfect partner in your manufacturing process.{" "}
              </span>
            </h3>
          </div>
        </MainSection>
        <ContactButton />
      </MainWrapper>
    </Layout>
  );
};

export default HowToBuy;
