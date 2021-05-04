import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import app from "../../firebase";

import classes from "./SignUp.module.css";

const SignIn = ({ history }) => {
  const [name, setName] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const signUpHandler = useCallback(
    async (e) => {
      e.preventDefault();

      const { email, password } = e.target.elements;

      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(history.push("/"))
        .then((userCredential) => {
          const user = userCredential.user;
          user.updateProfile({
            displayName: name,
          });
        })
        .catch((error) => {
          alert(error);
          history.push("/signup");
        });
    },
    [history, name]
  );

  // try {
  //   await app
  //     .auth()
  //     .createUserWithEmailAndPassword(email.value, password.value);
  //   history.push("/");
  // } catch (error) {
  //   alert(error);
  // }

  return (
    <>
      <div className={classes.Signup}>
        <h2>Please Sign Up to proceed.</h2>
        <form onSubmit={signUpHandler}>
          <div className={classes.control}>
            <label>
              Name
              <input
                name="name"
                type="text"
                placeholder="Name"
                onChange={nameHandler}
                autoComplete="off"
              />
            </label>
          </div>
          <div className={classes.control}>
            <label>
              Email
              <input name="email" type="email" placeholder="Email" required />
            </label>
          </div>
          <div className={classes.control}>
            <label>
              Password
              <input
                name="password"
                type="password"
                placeholder="Password"
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
    </>
  );
};

export default withRouter(SignIn);

// {newError && (
//   <p style={{ color: "red" }}>Something is wrong: {newError}</p>
// )}
