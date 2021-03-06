import React from "react";
import styled from "styled-components";

import WhiteLogo from "../images/ZANO-LOGO-WHITE.png";
import FooterBackgroundMobile from "../images/footer-background-mobile.jpg";
import FooterBackgroundDesktop from "../images/footer-background-desktop.jpg";

const FooterStyle = styled.footer`
  @media only screen and (min-width: 320px) {
    background: black;
    color: white;
    width: 100%;
    background-image: url(${FooterBackgroundMobile});
    background-repeat: no-repeat;
    background-size: cover;
    div {
      text-align: center;
      padding: 3rem 0;
      img {
        width: 125px;
      }
      p {
        margin-top: 1rem;
        font-size: 0.9rem;
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    background-image: url(${FooterBackgroundDesktop});
    background-size: 48% auto;
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <div>
        <img src={WhiteLogo} alt="White Zano Logo" />
        <p>&copy; Zano Controls Limited {new Date().getFullYear()}</p>
      </div>
    </FooterStyle>
  );
};

export default Footer;
