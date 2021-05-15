import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth-context";

import classes from "./Home.module.css";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className={classes.Home}>
      <h1>Welcome to my chat app, {currentUser.displayName}</h1>
      <h2>Choose a room:</h2>
      <Link to="/chat">
        <button>Chat</button>
        <button>Netflix</button>
        <button>Hiking</button>
      </Link>
    </div>
  );
};

export default Home;