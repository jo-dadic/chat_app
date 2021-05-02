import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import app from "../../../firebase";
import { AuthContext } from "../../../Auth";

import classes from "./Toolbar.module.css";

const Toolbar = () => {
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  const signOutHandler = () => {
    app.auth().signOut();
    history.push("/login");
  };

  return (
    <div className={classes.Toolbar}>
      <div className={classes.title}>
        <i className="fab fa-rocketchat" style={{ fontSize: 36 }}></i>
        <h1>Hive Tech Chat App</h1>
      </div>
      {currentUser && <button onClick={signOutHandler}>Sign Out</button>}
      {!currentUser && null}
    </div>
  );
};

export default Toolbar;
