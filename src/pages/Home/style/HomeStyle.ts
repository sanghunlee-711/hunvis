import styled from "styled-components";

const FallingContainer = styled.section`
  margin: auto;
  width: 80vw;
  height: 100%;
  /* background: radial-gradient(#333, #000); */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    height: 80vh;
    text-align: center;
    color: #fff;
    font-size: 8em;
    text-transform: uppercase;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50px;
  left: 0;
  right: 0;
  pointer-events: none;
  overflow: hidden;
  i {
    position: absolute;
    display: block;
    color: black;

    &:nth-child(1) {
      left: 20%;
      animation-name: animate;
      animation: animate 15s linear infinite;
      animation-delay: -7s;
    }
    &:nth-child(2) {
      left: 40%;
      animation-name: animate;
      animation: animate 15s linear infinite;
      animation-delay: -5s;
    }
    &:nth-child(3) {
      left: 60%;
      animation-name: animate;
      animation: animate 15s linear infinite;
      animation-delay: -7s;
    }
    &:nth-child(4) {
      left: 80%;
      animation-name: animate;
      animation: animate 15s linear infinite;
      animation-delay: -5s;
    }
    &:nth-child(5) {
      left: 100%;
      animation-name: animate;
      animation: animate 10s linear infinite;
      animation-delay: -10s;
    }
    &:nth-child(6) {
      left: 0%;
      animation-name: animate;
      animation: animate 15s linear infinite;
      animation-delay: -4s;
    }
    &:nth-child(7) {
      left: 20%;
      animation-name: animate;
      animation: animate 20s linear infinite;
      animation-delay: -4s;
    }
    &:nth-child(8) {
      left: -20%;
      animation-name: animate;
      animation: animate 20s linear infinite;
      animation-delay: -4s;
    }
    &:nth-child(9) {
      left: 40%;
      animation-name: animate;
      animation: animate 10s linear infinite;
      animation-delay: -7s;
    }
    &:nth-child(10) {
      left: 60%;
      animation-name: animate;
      animation: animate 10s linear infinite;
      animation-delay: -7s;
    }
    &:nth-child(11) {
      left: 80%;
      animation-name: animate;
      animation: animate 10s linear infinite;
      animation-delay: -7s;
    }
    &:nth-child(12) {
      left: 100%;
      animation-name: animate;
      animation: animate 10s linear infinite;
      animation-delay: -7s;
    }
    &:nth-child(13) {
      left: 20%;
      animation-name: animate;
      animation: animate 10s linear infinite;
      animation-delay: -7s;
    }

    @keyframes animate {
      0% {
        opacity: 0;
        top: -10%;
        transform: translateX(20px) rotate(0deg);
      }
      10% {
        opacity: 1;
      }
      20% {
        transform: translateX(-20px) rotate(45deg);
      }
      40% {
        transform: translateX(20px) rotate(90deg);
      }
      60% {
        transform: translateX(-20px) rotate(180deg);
      }
      80% {
        transform: translateX(-40px) rotate(180deg);
      }
      100% {
        top: 110%;
        transform: translateX(0px) rotate(225deg);
      }
    }
  }
`;

export { FallingContainer, ImageWrapper };
