import * as actionTypes from "./actionTypes";

const fetchUserList = () => (dispatch) => {
  dispatch(setUserListLoading());
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((userList) => {
      setTimeout(() => {
        dispatch(setUserListSuccess(userList));
      }, 2000);
    })
    .catch(() => dispatch(setUserListFailure()));
};

const setUserListLoading = () => ({
  type: actionTypes.SET_USER_LIST_LOADING,
});

const setUserListSuccess = (userList) => ({
  type: actionTypes.SET_USER_LIST_SUCCESS,
  payload: userList,
});

const setUserListFailure = () => ({
  type: actionTypes.SET_USER_LIST_FAILURE,
});

export { fetchUserList };
