import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  liveChatStatus: false,
};

export const chatsSlice = createSlice({
  initialState,
  name: "liveChatSlice",
  reducers: {
    liveChatToggle: (state) => {
      state.liveChatStatus = !state.liveChatStatus;
    },
  },
});

export const { liveChatToggle } = chatsSlice.actions;

export default chatsSlice.reducer;
