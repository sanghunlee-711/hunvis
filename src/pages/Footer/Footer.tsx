import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer: React.FC = (): JSX.Element => {
  const [footerLinkList, setFooterList] = useState([
    "github",
    "velog",
    "instagram",
    "phone",
    "email",
  ]);
  const test = {
    github: "https://github.com/sanghunlee-711",
    instagram: "https://www.instagram.com/hun__hoon/",
    phone: "01092082770",
    email: "cloudlee711@gmail.com",
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        {footerLinkList.map((footer) => (
          <li>
            <a href="https://github.com/sanghunlee-711">{footer}</a>
          </li>
        ))}
      </FooterWrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  border-top: 1px solid black;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20vh;
  min-height: 100px;
`;

const FooterWrapper = styled.ul`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    list-style: none;
  }
`;

export default Footer;
