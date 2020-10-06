import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import { ThemeProvider, createGlobalStyle } from "styled-components";

import Header from "./header";
import Footer from "./footer";
import titleFont from "../assets/fonts/Lubalin_Graph_Book.ttf";
import bodyFont from "../assets/fonts/ITC-Avant-Garde-Gothic-LT-Book-Regular.otf";

const theme = {
  black: "#000",
  blue: "rgb(75, 173, 209)",
};
const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Lubalin-Book";
  src: url(${titleFont});
}
@font-face {
  font-family: "Avant";
  src: url(${bodyFont});

}

  *, *:before, *:after {
      /* box-sizing: border-box; */
      margin: 0px;
      padding: 0px;
      -webkit-font-smoothing: antialiased;
    }
    body {
      margin: 0;
      padding: 0;
      font-size: 1.25rem; 
      position: relative;
      font-family: 'Avant', sans-serif;
    }
    a:visited {
      color: inherit;
    }
    a {
      color: inherit;
      text-decoration: none;
      
    }
    a[aria-current="page"] {
      color: ${(props) => props.theme.blue}!important;
      font-weight: 900;

    }
    a:-webkit-any-link {
      text-decoration: none!important;
    }
    p {
      line-height: 1.3;
    }

`;
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
          <Footer></Footer>
        </div>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
