import { useRef, useState } from "react";
import { Button, Input } from "antd";
import { FormOutlined, DeleteOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { AddToDo } from "./components/AddTodo";

function TodoList() {
  const [toDoList, setToDoList] = useState([]);
  console.log(toDoList);

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

  const inputRefEdit = useRef(null);
  const inputFocusEdit = () => {
    inputRefEdit.current.focus();
  };

  const [toDoTask, setToDoTask] = useState("");
  const toDoTaskFunc = (event) => {
    setToDoTask(event.target.value);
  };

  const doneTaskFunc = (index) => {
    const newToDoList = [...toDoList];
    newToDoList[index].done = !newToDoList[index].done;
    setToDoList(newToDoList);
  };

  const deleteTask = (index) => {
    const newToDoList = [...toDoList];
    const newToDoListDelete = newToDoList.filter(
      (item, indexItem) => indexItem !== index
    );
    setToDoList(newToDoListDelete);
  };

  const [editTaskValue, setEditTaskValue] = useState("");

  const editTask = (id) => {
    const newToDoList = [...toDoList];

    for (let i = 0; i < newToDoList.length; i++) {
      if (newToDoList[i].id === id) {
        newToDoList[i].edit = !newToDoList[i].edit;
        if (!newToDoList[i].edit) {
          setEditTaskValue("");
        } else {
          setEditTaskValue(newToDoList[i].task);
        }
        setToDoList(newToDoList);
      }
    }
  };

  const updateTask = (index) => {
    const newToDoList = [...toDoList];
    newToDoList[index].task = editTaskValue;
    newToDoList[index].edit = false;
    setToDoList(newToDoList);
  };

  const updateTaskEnter = (event, index) => {
    if (event.key === "Enter") {
      const newToDoList = [...toDoList];
      newToDoList[index].task = editTaskValue;
      newToDoList[index].edit = false;
      setToDoList(newToDoList);
    }
  };

  return (
    <>
      <div className="mainDiv">
        <h1>Get things done!</h1>
        <AddToDo />
        {/* <div className="addTask">
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
        </div> */}

        <div className="toDoList">
          {toDoList.map((item) => {
            return (
              <div key={item.id}>
                {!item.edit ? (
                  <div className="itemTask">
                    <Button
                      color="purple"
                      variant="solid"
                      onClick={() => doneTaskFunc(item.id)}
                    >
                      {!item.done ? (
                        <p>{item.task}</p>
                      ) : (
                        <s>
                          <p>{item.task}</p>
                        </s>
                      )}
                    </Button>
                    <Button
                      color="purple"
                      variant="solid"
                      onClick={() => editTask(item.id)}
                    >
                      <FormOutlined />
                    </Button>
                    <Button
                      color="purple"
                      variant="solid"
                      onClick={() => deleteTask(item[id])}
                    >
                      <DeleteOutlined />
                    </Button>
                  </div>
                ) : (
                  <div className="itemUpdate">
                    <Input
                      maxLength="50"
                      onMouseEnter={inputFocusEdit}
                      ref={inputRefEdit}
                      type="text"
                      defaultValue={item.task}
                      onKeyDown={(event) => updateTaskEnter(event, index)}
                      onChange={(event) => setEditTaskValue(event.target.value)}
                    />
                    <Button
                      color="purple"
                      variant="solid"
                      onClick={() => updateTask(item.id)}
                    >
                      Update
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
