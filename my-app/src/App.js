import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./LoginForm";
import Home from "./HomePage";
import { useSelector } from "react-redux";

function App() {
  const userDetails = useSelector((state) => state.userInfo);
  const loginStatus = userDetails.loggedIn;
  console.log(loginStatus);
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={() => <Home authorized={loginStatus} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
