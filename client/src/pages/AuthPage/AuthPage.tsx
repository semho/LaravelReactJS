import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ButtonStyled } from "../../components/Controls/ButtonStyled/ButtonStyled";
import { InputStyled } from "../../components/Controls/InputStyled";
import { LabelStyled } from "../../components/Controls/LabelStyled";
import { Loader } from "../../components/Loader";
import { AuthContext } from "../../context/AuthContext";
import { useHttp } from "../../hooks/useHttp";
import { useMessage } from "../../hooks/useMessage";
import { useValidate } from "../../hooks/useValidate";
import NET from "../../newwork";

export function AuthPage() {
  const message = useMessage();
  const { checkingLengthAndSymbols, emptyField, matchEmail } = useValidate();
  const auth = useContext(AuthContext);
  const { loading, error, request, clearError } = useHttp();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      loginHandler();
    }
  };

  useEffect(() => {
    message(error, "error");
    clearError();
  }, [clearError, error, message]);

  const loginHandler = async () => {
    const formValue = { ...form };
    if (emptyField(formValue.email, "Email")) return;
    if (emptyField(formValue.password, "Пароль")) return;
    if (matchEmail(formValue.email)) return;
    if (checkingLengthAndSymbols(formValue.password, "Пароль")) return;

    try {
      const data = await request(
        NET.APP_URL + "api/login",
        "post",
        formValue,
        {}
      );
      auth.login(data.token, data.userId);
    } catch (error) {}
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="h-screen relative">
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 shadow-xl rounded divide-y-2 w-5/6 md:w-1/2 lg:w-1/4">
        <div className="px-5 pb-3 text-left">
          <h1 className="text-[42px] text-center mb-5 ">Вход</h1>

          <div className="form-group mb-6">
            <LabelStyled title="Email" forId="inputEmail" textColor="gray" />
            <InputStyled
              colorFocus="sky"
              type="email"
              id="inputEmail"
              placeholder="Введите Email"
              name="email"
              onChange={changeHandler}
              onKeyDown={keyDownHandler}
            />
          </div>
          <div className="form-group mb-6">
            <LabelStyled
              title="Пароль"
              forId="inputPassword"
              textColor="gray"
            />
            <InputStyled
              colorFocus="sky"
              type="password"
              id="inputPassword"
              placeholder="Введите пароль"
              name="password"
              onChange={changeHandler}
              onKeyDown={keyDownHandler}
            />
          </div>
          <div className="w-full">
            <ButtonStyled
              title="Авторизоваться"
              variant="sky"
              type="button"
              onClick={loginHandler}
              disabled={loading}
              className="w-full"
            />
          </div>
        </div>
        <p className="p-3 text-center">
          Еще не зарегистированы? <Link to="/reg">Зарегистрироваться</Link>
        </p>
      </div>
    </div>
  );
}
