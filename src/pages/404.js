import React from "react";

import AltLayout from "../components/altLayout";
import SEO from "../components/seo";
import styled from "styled-components";

import Gif from "../images/404.gif";

const ErrorWrapper = styled.section`
  @media only screen and (min-width: 320px) {
    .background {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      img {
        width: 100%;
        height: 100%;
      }
      &:after {
        width: 100%;
        height: 100%;

        top: 0;
        left: 0;
        background: black;
        opacity: 0.5;
        position: absolute;
        content: "";
      }
    }
    .content {
      color: white;
      width: 80%;
      margin: 0 auto;
      text-align: center;
      padding: 2.5rem 0 20rem 0;
      h1 {
        font-family: "Lubalin-Book";
        color: ${(props) => props.theme.blue};
        font-size: 2.5rem;
      }
    }
  }
  @media only screen and (min-width: 375px) {
    .content {
      padding-bottom: 28.5rem;
    }
  }
  @media only screen and (min-width: 414px) {
    .content {
      padding-bottom: 32.5rem;
    }
  }
`;

const NotFoundPage = () => (
  <AltLayout>
    <SEO title="404: Not found" />
    <ErrorWrapper>
      <div className="background">
        <img src={Gif} alt="" />
      </div>
      <div className="content">
        <h1>Whooops!</h1>
        <h2>404 Page not found</h2>
      </div>
    </ErrorWrapper>
  </AltLayout>
);

export default NotFoundPage;
