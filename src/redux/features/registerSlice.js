import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  registerModal: false,
};

export const registerSlice = createSlice({
  initialState,
  name: "register",
  reducers: {
    registerToggle: (state) => {
      state.registerModal = !state.registerModal;
    },
  },
});

export const { registerToggle } = registerSlice.actions;

export default registerSlice.reducer;
