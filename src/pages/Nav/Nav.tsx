import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { NAV_DATA } from "../../common/constant";
import { NavWrapper } from "./style/NavStyle";
import { LoginMemo } from "../Login/Login";
import { RootState } from "../../common/interface";
import { navActions } from "./state/index";
import styled from "styled-components";

const Nav: React.FC = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();
  const modalBool = useSelector((state: RootState) => state.nav.modal);
  const aboutScroll = useSelector((state: RootState) => state.nav.aboutScroll);
  let refElement = useRef<HTMLElement>(null);

  const handlePush = (el: string) => {
    if (el === "home") {
      history.push("/");
    } else if (el === "about" && history.location.pathname === "/") {
      scrollAbout();
    } else if (history.location.pathname === "/post") {
      history.push("/");
      scrollAbout();
    } else {
      history.push(`/${el}`);
    }
  };

  const scrollAbout = () => {
    console.log(aboutScroll);
    window.scrollTo({
      top: aboutScroll,
      behavior: "smooth",
    });
  };

  return (
    <NavContainer ref={refElement}>
      <NavWrapper>
        {NAV_DATA.map((el) => (
          <li onClick={() => handlePush(el)}>{el}</li>
        ))}
        <li>
          <button
            onClick={() => {
              dispatch(navActions.loginModal(modalBool));
            }}
          >
            LOGIN/REGISTER
          </button>
        </li>
      </NavWrapper>
      {modalBool ? <LoginMemo /> : ""}
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  color: black;
  width: 100vw;
  height: 0vh;
  height: 10vh;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  background-color: white;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  visibility: visible;
`;

export const NavMemo = React.memo(Nav);
