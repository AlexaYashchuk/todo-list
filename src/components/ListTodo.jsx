import { useState, useEffect, useRef } from "react";
import "../App.css";
import { FormOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

export const ListTodo = ({
  toDoList,
  deleteTask,
  updateTask,
  editTask,
  editTaskValue,
  setEditTaskValue,
}) => {
  console.log(toDoList);

  const [list, setList] = useState([]);
  useEffect(() => {
    setList(toDoList);
  }, [toDoList]);

  const doneTaskFunc = (id) => {
    const newList = [...list];
    newList.map((item) => {
      if (item.id === id) {
        item.done = !item.done;
      }
    });
    setList(newList);
  };

  const inputRefEdit = useRef(null);
  const inputFocusEdit = () => {
    inputRefEdit.current.focus();
  };

  return (
    <div className="toDoList">
      {list.map((item) => {
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
                  // onKeyDown={(event) => updateTaskEnter(event, index)}
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
