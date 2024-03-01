import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  data: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserListLoading: (state) => {
      state.isLoading = true;
    },
    setUserListSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    setUserListFailure: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { setUserListLoading, setUserListSuccess, setUserListFailure } = userSlice.actions;

export default userSlice.reducer;
