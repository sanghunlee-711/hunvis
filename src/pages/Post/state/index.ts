interface ActionType {
  CALL_API: string;
  COUNT_API: string;
  TEST_CONSOLE: string;
  SAGA_API: string;
}

interface ActionsType {
  type: string;
}

//Action Type
export const types: ActionType = {
  CALL_API: "post/CALL_API",
  COUNT_API: "post/COUNT_API",
  TEST_CONSOLE: "post/TEST_CONSOLE",

  //사가에서 쓰기 위한 액션임
  SAGA_API: "post/SAGA_API",
};

//Action 생성자 함수
export const actions = {
  callApiPost: () => ({ type: types.CALL_API }),
  countApiPost: (count: number) => ({ type: types.COUNT_API, count }),
  testConsole: () => ({ type: types.TEST_CONSOLE }),
  sagaApi: () => ({ type: types.SAGA_API }),
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
    case "post/TEST_CONSOLE":
      return {
        ...state,
      };
    default:
      console.log("DEFAULT");
      return {
        ...state,
      };
  }
};
