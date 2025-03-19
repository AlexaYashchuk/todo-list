import { useState, useRef } from "react";
import { Button, Input } from "antd";
import { v4 as uuidv4 } from "uuid";
import { ListTodo } from "./ListTodo";
import "../App.css";

export const AddToDo = () => {
  const [toDoList, setToDoList] = useState([]);

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

  const inputRef = useRef(null);
  const inputFocus = () => {
    inputRef.current.focus();
  };

  const [toDoTask, setToDoTask] = useState("");
  const toDoTaskFunc = (event) => {
    setToDoTask(event.target.value);
  };

  const deleteTask = (id) => {
    const newList = [...toDoList];
    const listAfterDelete = newList.filter((item) => item.id !== id);
    setToDoList(listAfterDelete);
  };

  const [editTaskValue, setEditTaskValue] = useState("");

  const editTask = (id) => {
    const newList = [...toDoList];
    newList.map((item) => {
      if (item.id === id) {
        item.edit = !item.edit;
        if (item.edit) {
          setEditTaskValue(item.task);
        }
      }
    });
    setToDoList(newList);
  };

  const updateTask = (id, value) => {
    const newList = [...toDoList];
    newList.map((item) => {
      if (item.id === id) {
        item.task = value;
        item.edit = false;
      }
    });
    setToDoList(newList);
    setEditTaskValue("");
  };

  const updateTaskEnter = (event, id, value) => {
    const newList = [...toDoList];
    newList.map((item) => {
      if (item.id === id && event.key === "Enter") {
        item.task = value;
        item.edit = false;
      }
    });
    setToDoList(newList);
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
