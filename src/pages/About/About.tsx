import React from "react";
import styled from "styled-components";
import selfie from "../../common/img/selfie.jpeg";
import barcenloa from "../../common/img/barcelona.jpeg";

const About: React.FC = (): JSX.Element => {
  return (
    <TextContainer>
      <h2>안녕하세요 프론트엔드 개발자 이상훈입니다</h2>
      <FirstCommentContainer>
        <FirstComment>
          <p>반갑습니다.</p>
          <br />
          <span>활용을 통해 유용함을 만들어 내는 경험을 추구합니다.</span>
          <span>
            실속과 함께 실력을 추구하는 개발자로 성장하기 위해서 노력중입니다.
          </span>
          <br />
          <br />

          <span>
            제품을 직접 구현해내고 그것에 대한 유지, 보수를 위해 끊임없이
            공부하는 이 직업에 매력을 느껴 부트캠프에 등록을 했습니다.
          </span>
          <br />
          <span>개발자라는 직업의 길에 들어서 열심히 성장하고 있습니다 :)</span>
        </FirstComment>
        <Selfie>
          <img src={selfie} alt="selfie" />
        </Selfie>
      </FirstCommentContainer>
      <AboutMe>
        <span>
          자만심을 가지지 않고 항상 모르는 것들에 대한 경계심을 가지며 학습해
          나가는 프론트엔드 개발자 이상훈 입니다.
        </span>
        <span>
          기분이 태도가 되지 않도록 노력하며 커뮤니케이션의 올바른 역할을
          추구하는 팀 협업을 선호합니다.
        </span>
        <span>
          근본적인 지식을 중요시 여기며 가치있는 UI의 구현을 위해 새로운 기술을
          무던하게 받아들이는 태도를 가진 개발자로 성장하기 위해 노력중입니다.
        </span>
      </AboutMe>
    </TextContainer>
  );
};

const BannerContainer = styled.div<{ barcenloa: string }>`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(${barcenloa});
  background-size: cover;
  background-position: bottom;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    position: relative;
    font-size: 12rem;
    color: #fff;
    text-align: center;
  }
`;

const FirstCommentContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FirstComment = styled.div`
  font-size: 1.2rem;
  background-color: #ddecea;
  width: 70%;
  min-height: 30vh;
  max-height: 30vh;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  color: black;
`;

const Selfie = styled.div`
  max-width: 20vw;
  border: 1px solid white;
  border-radius: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
  margin: 5vw;
`;

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: gray;
  }
  span {
    margin: 1vh 0;
    font-size: 1.2rem;
  }
  background-color: #ddecf1;
  padding: 15px;
  width: 95%;
  height: 50vh;
  font-size: 1.2rem;
`;

const CloudWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;

  img {
    position: absolute;
    bottom: 0;
    max-width: 100%;
    &:nth-child(odd) {
      animation: animate calc(5s * 3) linear infinite;
    }
    &:nth-child(even) {
      animation: animate calc(5s * 2) linear infinite;
    }
  }
  @keyframes animate {
    0% {
      opacity: 0.5;
      transform: scale(1);
    }
    25% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
      transform: scale(3);
    }
  }
`;

const TextContainer = styled.section`
  position: relative;
  padding: 75px 100px;
  background-color: white;

  h2 {
    position: relative;
    font-size: 2.5rem;
    margin-bottom: 20px;
    transition: all 0.5s ease-in-out;
    &:hover {
      color: gray;
    }
  }
  p {
    font-size: 1.2rem;
  }
`;

export default About;
