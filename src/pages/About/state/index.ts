// import { AboutActionsType, AboutActionType } from "../../../common/interface";

interface AboutActionType {
  CAROUSEL_STATE: string;
}
interface AboutActionsType {
  type: string;
  carouselState: number;
}

// export interface NavActionsType {
//   type: string;
//   modal: boolean;
//   id: string;
//   pw: string;
//   aboutScroll: number;
// }

export const aboutTypes: AboutActionType = {
  CAROUSEL_STATE: "about/CAROUSEL_STATE",
};

export const aboutActions = {
  getCarouselState: (carouselState: number) => ({
    type: aboutTypes.CAROUSEL_STATE,
    carouselState,
  }),
};

export const INITIAL_STATE_ABOUT = {
  carouselState: 0,
};

export const aboutReducer = (
  state = INITIAL_STATE_ABOUT,
  action: AboutActionsType
) => {
  switch (action.type) {
    case "about/CAROUSEL_STATE":
      return {
        ...state,
        carouselState: action.carouselState,
      };
    default:
      return {
        ...state,
      };
  }
};
