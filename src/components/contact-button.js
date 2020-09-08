import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";

const ContactButtonStyles = styled.div`
  width: 160px;
  padding: 4rem 0;
  margin: 0 auto;
  div {
    background: black;
    border: solid 5px ${(props) => props.theme.blue};
    color: white;
    text-align: center;
    align-items: center;
    padding: 2.25rem 0;
    border-radius: 100%;
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
