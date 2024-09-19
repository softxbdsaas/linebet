import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "./features/registerSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import authSlice from "./features/authSlice";
const persistConfig = {
  key: "root",
  storage,
};

const persistedAuth = persistReducer(persistConfig, authSlice);
const rootReducer = {
  registerModal: registerSlice,
  auth: persistedAuth,
};

const isClient = typeof window !== "undefined";
//  store 
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ["persist/PERSIST"],
      ignoredActionPaths: ["register", "rehydrate"],
      ignoredPaths: ["meta.arg.originalArgs"],
    },
  }).concat(),
});
export const persistor = isClient ? persistStore(store) : null;
