import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";

import styled from "styled-components";
import WorkCard from "./WorkCard";
import { WorkRootState } from "../../../common/interface";

interface WorkExPropTypes {
  workData: WorkRootState[];
}

const WorkEx: React.FC<WorkExPropTypes> = ({ workData }) => {
  const CarouselWrapperRef = useRef<HTMLDivElement>(null);
  const [carouselState, setCarouselState] = useState(2);

  const CarouselClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const { name } = e.target as HTMLButtonElement;
      const curr = CarouselWrapperRef.current as HTMLDivElement;
      const cardWidth: number = Number(curr.offsetWidth);
      const cardLen = workData.length;
      if (name === "next" && carouselState > 1) {
        setCarouselState(carouselState + 1);
        curr.style.transform = `translateX(-${carouselState * cardWidth}px)`;
        curr.style.transition = "all 0.5s ease-in-out";
      } else if (name === "prev" && carouselState <= cardLen + 1) {
        setCarouselState(carouselState - 1);
        curr.style.transform = `translateX(${
          (cardLen - carouselState - 1) * cardWidth
        }px)`;
        curr.style.transition = "all 0.5s ease-in-out";
      }
    },
    [carouselState]
  );

  return (
    <WorkExperienceContainer>
      <h1>Work Experience</h1>
      <WorkCardContainer ref={CarouselWrapperRef}>
        {workData.map(({ position, period, title, work, corp }) => (
          <WorkCard
            position={position}
            period={period}
            title={title}
            work={work}
            corp={corp}
          />
        ))}
      </WorkCardContainer>
      <ButtonWrapper>
        <button onClick={(e) => CarouselClick(e)} name="prev">
          Prev
        </button>
        <button onClick={(e) => CarouselClick(e)} name="next">
          Next
        </button>
      </ButtonWrapper>
    </WorkExperienceContainer>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
`;

const WorkExperienceContainer = styled.div`
  /* width: 80%; */
  padding: 75px 100px;
  margin: 0 auto;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: green;
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }
`;

const WorkCardContainer = styled.div`
  display: flex;
  overflow: visible;
  flex-wrap: no-wrap;
  width: 80%;
  margin: 0 auto;
`;

export default WorkEx;
