import * as actionTypes from "./actionTypes";

export const addUser = (dispatch) => (payload) => {
  dispatch({
    type: actionTypes.ADD_USER,
    payload,
  });
};
