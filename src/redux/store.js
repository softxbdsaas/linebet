import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "./features/registerSlice";

const rootReducer = {
  registerModal: registerSlice,
};
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
