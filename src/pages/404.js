import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";

import Gif from "../images/404.gif";

const ErrorWrapper = styled.section`
  .background {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
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
    text-align: center;
  }
`;

const NotFoundPage = () => (
  <Layout>
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
  </Layout>
);

export default NotFoundPage;
