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
        <Title>LOGIN/REGISTER</Title>
        <InputWrapper>
          <input
            id="id"
            name="id"
            onChange={(e) => onChangeHanlder(e)}
            value={inputId}
            placeholder="Type Your ID"
          ></input>

          <input
            name="pw"
            onChange={(e) => onChangeHanlder(e)}
            value={inputPw}
            type="password"
            placeholder="Type Your PW"
          ></input>
        </InputWrapper>
        <ButtonWrapper>
          <Button
            onClick={() => {
              dispatch(navActions.postLogin());
            }}
          >
            login
          </Button>
          <Button>register</Button>
        </ButtonWrapper>
      </LoginContainer>
    </LoginModalContainer>
  );
};

const Title = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
`;

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
  justify-content: center;
  align-items: center;
  width: 70%;
  input {
    width: 100%;
    min-height: 40px;
    margin: 1vh 0;
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
  flex-direction: column;
  width: 70%;
`;

const Button = styled.button`
  background-color: white;
  border: 1px solid black;
  background-color: white;
  font-size: 1.2rem;
  margin: 0.4vh 0;
  transition: all 0.5s ease-in-out;
  text-transform: uppercase;
  width: 100%;
  height: 100%;
  padding: 1vh;
  &:hover {
    color: white;
    background-color: black;
    border: 1px solid white;
  }
`;

const QuitButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  border: none;
  background-color: white;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
export default Login;
