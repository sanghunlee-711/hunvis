import React from "react";
import styled from "styled-components";
import WorkCard from "./WorkCard";
import { WorkRootState } from "../../../common/interface";

interface WorkExPropTypes {
  workData: WorkRootState[];
}

const WorkEx: React.FC<WorkExPropTypes> = ({ workData }) => {
  return (
    <WorkExperienceContainer>
      <h1>Work Experience</h1>
      {workData.map(({ position, period, title, work, corp }) => (
        <WorkCard
          position={position}
          period={period}
          title={title}
          work={work}
          corp={corp}
        />
      ))}
    </WorkExperienceContainer>
  );
};

const WorkExperienceContainer = styled.div`
  /* width: 80%; */
  padding: 75px 100px;
  margin: 0 auto;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: green;
  }
`;

export default WorkEx;
