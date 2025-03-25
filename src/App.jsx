import "./App.css";
import { LogAddTodo } from "./components/withLogger";

function App() {
  return (
    <div className="mainDiv">
      <h1>Get things done!</h1>
      <LogAddTodo />
    </div>
  );
}

export { App };
