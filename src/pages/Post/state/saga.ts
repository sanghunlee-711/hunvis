import { all, call, put, take } from "redux-saga/effects";
import { callApi } from "../../../common/api";
import { actions, types } from "./index";
import { DataTypes } from "../../../common/interface";

//추후에 아래 링크방법도 참고해보자
//https://vallista.kr/2020/07/20/TypeScript%EC%97%90%EC%84%9C-Redux-Redux-Saga-%EC%95%84%EB%A6%84%EB%8B%B5%EA%B2%8C-%EA%B0%9C%EB%B0%9C%ED%95%98%EA%B8%B0/
export function* fetchData(): Generator {
  while (true) {
    yield take(types.SAGA_API);
    yield put(actions.countApiPost(1));
    try {
      const datatest = yield call(callApi);
      yield put(actions.sucessApi(datatest as DataTypes));
    } catch (error) {
      yield put(actions.countApiPost(-1));
    }
  }
}

export default function* postSaga() {
  //... fetchData실행을 해줘야한다 ...
  yield all([fetchData()]);
}
