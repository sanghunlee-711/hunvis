import { ActionType, ActionsType, DataTypes } from "../../../common/interface";

//Action Type
export const types: ActionType = {
  CALL_API: "post/CALL_API",
  COUNT_API: "post/COUNT_API",

  //Under Action Type is for SAGA(사가)
  SAGA_API: "post/SAGA_API",
  SUCESS_API: "post/SUCESS_API",
};

//Action 생성자 함수
export const actions = {
  callApiPost: () => ({ type: types.CALL_API }),
  countApiPost: (count: number) => ({ type: types.COUNT_API, count }),
  sagaApi: () => ({ type: types.SAGA_API }),
  sucessApi: (data: DataTypes) => ({ type: types.SUCESS_API, data }),
};
export const callApiPost = () => ({ type: types.CALL_API });

const INITIAL_STATE = { post: [], count: 0 };

export const postReducer = (state = INITIAL_STATE, action: ActionsType) => {
  switch (action.type) {
    case "post/CALL_API":
      //불변성 유지!!
      return {
        ...state,
      };
    case "post/COUNT_API":
      return {
        ...state,
        count: state.count + 1,
      };

    case "post/SUCESS_API":
      return {
        ...state,
        post: action.data,
      };
    default:
      return {
        ...state,
      };
  }
};
