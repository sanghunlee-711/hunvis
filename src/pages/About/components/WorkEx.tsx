import React, {
  useState,
  useRef,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import WorkCard from "./WorkCard";
import { WorkRootState } from "../../../common/interface";
import { RootState } from "../../../common/interface";
import { aboutActions } from "../state";

interface WorkExPropTypes {
  workData: WorkRootState[];
}

const WorkEx: React.FC<WorkExPropTypes> = ({ workData }) => {
  const CarouselWrapperRef = useRef<HTMLDivElement>(null);
  const [, forceUpdate] = useReducer((v) => v + 1, 0);

  const dispatch = useDispatch();
  const carouselState = useSelector(
    (state: RootState) => state.about.carouselState
  );
  // const cardLen = workData.length || 4;
  const cardLen = 4;
  useEffect(() => {
    const curr = CarouselWrapperRef.current as HTMLDivElement;
    const cardWidth: number = Number(document.documentElement.clientWidth);

    //cardLen이 0 으로 찍히는 부분 해결 필요
    curr.style.width = `${document.documentElement.clientWidth * 4}px`;
    curr.style.transform = `translateX(-${carouselState * cardWidth}px)`;
    curr.style.transition = "all 0.5s ease-in-out";
  }, [carouselState]);

  const CarouselClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const { name } = e.target as HTMLButtonElement;
      if (name === "next" && carouselState >= 0) {
        if (carouselState === cardLen - 1) {
          dispatch(aboutActions.getCarouselState(0));
        } else {
          dispatch(aboutActions.getCarouselState(carouselState + 1));
        }
      } else if (name === "prev" && carouselState <= cardLen + 1) {
        if (carouselState === 0) {
          dispatch(aboutActions.getCarouselState(cardLen - 1));
        } else {
          dispatch(aboutActions.getCarouselState(carouselState - 1));
        }
      }
    },
    [carouselState]
  );

  return (
    <WorkExperienceContainer>
      <h1>Work Experience{carouselState + 1}</h1>

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
        <CarouselButton onClick={(e) => CarouselClick(e)} name="prev">
          <i className="fas fa-arrow-left fa-3x"></i>
        </CarouselButton>
        <CarouselButton onClick={(e) => CarouselClick(e)} name="next">
          <i className="fas fa-arrow-right fa-3x"></i>
        </CarouselButton>
      </ButtonWrapper>
    </WorkExperienceContainer>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CarouselButton = styled.button`
  width: 120px;
  height: 100px;
  background-color: white;
  border: 1px solid white;

  i {
    z-index: -10;
    transition: all 0.5s ease-in-out;
    color: black;
  }
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: black;
    i {
      color: white;
    }
  }
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
  flex-wrap: no-wrap;
  width: 80%;
  margin: 0 auto;
`;

export default WorkEx;
