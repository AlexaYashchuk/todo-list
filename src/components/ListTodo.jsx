import { useRef, useState } from "react";
import "../App.css";
import { FormOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { withLogger } from "./withLogger";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodoRTK,
  doneTodoRTK,
  editTodoRTK,
  updateTodoRTK,
} from "../RTK/todoSlice";
import { selectToDoList } from "../RTK/todoSlice";

const ListTodo = ({ log }) => {
  const inputRefEdit = useRef(null);
  const [editTaskValue, setEditTaskValue] = useState("");

  const dispatch = useDispatch();
  const listToDo = useSelector(selectToDoList);

  const inputFocusEdit = () => {
    inputRefEdit.current.focus();
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodoRTK({ id }));
    log(`Удалено задание id=` + id);
  };

  const taskFuncDone = (id) => {
    dispatch(doneTodoRTK({ id }));
    log(`Выполнено задание id=` + id);
  };

  const taskFuncEdit = (id) => {
    dispatch(editTodoRTK({ id }));
    log(`Начато редактирование задания id=` + id);
  };

  const taskFuncUpdate = (id, editTaskValue) => {
    dispatch(updateTodoRTK({ id, editTaskValue }));
    setEditTaskValue("");
    log(`Редактирование завершено id=` + id);
  };

  return (
    <div className="toDoList">
      {listToDo.map((item) => {
        return (
          <div key={item.id}>
            {!item.edit ? (
              <div className="itemTask">
                <Button
                  color="purple"
                  variant="solid"
                  onClick={() => taskFuncDone(item.id)}
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
                  onClick={() => {
                    taskFuncEdit(item.id);
                    setEditTaskValue(item.task);
                  }}
                >
                  <FormOutlined />
                </Button>
                <Button
                  color="purple"
                  variant="solid"
                  onClick={() => handleDeleteTodo(item.id)}
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
                  onChange={(event) => setEditTaskValue(event.target.value)}
                />
                <Button
                  color="purple"
                  variant="solid"
                  onClick={() => taskFuncUpdate(item.id, editTaskValue)}
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

const LogListTodo = withLogger(ListTodo);

export { LogListTodo };
