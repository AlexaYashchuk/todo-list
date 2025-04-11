import { useForm, Controller } from "react-hook-form";
import { Input, Button } from "antd";
import "./registration.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../RTK/loginSlice";
import { Loader } from "../loader/Loader";
import { useState } from "react";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Поле обязательно для заполнения")
    .email("Введите корректный email")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$/,
      "Email введен некорректно"
    ),
  password: yup
    .string()
    .required("Поле обязательно для заполнения")
    .min(6, "Пароль должен быть больше 5 символов"),
});

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const loginAxios = async (data) => {
    setIsLoading(true);
    try {
      await dispatch(loginUser(data)).unwrap();
      navigate("/todo-list/addTodo");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="mainDiv">
        <form onSubmit={handleSubmit(loginAxios)}>
          <div className="registration_form_el_block">
            <label className="registration_form_el ">Email</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  className="registration_form_el "
                />
              )}
            />
          </div>
          {errors.email && <p>{errors.email.message}</p>}
          <div className="registration_form_el_block">
            <label className="registration_form_el ">Password</label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  className="registration_form_el "
                />
              )}
            />
          </div>
          {errors.password && <p>{errors.password.message}</p>}
          <Button htmlType="submit" className="registration_form_el ">
            Log In
          </Button>
        </form>
      </div>
      <p>Don't have an account?</p>
      <Link to="/todo-list/">
        <Button color="primary" variant="filled">
          Sign Up
        </Button>
      </Link>
      {isLoading && <Loader />}
    </>
  );
};

export { Login };
