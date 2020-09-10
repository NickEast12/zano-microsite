import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import { ThemeProvider, createGlobalStyle } from "styled-components";

import AltHeader from "./AltHeader";
import Footer from "./footer";

const theme = {
  black: "#000",
  blue: "rgb(75, 173, 209)",
};
const GlobalStyle = createGlobalStyle`

  *, *:before, *:after {
      box-sizing: inherit;
      margin: 0px;
      padding: 0px;
      -webkit-font-smoothing: antialiased;
    font-family: 'Avant';
    }
    body {
      margin: 0;
      padding: 0;
      font-size: 1.25rem; 
      position: relative;
    }
    a:visited {
      color: inherit;
    }
    a {
      color: inherit!important;
    }
    a:-webkit-any-link {
      text-decoration: none!important;
    }
    p {
      line-height: 1.3;
    }

`;
const AltLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AltHeader siteTitle="404: Page not found" />
        <div>
          <main>{children}</main>
          <Footer></Footer>
        </div>
      </ThemeProvider>
    </>
  );
};

AltLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AltLayout;
