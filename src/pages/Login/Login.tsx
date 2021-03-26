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
      <LoginContainer>
        <QuitButton
          onClick={() => {
            dispatch(navActions.loginModal(modalBool));
          }}
        >
          <i className="far fa-times-circle fa-3x"></i>
        </QuitButton>
        <InputWrapper>
          <div>
            <label htmlFor="id">ID</label>
            <input
              id="id"
              name="id"
              onChange={(e) => onChangeHanlder(e)}
              value={inputId}
            ></input>
          </div>
          <div>
            <label htmlFor="pw">PW</label>
            <input
              name="pw"
              onChange={(e) => onChangeHanlder(e)}
              value={inputPw}
            ></input>
          </div>
        </InputWrapper>
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
  background-color: transparent;
  z-index: 100;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    label {
      margin-right: 5px;
    }
  }
  input {
    width: 100%;
  }
`;

const LoginContainer = styled.div`
  position: relative !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid black;
  width: 50%;
  height: 50%;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const QuitButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  border: none;
  background-color: white;
`;
export default Login;
