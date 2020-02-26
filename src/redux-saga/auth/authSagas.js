import { all, put, call, takeLatest } from "redux-saga/effects";
import auth from "../../api/auth";
import history from '../../history';
import * as types from "./authActionsTypes";

function showAlert(){
  return window.alert("Success")
}

function *login ({data}) {

  try {
    const response = yield call(auth.login, data);
    yield put({ type: types.LOGIN_REQUEST_SUCCESS, response });
    yield put(history.push('/board'));
  } catch (error) {
    if(error) yield put({ type: types.LOGIN_REQUEST_ERROR, error });
  }
}

function *signUp({data}) {

  try {
    yield call(auth.signUp, data);
    yield call(showAlert);
    yield put(history.push('/auth/login'));
  } catch (error) {
    if(error) yield put({ type: types.SIGN_UP_ERROR, error: error });
  }
}

export default function *() {
  yield all([
    yield takeLatest(types.LOGIN_REQUEST, login),
    yield takeLatest(types.SIGN_UP_REQUEST, signUp),
  ])
}
