import { configureStore } from "@reduxjs/toolkit";
import filtterReducer from "./filtterSlice";

const store = configureStore({ reducer: { filtter: filtterReducer } });

export default store;
