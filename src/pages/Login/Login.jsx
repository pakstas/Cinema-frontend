import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Section, Button, InputField, Notification } from "../../components";
import * as S from "./Login.style";

function LoginUser(data, setError, setMessage, setErrorType, history, auth) {
  let success = false;
  setError(false);
  fetch(`${process.env.REACT_APP_BE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.ok) {
        success = true;
      }
      return res.json();
    })
    .then((data) => {
      if (success && data.token) {
        setError(false);
        setErrorType("success");
        setMessage("Successfully logged in.");
        auth.updateToken(data.token);
        history.push("/");
      } else {
        setError(true);
        setErrorType("danger");
        setMessage(data.msg || "Error");
      }
    })
    .catch((err) => {
      setError(true);
      setErrorType("danger");
      setMessage("There is a problem with server.");
    });
}

function Login() {
  const [data, setData] = useState({
    email: process.env.REACT_APP_LOGIN_DEMO_EMAIL,
    password: process.env.REACT_APP_LOGIN_DEMO_PASSWORD,
  });
  const [error, setError] = useState(false);
  const [errorType, setErrorType] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();
  const auth = useContext(AuthContext);

  return (
    <Section>
      <S.Section>
        <S.FormBlock>
          <S.Title>Login</S.Title>
          {error && <Notification message={message} color={errorType} />}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              LoginUser(
                data,
                setError,
                setMessage,
                setErrorType,
                history,
                auth
              );
            }}
          >
            <InputField
              type="email"
              id="1"
              label="Email"
              defaultValue={process.env.REACT_APP_LOGIN_DEMO_EMAIL}
              handleChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <InputField
              type="password"
              id="2"
              label="Password"
              defaultValue={process.env.REACT_APP_LOGIN_DEMO_PASSWORD}
              handleChange={(e) =>
                setData({ ...data, password: e.target.value })
              }
            />
            <Button type="submit">Login</Button>
          </form>
        </S.FormBlock>
      </S.Section>
    </Section>
  );
}

export default Login;
