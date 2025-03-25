import { AddToDo } from "./AddTodo";

const withLogger = (ComponentWithLogs) => {
  return (props) => {
    const log = (effect) => {
      console.log(effect);
    };
    return <ComponentWithLogs {...props} log={log} />;
  };
};

const LogAddTodo = withLogger(AddToDo);

export { LogAddTodo };
