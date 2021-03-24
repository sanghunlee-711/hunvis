import { type } from "node:os";
import { all, call, put, take, fork } from "redux-saga/effects";
import { callApi } from "../../../common/api";
import { actions, types } from "./index";

export function* fetchData(): Generator {
  console.log("HWlloe");
  while (true) {
    yield take(types.SAGA_API);
    console.log("HEllo SAga");
    yield put(actions.countApiPost(1));
    try {
      yield call(callApi);
    } catch (error) {
      yield put(actions.countApiPost(-1));
    }
  }
}

export default function* postSaga() {
  console.log("in saga.ts ");
  //... fetchData실행을 해줘야한다 ...
  yield all([fetchData()]);
  console.log("?");
}
