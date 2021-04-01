import React, { useEffect, useRef } from "react";
import { WorkRootState } from "../../../common/interface";
import styled from "styled-components";
import castle from "../../../common/img/castle.jpg";

const WorkCard: React.FC<WorkRootState> = ({
  position,
  period,
  title,
  work,
  corp,
}) => {
  const cardContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let curr = cardContainerRef.current as HTMLDivElement;
    curr.style.width = `${document.documentElement.clientWidth}px`;
    console.log(curr.style.width);
  }, []);

  return (
    <>
      <CardContainer ref={cardContainerRef}>
        <ContentsWrapper>
          <h2>{position}</h2>
          <DateWrapper>
            <span>{period[0]}</span>
            <span>{period[1]}</span>
          </DateWrapper>
          <TitleDescription>{title}</TitleDescription>
          <ExperienceWrapper>
            {work.map((el) => (
              <li>{el}</li>
            ))}
          </ExperienceWrapper>
          <CoprName>{corp.name}</CoprName>
          <LinkWrapper>
            {/* 관련 링크 추가 예정 */}
            <a href="">
              <i className="fas fa-tshirt fa-3x"></i>
            </a>
            <a href="">
              <i className="fas fa-tshirt fa-3x"></i>
            </a>
            <a href="">
              <i className="fas fa-tshirt fa-3x"></i>
            </a>
          </LinkWrapper>
        </ContentsWrapper>
        <ImageLink href="">
          <ImageWrapper castle={castle} />
        </ImageLink>
      </CardContainer>
    </>
  );
};

const ContentsWrapper = styled.div``;

const LinkWrapper = styled.div`
  display: flex;
`;

const CardContainer = styled.div`
  margin: 10vh 0;
  display: flex;
  justify-content: center;
  /* position: relative; */

  h2 {
    font-weight: 800;
    font-size: 2rem;
  }
`;
const ImageLink = styled.a`
  width: 30vw;
  height: 40vh;
  margin-left: 5vw;
`;

const ImageWrapper = styled.div<{ castle: string }>`
  width: 100%;
  height: 100%;
  background: url(${castle});
  background-position: center;
  background-repeat: none;
  background-size: cover;
`;

const TitleDescription = styled.div`
  font-weight: 800;
  font-size: 1.2rem;
  margin: 2vh 0;
  color: gray;
`;

const DateWrapper = styled.div`
  display: flex;
  span {
    font-weight: bold;
    font-size: 1.4rem;
    &:nth-child(2) {
      margin-left: 20px;
    }
  }
  margin: 10px 0;
`;

const ExperienceWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1vh 0;
  li {
    list-style: circle;
    margin: 0.5vh 0;
  }
`;

const CoprName = styled.span`
  color: gray;
  font-weight: 600;
  font-size: 1.2rem;
`;

export default WorkCard;
