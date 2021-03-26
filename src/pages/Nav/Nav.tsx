import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { NAV_DATA } from "../../common/constant";
import { NavContainer, NavWrapper } from "./style/NavStyle";
import Login from "../Login/Login";
import { RootState } from "../../common/interface";
import { navActions } from "./state/index";

const Nav: React.FC = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();
  const modalBool = useSelector((state: RootState) => state.nav.modal);
  let refElement = useRef<HTMLElement>(null);
  let scroll = window.scrollY;

  useEffect(() => {
    checkFunc();
  }, [refElement.current?.scrollTop]);

  const checkFunc = () => {
    console.log(`scrollY: ${scroll}`);
    console.log(refElement.current?.clientHeight);
    if (scroll >= 0) {
    }
    console.log("HEllo");
  };

  return (
    <NavContainer ref={refElement} onClick={() => checkFunc()}>
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

export default Nav;
