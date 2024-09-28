import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  desktopLeft: false,
  desktopRight: false,
};

export const LeftRightToggleSlice = createSlice({
  initialState,
  name: "left-right-toggle",
  reducers: {
    desktopLeftToggle: (state) => {
      state.desktopLeft = !state.desktopLeft;
    },
    desktopRightToggle: (state) => {
      state.desktopRight = !state.desktopRight;
    },
  },
});

export const { desktopLeftToggle, desktopRightToggle } =
  LeftRightToggleSlice.actions;

export default LeftRightToggleSlice.reducer;
