import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loginModal: false,
};

export const loginSlice = createSlice({
  initialState,
  name: "login",
  reducers: {
    loginToggle: (state) => {
      state.loginModal = !state.loginModal;
    },
  },
});

export const { loginToggle } = loginSlice.actions;

export default loginSlice.reducer;
