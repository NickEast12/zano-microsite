import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";

const ContactButtonStyles = styled.div`
  width: 100%;
  padding: 3rem 0;
  margin: 0 auto;
  div {
    margin: 0 auto;
    width: 130px;
    background: black;
    border: solid 5px ${(props) => props.theme.blue};
    color: white;
    text-align: center;
    align-items: center;

    border-radius: 100%;
    p {
      padding: 2rem 0;
    }
  }
`;

const ContactButton = () => {
  return (
    <div>
      <Link to="/contact">
        <ContactButtonStyles>
          <div>
            <p>Contact us now</p>
          </div>
        </ContactButtonStyles>
      </Link>
    </div>
  );
};

export default ContactButton;
