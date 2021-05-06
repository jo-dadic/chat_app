import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";
import app from "../../firebase";
import { AuthContext } from "../../Auth";

import Spinner from "../UI/Spinner/Spinner";

import classes from "./Login.module.css";

const Login = ({ history }) => {
  const [spinner, setSpinner] = useState(false);

  const loginHandler = useCallback(
    async (e) => {
      e.preventDefault();
      setSpinner(true);

      const { email, password } = e.target.elements;

      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value)
          .then(setSpinner(false));
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className={classes.Login}>
        <h2>Please Log In to proceed.</h2>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">E-mail:</label>
            <input id="email" type="email" placeholder="Enter Email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" placeholder="Enter Password" />
          </div>
          <button type="submit">Log In</button>
        </form>
        <div>
          <p>
            Don't have an account? Feel free to{" "}
            <Link to="/signup">Sign Up</Link>
          </p>
        </div>
        <div>
          <p>
            <Link to="/admin">Log in as Admin.</Link>
          </p>
        </div>
      </div>
      {spinner && <Spinner />}
    </>
  );
};

export default withRouter(Login);
