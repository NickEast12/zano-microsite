import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import ZanoLogo from "../images/ZANO-LOGO-BLACK.png";

const DesktopHeader = styled.header`
  @media only screen and (min-width: 320px) {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    height: 9rem;
    margin: 0 auto;
    width: 100%;
    display: block;
    width: 100%;
    .scrolling {
      background: white;
      box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
      position: fixed;
      z-index: 10;
      margin: 0;
      padding: 0;
      width: 100%;
      transition: 0.25s background ease;
      .inner__nav__fix {
        width: 85%;
        margin: 0 auto;
      }
    }

    .inner__nav__fix {
      width: 85%;
      margin: 0 auto;

      ul {
        list-style: none;
        padding: 2rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        .header__logo {
          flex-grow: 10;
          text-align: center;
        }

        li {
          font-weight: 100;
          flex-grow: 1;
          transition: all 0.15s ease;
          font-size: 1rem;
          transition: all 0.5s ease;

          a {
            transition: all 0.5s ease;
            color: rgba(0, 0, 0, 0.65);
            &:hover {
              color: ${(props) => props.theme.blue};
              font-weight: 900;
            }
          }
        }
        img {
          width: 150px;
        }
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    width: 100%;
    .normal {
      width: 100%;
      .inner__nav__fix {
        width: 55%;
        max-width: 1440px;
      }
    }

    .scrolling {
      .inner__nav__fix {
        width: 55%;
        max-width: 1440px;
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .normal {
      max-width: 1440px;
      margin: 0 auto;
      .inner__nav__fix {
      }
    }
    .scrolling {
      width: 100%;
      .inner__nav__fix {
        margin: 0 auto;
        max-width: 800px;

        ul {
          padding: 1rem 0;
          li {
            img {
              width: 100px;
            }
          }
        }
      }
    }
  }
`;

export default class DesktopNavbar extends Component {
  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  render() {
    return (
      <DesktopHeader>
        <div className={this.state.isTop ? "normal" : "scrolling"}>
          <div className="inner__nav__fix">
            <ul>
              <li>
                <Link to="/zano-ultra">Zano Ultra</Link>
              </li>
              <li>
                <Link to="/zano-hub">Zano Hub</Link>
              </li>
              <li className="header__logo">
                <Link to="/">
                  <img src={ZanoLogo} alt="Zano Logo Black" />
                </Link>
              </li>
              <li>
                <Link to="/how-to-buy">How to buy</Link>
              </li>
              <li className="header__contact">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </DesktopHeader>
    );
  }
}
