import "./App.css";
import { Link } from "react-router-dom";
import { Button } from "antd";

function App() {
  return (
    <div className="mainDiv">
      <Link to="/todo-list/registration">
        <Button color="primary" variant="filled">
          Зарегистрироваться
        </Button>
      </Link>
      <p>Already have an account?</p>
      <Link to="/todo-list/login">
        <Button color="primary" variant="filled">
          Войти в аккаунт
        </Button>
      </Link>
    </div>
  );
}

export { App };
