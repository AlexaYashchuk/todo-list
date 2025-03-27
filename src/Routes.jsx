import { Routes, Route } from "react-router-dom";
import { Login } from "./components/login/Login";
import { App } from "./App";
import { LogAddTodo } from "./components/AddTodo";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/todo-list" element={<App />} />
      <Route path="/todo-list/login" element={<Login />} />
      <Route path="/todo-list/addTodo" element={<LogAddTodo />} />
    </Routes>
  );
};

export { AppRouter };
