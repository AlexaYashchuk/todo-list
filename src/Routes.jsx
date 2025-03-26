import { Routes, Route } from "react-router-dom";
import { Login } from "./components/login/Login";
import { Registration } from "./components/login/Registration";
import { App } from "./App";
import { AddToDo } from "./components/AddTodo";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/todo-list" element={<App />} />
      <Route path="/todo-list/login" element={<Login />} />
      <Route path="/todo-list/registration" element={<Registration />} />
      <Route path="/todo-list/addTodo" element={<AddToDo />} />
    </Routes>
  );
};

export { AppRouter };
