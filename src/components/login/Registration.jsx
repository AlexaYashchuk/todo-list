import { useForm, Controller } from "react-hook-form";
import { Input, Button, Select, Radio } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import "./registration.css";

const Registration = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="registration_form_el_block">
        <label className="registration_form_el ">UserName</label>
        <Controller
          name="userName"
          control={control}
          rules={{ required: "Имя должно быть заполнено" }}
          render={({ field }) => (
            <Input {...field} type="text" className="registration_form_el " />
          )}
        />
      </div>
      {errors.userName && <p>{errors.userName.message}</p>}
      <div className="registration_form_el_block">
        <label className="registration_form_el ">Email</label>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email должен быть заполнен",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$/,
              message: "Email введен некорректно",
            },
          }}
          render={({ field }) => (
            <Input {...field} type="text" className="registration_form_el " />
          )}
        />
      </div>
      {errors.email && <p>{errors.email.message}</p>}
      <div className="registration_form_el_block">
        <label className="registration_form_el ">Age</label>
        <Controller
          name="age"
          control={control}
          rules={{
            required: "Введите возраст",
            max: {
              value: 99,
              message: "Возрастные ограничения",
            },
            min: {
              value: 18,
              message: "Возрастные ограничения",
            },
          }}
          render={({ field }) => (
            <Input {...field} type="text" className="registration_form_el " />
          )}
        />
      </div>
      {errors.age && <p>{errors.age.message}</p>}
      <div className="registration_form_el_block">
        <label className="registration_form_el ">Password</label>
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Введите пароль",
            validate: {
              length: (value) =>
                value.length > 5 || "Длина должна быть больше 5 символов",
            },
          }}
          render={({ field }) => (
            <Input {...field} type="text" className="registration_form_el " />
          )}
        />
      </div>
      {errors.password && <p>{errors.password.message}</p>}
      <div className="registration_form_el_block">
        <label className="registration_form_el ">Gender</label>
        <Controller
          name="gender"
          control={control}
          rules={{
            required: "Выберите пол",
          }}
          render={({ field }) => (
            <Select
              className="registration_form_el "
              {...field}
              //showSearch
              placeholder="Select a gender"
              optionFilterProp="label"
              options={[
                {
                  value: "Female",
                  label: "Female",
                },
                {
                  value: "Male",
                  label: "Male",
                },
              ]}
              onChange={(value) => {
                field.onChange(value);
              }}
            />
          )}
        />
      </div>
      {errors.gender && <p>{errors.gender.message}</p>}
      <Button htmlType="submit" className="registration_form_el ">
        Sign Up
      </Button>
    </form>
  );
};

export { Registration };
