import { useState, useRef } from "react";
import { Button, Input } from "antd";
import { v4 as uuidv4 } from "uuid";
import { LogListTodo } from "./ListTodo";
import "../App.css";
import { withLogger } from "./withLogger";
import { Link } from "react-router-dom";

export const AddToDo = ({ log }) => {
  const [toDoList, setToDoList] = useState([]);
  const [toDoTask, setToDoTask] = useState("");
  const inputRef = useRef(null);

  const addToDo = () => {
    if (toDoTask.length > 0) {
      setToDoList([
        ...toDoList,
        { id: uuidv4(), task: toDoTask, done: false, edit: false },
      ]);
      setToDoTask("");
      log(`Добавлено задание:` + toDoTask);
    }
  };

  const addToDoEnter = (event) => {
    if (event.key === "Enter" && event.target.value.length > 0) {
      setToDoList([
        ...toDoList,
        { id: uuidv4(), task: toDoTask, done: false, edit: false },
      ]);
      setToDoTask("");
      log(`Добавлено задание:` + toDoTask);
    }
  };
  const inputFocus = () => {
    inputRef.current.focus();
  };

  const toDoTaskFunc = (event) => {
    setToDoTask(event.target.value);
  };

  return (
    <>
      <div className="mainDiv">
        <h1>Get things done!</h1>
        <div className="addTask">
          <Input
            maxLength="50"
            placeholder="What is the task today?"
            type="text"
            value={toDoTask}
            onChange={toDoTaskFunc}
            ref={inputRef}
            onMouseEnter={inputFocus}
            onKeyUp={addToDoEnter}
          />
          <Button color="purple" variant="solid" onClick={addToDo}>
            Add Task
          </Button>
        </div>
        <LogListTodo toDoList={toDoList} setToDoList={setToDoList} />
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
