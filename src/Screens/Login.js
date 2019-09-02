import React, { useState } from "react";
import { Form, Input, Icon, Button } from "antd";
import { login } from "../services/loginService";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const onUsernameChange = event => {
    setUsername(event.target.value);
    console.log(username);
  };

  const onPasswordChange = event => {
    setPassword(event.target.value);
    console.log(password);
  };

  const onSubmit = event => {
    event.preventDefault();
    login(username, password);
  };

  return (
    <form>
      <label>Username</label>
      <input
        type="text"
        name="email"
        onChange={onUsernameChange}
        value={username}
      />

      <label>Password</label>
      <input
        type="password"
        name="password"
        onChange={onPasswordChange}
        value={password}
      />
      <input type="submit" value="Submit" onSubmit={onSubmit} />
    </form>
  );
};

export default Login;
