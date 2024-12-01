// redux/slices/authSlice.js
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  betterInfo: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userInfo(state, action) {
      state.betterInfo = action.payload;
    },
    Sign_in_out(state) {
      state.betterInfo = null;
    },
  },
});

export const { userInfo, Sign_in_out } = authSlice.actions;
export default authSlice.reducer;

