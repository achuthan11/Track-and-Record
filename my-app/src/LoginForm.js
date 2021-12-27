import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import userInfo, { userUpdate } from "./actions/userChange";

function Login() {
  const userDetails = useSelector((state) => state.userInfo);
  const userName = userDetails.name;
  const userMail = userDetails.email;
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginState, setLoginState] = useState("False");
  const [name, setName] = useState("");

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response) {
        setName(response);
        setLoginState("True");
        dispatch(userInfo(name, email, true));
      }
    });
  };

  return (
    <form className="App">
      <div>
        <label>Email: </label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password: </label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={login}>Submit</button>
      </div>
      <h2>{loginState}</h2>
      <h1>User MailId: {userMail} from redux</h1>
      <h1>user name: {name} from react</h1>
    </form>
  );
}

export default Login;
