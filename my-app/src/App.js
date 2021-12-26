import './App.css';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Login from "./LoginForm";
import Home from "./HomePage";

function App() {
  return <>
    <Router>
      <Routes>
      <Route path="/">
        <Login/>
      </Route>
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="*">
        <h2>Error page</h2>
      </Route>
      </Routes>
    </Router>
    </>
}

export default App;
