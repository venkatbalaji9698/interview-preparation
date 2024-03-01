import { call, put, takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { setUserListSuccess, setUserListFailure } from "../actions/userAction";

const getAPI = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const resJson = await res.json();
  return resJson;
};

export function* fetchUserList() {
  try {
    const response = yield call(getAPI);
    yield put(setUserListSuccess(response));
  } catch (error) {
    yield put(setUserListFailure());
  }
}

export function* userSaga() {
  yield takeEvery(actionTypes.SET_USER_LIST_LOADING, fetchUserList);
}
