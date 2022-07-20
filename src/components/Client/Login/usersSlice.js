import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name: "profile",
  initialState: {
    isNewAccount: false,
    user: {},
  },
  reducers: {
    setIsNewAccount: (state, action) => {
      state.isNewAccount = action.payload;
      return state;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      return state;
    },
  },
});
