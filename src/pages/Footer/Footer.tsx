import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FOOTER_DATA } from "../../common/constant";

const Footer: React.FC = (): JSX.Element => {
  // const footerData = {
  //   github: "https://github.com/sanghunlee-711",
  //   instagram: "https://www.instagram.com/hun__hoon/",
  //   phone: "01092082770",
  //   email: "cloudlee711@gmail.com",
  // };

  return (
    <FooterContainer>
      <FooterWrapper>
        {Object.keys(FOOTER_DATA).map((footer, index) => (
          <li>
            <a
              href={
                (Object.values(FOOTER_DATA)[index] as string) ===
                "cloudlee711@gmail.com"
                  ? "mailto:cloudlee711@gmail.com"
                  : Object.values(FOOTER_DATA)[index]
              }
              target="_blank"
              rel="noreferrer"
              type="mail"
            >
              <i className={footer}></i>
            </a>
          </li>
        ))}
      </FooterWrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  border-top: 1px solid black;
  /* position: absolute;
  bottom: 0;
  left: 0;
  right: 0; */
  height: 10vh;
  min-height: 80px;
  display: flex;
  align-items: center;
`;

const FooterWrapper = styled.ul`
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    width: 30%;
    list-style: none;

    a {
      font-size: 1.2rem;
      text-decoration: none;
      color: black;
      text-transform: capitalize;
    }
  }
`;

export default Footer;
