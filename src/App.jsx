import "./App.css";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { Registration } from "./components/login/Registration";

function App() {
  return (
    <>
      <div className="mainDiv">
        <Registration />
      </div>
      <p>Already have an account?</p>
      <Link to="/todo-list/login">
        <Button color="primary" variant="filled">
          Log In
        </Button>
      </Link>
    </>
  );
}

export { App };
