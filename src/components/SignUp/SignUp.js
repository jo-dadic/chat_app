import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import app from "../../firebase";

import Spinner from "../UI/Spinner/Spinner";

import classes from "./SignUp.module.css";

const SignIn = ({ history }) => {
  const [name, setName] = useState("");
  const [spinner, setSpinner] = useState(false);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const signUpHandler = useCallback(
    async (e) => {
      e.preventDefault();
      setSpinner(true);

      const { email, password } = e.target.elements;

      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
          const user = userCredential.user;
          user.updateProfile({
            displayName: name,
          });
        })
        .then(setSpinner(false))
        .then(history.push("/"))
        .catch((error) => {
          app.auth().signOut();
          alert(error);
          history.push("/signup");
        });
    },
    [history, name]
  );

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
