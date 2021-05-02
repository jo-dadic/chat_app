import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth";

import classes from "./Home.module.css";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <div className={classes.Home}>
      <h1>Welcome to my chat app, {currentUser.displayName}</h1>
      <h3>Choose a room:</h3>
      <Link to="/chat">Chat</Link>
    </div>
  );
};

export default Home;
