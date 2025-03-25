import { useState, useRef } from "react";
import { Button, Input } from "antd";
import { v4 as uuidv4 } from "uuid";
import { ListTodo } from "./ListTodo";
import "../App.css";
import { LogAddTodo } from "./withLogger";

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
      log(`Добавлено задание:` + toDoTask);
      setToDoTask("");
    }
  };

  const addToDoEnter = (event) => {
    if (event.key === "Enter" && event.target.value.length > 0) {
      setToDoList([
        ...toDoList,
        { id: uuidv4(), task: toDoTask, done: false, edit: false },
      ]);
      log(`Добавлено задание:` + toDoTask);
      setToDoTask("");
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
      <ListTodo toDoList={toDoList} setToDoList={setToDoList} log={log} />
    </>
  );
};
