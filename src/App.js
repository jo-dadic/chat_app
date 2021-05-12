import React from "react";
import { Route } from "react-router-dom";
import { NotificationContainer } from "react-notifications";

import Toolbar from "./components/UI/Toolbar/Toolbar";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import AdminLogIn from "./components/Login/AdminLogIn/AdminLogIn";
import Home from "./components/Home/Home";
import Chat from "./components/Chat/Chat";
import PrivateRoute from "./hoc/PrivateRoute";

import classes from "./App.module.css";

const App = () => {
  return (
    <div className={classes.App}>
      <NotificationContainer />
      <Toolbar />
      <PrivateRoute exact path="/" component={Home} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/admin" component={AdminLogIn} />
      <PrivateRoute exact path="/chat" component={Chat} />
    </div>
  );
};

export default App;
