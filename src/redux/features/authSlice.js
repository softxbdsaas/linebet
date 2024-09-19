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
    logout(state) {
      state.user = null;
    },
  },
});

export const { userInfo, logout } = authSlice.actions;
export default authSlice.reducer;

