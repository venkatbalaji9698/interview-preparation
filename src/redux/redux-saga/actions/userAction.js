import * as actionTypes from "./actionTypes";

export const fetchUserList = () => ({
  type: actionTypes.SET_USER_LIST_LOADING,
});

export const setUserListSuccess = (userList) => ({
  type: actionTypes.SET_USER_LIST_SUCCESS,
  payload: userList,
});

export const setUserListFailure = () => ({
  type: actionTypes.SET_USER_LIST_FAILURE,
});
