import "./App.css";
import { AddToDo } from "./components/AddTodo";

function App() {
  return (
    <div className="mainDiv">
      <h1>Get things done!</h1>
      <AddToDo />
    </div>
  );
}

export { App };
