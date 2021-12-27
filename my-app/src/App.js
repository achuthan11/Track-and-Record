import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Login from "./LoginForm";
import Home from "./HomePage";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [empDetails, setEmpDetails] = useState([]);
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userInfo);
  const isLoggedIn = userDetails.loggedIn;

  return <>{isLoggedIn ? <Home /> : <Login />}</>;
}

export default App;
