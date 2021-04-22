import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import appReducer from "./reducers/reducers";
import logger from "redux-logger";

const defaultMiddleware = getDefaultMiddleware();

const store = configureStore({
  reducer: {
    stateApp: appReducer,
  },
  middleware: [...defaultMiddleware, logger],
});

export default store;
