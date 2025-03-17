import { useRef, useState } from "react";
import { Button, Input } from "antd";
import { FormOutlined, DeleteOutlined } from "@ant-design/icons";
import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addToDo = () => {
    setToDoList([...toDoList, { task: toDoTask, done: false }]);
    setToDoTask("");
  };
  console.log(toDoList);

  const inputRef = useRef(null);
  const inputFocus = () => {
    inputRef.current.focus();
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
        />
        <Button onClick={addToDo}>Добавить таску</Button>
      </div>

      <div className="toDoList">
        {toDoList.map((item, index) => {
          return (
            <div className="itemTask" key={index}>
              <Button onClick={() => doneTaskFunc(index)}>
                {!item.done ? (
                  <p>{item.task}</p>
                ) : (
                  <s>
                    <p>{item.task}</p>
                  </s>
                )}
              </Button>
              <Button>
                <FormOutlined />
              </Button>
              <Button>
                <DeleteOutlined />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
