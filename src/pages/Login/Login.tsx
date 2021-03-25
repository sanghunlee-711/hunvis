import React, { useState, useEffect, ReactElement } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../common/interface";
import { navActions } from "../Nav/state";

const Login = () => {
  const [idVal, setIdVal] = useState("");
  const [pwVal, setPwVal] = useState("");
  const dispatch = useDispatch();
  const modalBool = useSelector((state: RootState) => state.nav.modal);
  const inputId = useSelector((state: RootState) => state.nav.loginData.id);
  const inputPw = useSelector((state: RootState) => state.nav.loginData.pw);

  const onChangeHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;

    switch (name) {
      case "id":
        dispatch(navActions.getId(value));
        break;
      case "pw":
        dispatch(navActions.getPw(value));
        break;
      default:
        console.log("Invalid!");
    }
  };

  return (
    <LoginModalContainer>
      <button
        onClick={() => {
          dispatch(navActions.loginModal(modalBool));
        }}
      >
        QUIT
      </button>
      <LoginContainer>
        <input
          name="id"
          onChange={(e) => onChangeHanlder(e)}
          value={inputId}
        ></input>
        <input
          name="pw"
          onChange={(e) => onChangeHanlder(e)}
          value={inputPw}
        ></input>
        <ButtonWrapper>
          <button
            onClick={() => {
              dispatch(navActions.postLogin());
            }}
          >
            login
          </button>
          <button>register</button>
        </ButtonWrapper>
      </LoginContainer>
    </LoginModalContainer>
  );
};

const LoginModalContainer = styled.section`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  z-index: 100;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;
export default Login;
