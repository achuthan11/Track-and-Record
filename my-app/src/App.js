import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Login from "./LoginForm";
import Home from "./HomePage";
import { useSelector } from "react-redux";

function App() {
  const userDetails = useSelector((state) => state.userInfo);
  const loginStatus = userDetails.loginStatus;
  return (
    <>
      <Router>
        <Switch>
          {/* <Route path="/login" component={Login} /> */}
          <Route path="/" component={() => <Home authorized={true} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
