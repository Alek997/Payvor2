import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Screens/Home";
import Ads from "./Screens/Ads";
import Users from "./Screens/Users";
import Login from "./Screens/Login";
import Register from "./Screens/Register";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/ads" component={Ads} />
        <Route path="/user" component={Users} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;
