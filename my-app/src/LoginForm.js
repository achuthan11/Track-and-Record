import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";
import { useDispatch } from "react-redux";
import userInfo from "./actions/userChange";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Login() {
  const userDetails = useSelector((state) => state.userInfo);
  const userName = userDetails.name;
  const [credentail, setCredential] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatcher = (name, email, loginState) => {
    dispatch(userInfo(name, email, loginState));
    if (loginState) history.push("/");
  };

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data === "No matching credentials") {
        console.log("Invalid credentials");
        dispatcher("Invalid credentials", email, false);
        history.push("/");
      } else if (response) {
        console.log(response.data[0].emp_name);
        dispatcher(response.data[0].emp_name, email, true);
      }
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (userName === "Invalid credentials")
      setCredential("Invalid credentials");
  });

  return (
    <form className="App" onSubmit={(event) => submitHandler(event)}>
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
        <button onClick={login}>Login</button>
        {credentail}
      </div>
    </form>
  );
}

export default Login;
