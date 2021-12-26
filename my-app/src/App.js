import './App.css';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Login from "./LoginForm";
import Home from "./HomePage";

function App() {
  return <>
    <Router>
      <Switch>
      <Route exact path="/">
        <Login/>
      </Route>
      <Route  path="/home">
        <Home/>
      </Route>
      <Route path="*">
        <h2>Error page</h2>
      </Route>
      </Switch>
    </Router>
    </>
}

export default App;
