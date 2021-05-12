import React, { useCallback, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth-context";

import { logIn } from "../../store/logIn";
import Spinner from "../UI/Spinner/Spinner";

import classes from "./Login.module.css";

const Login = ({ history }) => {
  const [spinner, setSpinner] = useState(false);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.login.error);

  const loginHandler = useCallback(
    (e) => {
      e.preventDefault();
      setSpinner(true);

      const { email, password } = e.target.elements;

      dispatch(logIn(email, password, history));
      setSpinner(false);
    },
    [history, dispatch]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className={classes.Login}>
        <h2>Please Log In to proceed.</h2>
        {error && <p style={{ color: "red" }}>Opss... {error}</p>}
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
