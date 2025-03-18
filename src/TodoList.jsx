import { useRef, useState } from "react";
import { Button, Input } from "antd";
import { FormOutlined, DeleteOutlined } from "@ant-design/icons";
import "./App.css";

function TodoList() {
  const [toDoList, setToDoList] = useState([]);

  const addToDo = () => {
    if (toDoTask.length > 0) {
      setToDoList([...toDoList, { task: toDoTask, done: false, edit: false }]);
      setToDoTask("");
    }
  };

  const addToDoEnter = (event) => {
    if (event.key === "Enter" && event.target.value.length > 0) {
      setToDoList([...toDoList, { task: toDoTask, done: false, edit: false }]);
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

  const editTask = (index) => {
    const newToDoList = [...toDoList];
    newToDoList[index].edit = !newToDoList[index].edit;
    setToDoList(newToDoList);
  };

  const [editTaskValue, setEditTaskValue] = useState("");
  const updateTask = (index) => {
    const newToDoList = [...toDoList];
    newToDoList[index].task = editTaskValue;
    newToDoList[index].edit = false;
    setToDoList(newToDoList);
    setEditTaskValue("");
  };

  const updateTaskEnter = (event, index) => {
    if (event.key === "Enter") {
      const newToDoList = [...toDoList];
      newToDoList[index].task = editTaskValue;
      newToDoList[index].edit = false;
      setToDoList(newToDoList);
      setEditTaskValue("");
    }
  };

  return (
    <div className="mainDiv">
      <h1>Get things done!</h1>
      <div className="addTask">
        <Input
          placeholder="What is the task today?"
          type="text"
          value={toDoTask}
          onChange={toDoTaskFunc}
          ref={inputRef}
          onMouseEnter={inputFocus}
          onKeyUp={addToDoEnter}
        />
        <Button color="purple" variant="solid" onClick={addToDo}>
          Add
        </Button>
      </div>

      <div className="toDoList">
        {toDoList.map((item, index) => {
          return (
            <div key={index}>
              {!item.edit ? (
                <div className="itemTask">
                  <Button
                    color="purple"
                    variant="solid"
                    onClick={() => doneTaskFunc(index)}
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
                    onClick={() => editTask(index)}
                  >
                    <FormOutlined />
                  </Button>
                  <Button
                    color="purple"
                    variant="solid"
                    onClick={() => deleteTask(index)}
                  >
                    <DeleteOutlined />
                  </Button>
                </div>
              ) : (
                <div className="itemUpdate">
                  <Input
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
                    onClick={() => updateTask(index)}
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
  );
}

export { TodoList };
