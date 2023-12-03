import { configureStore } from "@reduxjs/toolkit";
import filtterReducer from "./filtterSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: { filtter: filtterReducer, theUser: userReducer },
});

export default store;
