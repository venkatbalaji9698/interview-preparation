import * as actionTypes from "../actions/actionTypes";

const initialState = {
  data: null,
  isLoading: false,
  isError: false,
};

const userReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case actionTypes.SET_USER_LIST_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.SET_USER_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case actionTypes.SET_USER_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default userReducer;
