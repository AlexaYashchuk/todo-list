import { useRef, useState } from "react";
import "../App.css";
import { FormOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

const ListTodo = ({ toDoList, setToDoList }) => {
  const inputRefEdit = useRef(null);
  const [editTaskValue, setEditTaskValue] = useState("");

  const inputFocusEdit = () => {
    inputRefEdit.current.focus();
  };

  const deleteTask = (id) => {
    setToDoList(toDoList.filter((item) => item.id !== id));
  };

  const doneTaskFunc = (id) => {
    setToDoList(
      toDoList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      })
    );
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
                  onClick={() => deleteTask(item.id)}
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
                  value={editTaskValue}
                  onKeyDown={(event) =>
                    updateTaskEnter(event, item.id, editTaskValue)
                  }
                  onChange={(event) => setEditTaskValue(event.target.value)}
                />
                <Button
                  color="purple"
                  variant="solid"
                  onClick={() => updateTask(item.id, editTaskValue)}
                >
                  Update
                </Button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export { ListTodo };
