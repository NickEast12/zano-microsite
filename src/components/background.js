import React from "react";
import styled from "styled-components";

import BackgroundImage from "../images/Main-Background.jpg";

const BackgroundStyle = styled.div`
  @media only screen and (min-width: 320px) {
    position: absolute;
    z-index: -5;
    top: -9rem;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
  @media only screen and (min-width: 1280px) {
    background-size: 100% 100%;
    background-attachment: fixed;
  }
`;

const Background = () => {
  return <BackgroundStyle></BackgroundStyle>;
};

export default Background;
