import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { NAV_DATA } from "../../common/constant";
import { NavWrapper } from "./style/NavStyle";
import Login from "../Login/Login";
import { RootState } from "../../common/interface";
import { navActions } from "./state/index";
import styled from "styled-components";

const Nav: React.FC = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();
  const modalBool = useSelector((state: RootState) => state.nav.modal);
  let refElement = useRef<HTMLElement>(null);

  const onClickHandler = () => {
    console.log("Hello");
  };

  return (
    <NavContainer onClick={() => onClickHandler()}>
      <NavWrapper>
        {NAV_DATA.map((el) => (
          <li onClick={() => history.push(el === "home" ? "/" : `/${el}`)}>
            {el}
          </li>
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
      {modalBool ? <Login /> : ""}
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  color: black;
  width: 100vw;
  min-height: 50px;
  height: 10vh;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  background-color: white;
  z-index: 1000;
`;

export default Nav;
