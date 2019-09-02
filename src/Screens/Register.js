import React from "react";
import { register } from "../serviceWorker";

const Register = () => {
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const onNameChange = event => {
    setName(event.target.value);
  };

  const onLastnameChange = event => {
    setLastname(event.target.value);
  };

  const onUsernameChange = event => {
    setUsername(event.target.value);
    console.log(username);
  };

  const onEmailChange = event => {
    setEmail(event.target.value);
  };
  const onPasswordChange = event => {
    setPassword(event.target.value);
    console.log(password);
  };
  const onSubmit = event => {
    event.preventDefault();
    register(name, lastname, username, email, password);
  };
  return (
    <form>
      <label>Name</label>
      <input type="text" name="name" onChange={onNameChange} value={name} />
      <label>Lastname</label>
      <input
        type="text"
        name="lastname"
        onChange={onLastnameChange}
        value={lastname}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        onChange={onUsernameChange}
        value={username}
      />
      <label>Email</label>
      <input type="text" name="email" onChange={onEmailChange} value={email} />

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

export default Register;
