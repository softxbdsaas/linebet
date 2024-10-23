import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  forgot: false,
};

export const forgotPasswordSlice = createSlice({
  initialState,
  name: "forgot",
  reducers: {
    forgotStatus: (state) => {
      state.forgot = !state.forgot;
    },
  },
});

export const { forgotStatus } = forgotPasswordSlice.actions;

export default forgotPasswordSlice.reducer;
