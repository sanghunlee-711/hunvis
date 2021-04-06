import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../common/interface";
import { navActions } from "../../Nav/state";

interface RegisterProps {
  toRegister: boolean;
  onClickHanlder: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Register: React.FC<RegisterProps> = ({
  toRegister,
  onClickHanlder,
}): JSX.Element => {
  const dispatch = useDispatch();
  const modalBool = useSelector((state: RootState) => state.nav.modal);
  const inputId = useSelector((state: RootState) => state.nav.loginData.id);
  const inputPw = useSelector((state: RootState) => state.nav.loginData.pw);
  // const sendURL = useSelector((state: RootState) => state.nav.url);

  useEffect(() => {
    dispatch(navActions.setURL("THIS IS REGISTER URL TEST2"));
  }, []);

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
    <RegisterContainer>
      <QuitButton
        onClick={() => {
          dispatch(navActions.loginModal(modalBool));
        }}
      >
        <i className="far fa-times-circle fa-3x"></i>
      </QuitButton>
      <BackButton
        name="register"
        onClick={(e) => {
          onClickHanlder(e);
        }}
      >
        <i className="fas fa-arrow-circle-left fa-3x"></i>
      </BackButton>
      <Title>REGISTER</Title>
      <InputWrapper>
        <input
          type="text"
          placeholder="Input Your Own ID"
          id="id"
          name="id"
          onChange={(e) => onChangeHanlder(e)}
          value={inputId}
        />
        <input
          type="text"
          placeholder="Input Your Own PassWord"
          name="pw"
          onChange={(e) => onChangeHanlder(e)}
          value={inputPw}
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button
          onClick={() => {
            console.log("WORKD?");
            dispatch(navActions.postLogin());
          }}
        >
          Register!
        </Button>
      </ButtonWrapper>
    </RegisterContainer>
  );
};

const RegisterContainer = styled.div`
  position: relative !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid black;
  width: 50%;
  height: 50%;
  transition: all 0.5s ease-in-out;
`;
const Title = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
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

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
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

const BackButton = styled(QuitButton)`
  left: 10px;
  top: 10px;
`;

export default Register;
