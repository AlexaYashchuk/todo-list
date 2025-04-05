import { useState, useRef } from "react";
import { Button, Input } from "antd";
import { LogListTodo } from "./ListTodo";
import "../App.css";
import { withLogger } from "./withLogger";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTodoRTK } from "../RTK/todoSlice";

export const AddToDo = ({ log }) => {
  const inputRef = useRef(null);
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (task.length > 0) {
      dispatch(addTodoRTK({ task }));
      setTask("");
      log(`Добавлено задание ` + task);
    }
  };

  const handleAddTodoEnter = (event) => {
    if (event.key === "Enter" && event.target.value.length > 0) {
      dispatch(addTodoRTK({ task }));
      setTask("");
      log(`Добавлено задание ` + task);
    }
  };

  const inputFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <div className="mainDiv">
        <h1>Get things done!</h1>
        <div className="addTask">
          <Input
            ref={inputRef}
            onMouseEnter={inputFocus}
            maxLength="50"
            placeholder="What is the task today?"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyUp={handleAddTodoEnter}
          />
          <Button color="purple" variant="solid" onClick={handleAddTodo}>
            Add Task
          </Button>
        </div>
        <LogListTodo />
      </div>
      <p>Want to go out?</p>
      <Link to="/todo-list/login">
        <Button color="primary" variant="filled">
          Log Out
        </Button>
      </Link>
    </>
  );
};

const LogAddTodo = withLogger(AddToDo);

export { LogAddTodo };
