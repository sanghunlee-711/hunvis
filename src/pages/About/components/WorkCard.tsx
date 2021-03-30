import React from "react";
import { WorkRootState } from "../../../common/interface";
import styled from "styled-components";

const WorkCard: React.FC<WorkRootState> = ({
  position,
  period,
  title,
  work,
  corp,
}) => {
  return (
    <>
      <CardContainer>
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
      </CardContainer>
    </>
  );
};

const CardContainer = styled.div`
  width: 100%;
  margin: 10vh 0;
  h2 {
    font-weight: 800;
    font-size: 2rem;
  }
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
