import { all, put, call, takeLatest } from "redux-saga/effects";
import boardApi from "../../api/board";
import * as types from "./boardActionsTypes";

function *getAllItems({data}) {
  try {
    const response = yield call(boardApi.getPizzas, data);

    yield put({type: types.GET_ALL_ITEMS_SUCCESS, response})
  }
  catch(error) {
    yield put({type: types.GET_ALL_ITEMS_ERROR, error})
  }
}
function *postOrderPizza({data}) {
  try {
    yield call(boardApi.postOrderPizza, data);
  }
  catch(error) {
    console.log(error)
  }
}



export default function *() {
  yield all([
    yield takeLatest(types.GET_ALL_ITEMS, getAllItems),
    yield takeLatest(types.ORDER_PIZZA_REQUEST, postOrderPizza),
  ])
}
