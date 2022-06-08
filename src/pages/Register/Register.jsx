import React, { useState } from "react";
import { Section, InputField, Button, Notification } from "../../components";
import * as S from "./Register.style";

function RegisterUser(data, setError, setMessage, setErrorType) {
  let success = false;
  setError(false);
  fetch(`${process.env.REACT_APP_BE_URL}/register`, {
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
      if (success) {
        setError(true);
        setErrorType("success");
        setMessage(data.msg);
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

function Register() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);
  const [errorType, setErrorType] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Section>
      <S.Section>
        <S.FormBlock>
          <S.Title>Register</S.Title>
          {error && <Notification message={message} color={errorType} />}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              RegisterUser(data, setError, setMessage, setErrorType);
            }}
          >
            <InputField
              type="email"
              id="1"
              label="Email"
              handleChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <InputField
              type="password"
              id="2"
              label="Password"
              handleChange={(e) =>
                setData({ ...data, password: e.target.value })
              }
            />
            <Button type="submit">Register</Button>
          </form>
        </S.FormBlock>
      </S.Section>
    </Section>
  );
}

export default Register;
