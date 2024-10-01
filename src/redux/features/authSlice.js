// redux/slices/authSlice.js
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userInfo(state, action) {
      state.user = action.payload;
    },
    Sign_in_out(state) {
      state.user = null;
    },
  },
});

export const { userInfo, Sign_in_out } = authSlice.actions;
export default authSlice.reducer;

