import React from "react";
import styled from "styled-components";

import BackgroundMobile from "../images/background-mobile.jpg";
import BackgroundDesktop from "../images/background-desktop.jpg";

const BackgroundStyle = styled.div`
  @media only screen and (min-width: 320px) {
    position: absolute;
    z-index: -5;
    top: -9rem;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${BackgroundMobile});
    background-repeat: no-repeat;
    background-size: contain;
    background-attachment: fixed;
  }
  @media only screen and (min-width: 1280px) {
    background-image: url(${BackgroundDesktop});
    background-size: contain;
    background-attachment: fixed;
  }
`;

const Background = () => {
  return <BackgroundStyle></BackgroundStyle>;
};

export default Background;
