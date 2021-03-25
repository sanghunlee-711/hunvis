import { NavActionsType, NavActionType } from "../../../common/interface";

export const navTypes: NavActionType = {
  LOGIN_MODAL: "nav/LOGIN_MODAL",
};

export const navActions = {
  loginModal: (modal: boolean) => ({ type: navTypes.LOGIN_MODAL, modal }),
};

export const INTITIAL_STATE_NAV = { modal: false };

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
    default:
      return {
        ...state,
      };
  }
};
