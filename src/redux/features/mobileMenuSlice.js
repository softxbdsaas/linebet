import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  mobileMenuStatus: false,
  mobileAccountMenuStatus: false,
};

export const mobileMenuSlice = createSlice({
  initialState,
  name: "mobileMenu",
  reducers: {
    mobileMenuToggle: (state) => {
      state.mobileMenuStatus = !state.mobileMenuStatus;
    },
    mobileAccountMenuToggle: (state) => {
      state.mobileAccountMenuStatus = !state.mobileAccountMenuStatus;
    },
  },
});

export const { mobileMenuToggle, mobileAccountMenuToggle } =
  mobileMenuSlice.actions;

export default mobileMenuSlice.reducer;
