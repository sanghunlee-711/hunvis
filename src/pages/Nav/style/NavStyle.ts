import styled from "styled-components";

export const NavContainer = styled.nav`
  color: black;
  width: 100vw;
  min-height: 50px;
  height: 10vh;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 1000;
`;

export const NavWrapper = styled.ul`
  width: 80%;
  min-width: 1025px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    width: 30%;
    font-size: 2rem;
    text-transform: capitalize;
    &:hover {
      color: gray;
    }

    button {
      min-width: 40px;
      min-height: 30px;
      border: 1px solid black;
      background-color: white;
      transition: color 0.5s ease-in-out;
      &:hover {
        color: white;
        background-color: black;
      }
    }
  }
`;
