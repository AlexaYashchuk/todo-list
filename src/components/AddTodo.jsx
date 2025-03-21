import { useState, useRef } from "react";
import { Button, Input } from "antd";
import { v4 as uuidv4 } from "uuid";
import { ListTodo } from "./ListTodo";
import "../App.css";

export const AddToDo = () => {
  const [toDoList, setToDoList] = useState([]);
  const [toDoTask, setToDoTask] = useState("");
  const [editTaskValue, setEditTaskValue] = useState("");
  const inputRef = useRef(null);

  const addToDo = () => {
    if (toDoTask.length > 0) {
      setToDoList([
        ...toDoList,
        { id: uuidv4(), task: toDoTask, done: false, edit: false },
      ]);
      setToDoTask("");
    }
  };

  const addToDoEnter = (event) => {
    if (event.key === "Enter" && event.target.value.length > 0) {
      setToDoList([
        ...toDoList,
        { id: uuidv4(), task: toDoTask, done: false, edit: false },
      ]);
      setToDoTask("");
    }
  };

  const inputFocus = () => {
    inputRef.current.focus();
  };

  const toDoTaskFunc = (event) => {
    setToDoTask(event.target.value);
  };

  const deleteTask = (id) => {
    setToDoList(toDoList.filter((item) => item.id !== id));
  };

  const editTask = (id) => {
    setToDoList(
      toDoList.map((item) => {
        if (item.id === id) {
          setEditTaskValue(item.task);
          return { ...item, edit: !item.edit };
        }
        return item;
      })
    );
  };

  const updateTask = (id, value) => {
    setToDoList(
      toDoList.map((item) => {
        if (item.id === id) {
          setEditTaskValue("");
          return { ...item, task: value, edit: false };
        }
        return item;
      })
    );
  };

  const updateTaskEnter = (event, id, value) => {
    setToDoList(
      toDoList.map((item) => {
        if (item.id === id && event.key === "Enter") {
          return { ...item, task: value, edit: false };
        } else return item;
      })
    );
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
      <ListTodo
        toDoList={toDoList}
        deleteTask={deleteTask}
        updateTask={updateTask}
        editTask={editTask}
        editTaskValue={editTaskValue}
        setEditTaskValue={setEditTaskValue}
        updateTaskEnter={updateTaskEnter}
      />
    </>
  );
};
