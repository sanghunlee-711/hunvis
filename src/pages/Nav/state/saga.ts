import { type } from "node:os";
import { useDispatch } from "react-redux";
import { all, call, put, take, select } from "redux-saga/effects";
import { sendApi } from "../../../common/api";
import { RootState } from "../../../common/interface";
import { navActions, navTypes } from "./index";

export function* postData(): Generator {
  while (true) {
    yield take(navTypes.POST_LOGIN);
    const loginData = yield select((state: RootState) => state.nav.loginData);
    const url = yield select((state: RootState) => state.nav.url);

    try {
      yield call(() =>
        sendApi(loginData as { id: string; pw: string }, url as string)
      );
      yield put(navActions.loginModal(true));
    } catch (error) {
      console.log(error);
      yield put(navActions.loginModal(true));
    }
  }
}

export default function* navSaga() {
  yield all([postData()]);
}
