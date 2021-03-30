import { NavActionsType, NavActionType } from "../../../common/interface";
import { actions } from "../../Post/state";

export const navTypes: NavActionType = {
  LOGIN_MODAL: "nav/LOGIN_MODAL",
  ABOUT_SCROLL: "nav/ABOUT_SCROLL",
  //Under is For SAGA
  POST_LOGIN: "nav/POST_LOGIN",
  GET_ID: "nav/GET_ID",
  GET_PW: "nav/GET_PW",
};

export const navActions = {
  loginModal: (modal: boolean) => ({ type: navTypes.LOGIN_MODAL, modal }),
  postLogin: () => ({ type: navTypes.POST_LOGIN }),
  getId: (id: string) => ({ type: navTypes.GET_ID, id }),
  getPw: (pw: string) => ({ type: navTypes.GET_PW, pw }),
  getAboutScroll: (aboutScroll: number) => ({
    type: navTypes.ABOUT_SCROLL,
    aboutScroll,
  }),
};

export const INTITIAL_STATE_NAV = {
  modal: false,
  loginData: { id: "", pw: "" },
  aboutScroll: 0,
};

export const navReducer = (
  state = INTITIAL_STATE_NAV,
  action: NavActionsType
) => {
  switch (action.type) {
    case "nav/LOGIN_MODAL":
      return {
        ...state,
        modal: !action.modal,
      };
    case "nav/GET_ID":
      return {
        ...state,
        loginData: { id: action.id, pw: state.loginData.pw },
      };
    case "nav/GET_PW":
      return {
        ...state,
        loginData: { id: state.loginData.id, pw: action.pw },
      };
    case "nav/ABOUT_SCROLL":
      return {
        ...state,
        aboutScroll: action.aboutScroll,
      };

    default:
      return {
        ...state,
      };
  }
};
