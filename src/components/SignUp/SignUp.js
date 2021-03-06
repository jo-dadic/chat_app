import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import { signInActions, signUp } from "../../store/signUp";
import Spinner from "../UI/Spinner/Spinner";

import classes from "./SignUp.module.css";

const SignIn = ({ history }) => {
  const [spinner, setSpinner] = useState(false);
  const dispatch = useDispatch();
  const name = useSelector((state) => state.signup.name);

  const nameHandler = (e) => {
    dispatch(signInActions.saveName(e.target.value));
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    setSpinner(true);

    const { email, password } = e.target.elements;

    dispatch(signUp(email, password, history, name));
    setSpinner(false);
  };

  return (
    <>
      <div className={classes.Signup}>
        <h2>Please Sign Up to proceed.</h2>
        <form onSubmit={signUpHandler} autoComplete="off">
          <div className={classes.control}>
            <label>
              Name
              <input
                name="name"
                type="text"
                placeholder="Chose a name"
                onChange={nameHandler}
                autoComplete="off"
                required
              />
            </label>
          </div>
          <div className={classes.control}>
            <label>
              Email
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </label>
          </div>
          <div className={classes.control}>
            <label>
              Password
              <input
                name="password"
                type="password"
                placeholder="Enter password"
                required
              />
            </label>
          </div>
          <button type="submit">Sign Up</button>
          <div>
            <p>
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
          <div>
            <p>
              <Link to="/admin">Log in as Admin.</Link>
            </p>
          </div>
        </form>
      </div>
      {spinner && <Spinner />}
    </>
  );
};

export default withRouter(SignIn);
