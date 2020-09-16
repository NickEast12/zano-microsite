import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

import styled from "styled-components";

import DesktopNavbar from "./desktopHeader";

import HeaderBackground from "../images/Footer-Background.jpg";
import ZanoLogo from "../images/ZANO-LOGO-BLACK.png";

const MobileHeader = styled.header`
  @media only screen and (min-width: 320px) {
    ul {
      text-align: center;
      padding: 1em 0;
      align-items: center;
      list-style: none;
      position: relative;
      li {
        img {
          width: 100px;
        }
        &:nth-child(1) {
          flex-grow: 5;
        }
        &:nth-child(2) {
          position: absolute;
          top: calc(0% + 2.35rem);
          right: calc(0% + 1.25rem);
        }
      }
    }
  }
  @media only screen and (min-width: 414px) {
    ul {
      li {
        img {
          width: 110px;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
const StyledBurger = styled.div`
  @media only screen and (min-width: 320px) {
    width: 100%;
    height: 2rem;
    text-align: right;
    margin-top: -0.65rem;
    display: flex;
    justify-content: space-evenly;
    flex-flow: column nowrap;
    position: relative;
    z-index: 100000;
    position: relative;

    div {
      width: 2rem;
      height: 2px;
      background-color: ${(props) => props.theme.blue};
      transform-origin: 3.3px;
      transition: all 0.35s ease;
      &:nth-child(1) {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }
      &:nth-child(2) {
        transform: ${({ open }) =>
          open ? "translateX(100%)" : "translateX(0)"};
        opacity: ${({ open }) => (open ? 0 : 1)};
      }
      &:nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;
const MobileMenu = styled.header`
  width: 100%;
  background: black;
  /* background-image: url(${HeaderBackground}); */
  background-size: 100%;
  transition: all 0.6s ease;
  display: ${({ open }) => (open ? "block" : "none")};
  div {
    width: 50%;
    margin: 0 auto;
    text-align: center;
    color: white;
    ul {
      list-style: none;
      padding: 1rem 0;
      li {
        padding: 0.75rem 0;
        display: ${({ open }) => (open ? "block" : "none")};
      }
      .contact {
        color: ${(props) => props.theme.blue};
      }
    }
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  @media only screen and (min-width: 1024px) {
    width: 100%;
  }
`;

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false);
  return (
    <HeaderContainer>
      <DesktopNavbar />
      <MobileHeader>
        <ul>
          <li>
            <Link to="/">
              <img src={ZanoLogo} alt="Zano Logo Black" />
            </Link>
          </li>
          <li>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
              <div></div>
              <div></div>
              <div></div>
            </StyledBurger>
          </li>
        </ul>
      </MobileHeader>
      <MobileMenu open={open}>
        <div>
          <ul>
            <li>
              <Link to="/zano-hub">Zano Hub</Link>
            </li>
            <li>
              <Link to="/zano-ultra">Zano Ultra</Link>
            </li>
            <li>
              <Link to="/how-to-buy">How to buy</Link>
            </li>
            <li className="contact">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </MobileMenu>
    </HeaderContainer>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
