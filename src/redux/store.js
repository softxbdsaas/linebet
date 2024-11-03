import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "./features/registerSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import authSlice from "./features/authSlice";
import loginSlice from "./features/loginSlice";
import LeftRightToggleSlice from "./features/LeftRightToggleSlice";
import mobileMenuSlice from "./features/mobileMenuSlice";
import { baseApi } from "./api/baseApi";
import forgotPasswordSlice from "./features/forgotPasswordSlice";
import chatsSlice from "./features/chatsSlice";
const persistConfig = {
  key: "root",
  storage,
};

const persistedAuth = persistReducer(persistConfig, authSlice);
const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  registerModal: registerSlice,
  loginModal: loginSlice,
  auth: persistedAuth,
  forgot: forgotPasswordSlice,
  leftRightToggle: LeftRightToggleSlice,
  mobileMenuToggle: mobileMenuSlice,
  liveChat: chatsSlice,
};

const isClient = typeof window !== "undefined";
//  store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
        ignoredActionPaths: ["register", "rehydrate"],
        ignoredPaths: ["meta.arg.originalArgs"],
      },
    }).concat(baseApi.middleware),
});
export const persistor = isClient ? persistStore(store) : null;
