import { legacy_createStore as createStore, combineReducers } from "redux";
import { todoReducer } from "./reducers/todoReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
});

const store = createStore(rootReducer);

export { store };
