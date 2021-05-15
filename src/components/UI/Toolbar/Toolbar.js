import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import app from "../../../firebase";
import { AuthContext } from "../../../Auth-context";

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
        <Link to="/chat">
          <i className="fab fa-rocketchat" style={{ fontSize: 36 }}></i>
          <h1> Chat App</h1>
        </Link>
      </div>
      {currentUser && <button onClick={signOutHandler}>Sign Out</button>}
      {!currentUser && null}
    </div>
  );
};

export default Toolbar;
