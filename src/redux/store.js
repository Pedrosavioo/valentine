import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import animationReducer from "./animation";

export const store = configureStore({
   reducer: {
      counter: counterReducer,
      animation: animationReducer,
   },
});
