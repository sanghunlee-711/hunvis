import React, { useEffect } from "react";
import styled from "styled-components";
import cloud1 from "../../common/img/cloud1.png";
import cloud2 from "../../common/img/cloud2.png";
import cloud3 from "../../common/img/cloud3.png";
import cloud4 from "../../common/img/cloud4.png";
import cloud5 from "../../common/img/cloud5.png";
import selfie from "../../common/img/selfie.jpeg";
import barcenloa from "../../common/img/barcelona.jpeg";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import About from "../About/About";
import { navActions } from "../Nav/state/index";

//https://www.youtube.com/watch?v=FWW38GuIo7M cloud Event Reference

const Home: React.FC = (): JSX.Element => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const movingTitle = () => {
    let title = titleRef;
    let value = window.scrollY;
    const curr = title.current as HTMLHeadingElement;
    if (curr) {
      curr.style.marginBottom = `${value * 2}px`;
    }
  };

  useEffect(() => {
    const aboutScrollLocation: number = aboutRef.current
      ?.scrollHeight as number;
    dispatch(navActions.getAboutScroll(aboutScrollLocation));

    window.addEventListener("scroll", movingTitle);
    //for componentWillUnmount
    return () => window.removeEventListener("scroll", movingTitle);
  }, []);

  return (
    <>
      <BannerContainer barcenloa={barcenloa}>
        <h2 ref={titleRef}>Sang Hun Lee</h2>
        <CloudWrapper>
          <img src={cloud1} alt="cloud1" />
          <img src={cloud2} alt="cloud2" />
          <img src={cloud3} alt="cloud3" />
          <img src={cloud4} alt="cloud4" />
          <img src={cloud5} alt="cloud5" />
          <img src={cloud1} alt="cloud1" />
          <img src={cloud2} alt="cloud2" />
          <img src={cloud3} alt="cloud3" />
          <img src={cloud4} alt="cloud4" />
          <img src={cloud5} alt="cloud5" />
        </CloudWrapper>
      </BannerContainer>
      <div ref={aboutRef}>
        <About />
      </div>
    </>
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
      animation: animate calc(3s * 2) linear infinite;
    }
  }
  @keyframes animate {
    0% {
      opacity: 0.5;
      transform: scale(1);
    }
    25% {
      opacity: 1;
      transform: scale(2);
    }
    75% {
      opacity: 1;
      transform: scale(3);
    }
    100% {
      opacity: 0.5;
      transform: scale(1);
    }
  }
`;

export default Home;
