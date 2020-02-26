import { all } from "redux-saga/effects";

import authSagas from "./auth/authSagas";
import boardSaga from "./board/boardSaga"

export default function *rootSaga() {
  yield all([
    authSagas(),
    boardSaga()
  ]);
}
