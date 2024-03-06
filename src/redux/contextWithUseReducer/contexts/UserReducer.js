import * as actionTypes from "./actionTypes";

const userReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return {
        ...state,
        userList: [...state.userList, action.payload],
      };

    default:
      return state;
  }
};

export default userReducer;
