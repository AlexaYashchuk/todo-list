import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "./registrationSlice";
import todoReducer from "./todoSlice";
import loginReducer from "./loginSlice";

const storeRTK = configureStore({
  reducer: {
    todo: todoReducer,
    registration: registrationReducer,
    login: loginReducer,
  },
});

export { storeRTK };
