import React from "react";
import { Switch, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";

import SignUp from "./components/signUpComponent";
import LoginForm from "./components/loginComponent";

function App() {
  return (
    <React.Fragment>
      <div className="slides">
        <Switch>
          <Route path="/register" component={SignUp} />
          <Route path="/login" component={LoginForm} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
