import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const Nav: React.FC = (): JSX.Element => {
  const [navData, setNavData] = useState(["home", "about", "post"]);
  const history = useHistory();
  return (
    <NavContainer>
      <NavWrapper>
        {navData.map((el) => (
          <li onClick={() => history.push(el === "home" ? "/" : `/${el}`)}>
            {el}
          </li>
        ))}
        <li>
          <button onClick={() => history.push("/login")}>LOGIN/REGISTER</button>
        </li>
      </NavWrapper>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  color: black;
  width: 100vw;
  min-height: 50px;
  border-bottom: 1px solid black;
`;

const NavWrapper = styled.ul`
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

export default Nav;
