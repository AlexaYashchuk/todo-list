import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

const storeRTK = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export { storeRTK };
