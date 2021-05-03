import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import app from "../../../firebase";
// import firebaseAdmin from "../../../firebase-admin";

import classes from "../Login.module.css";

const AdminLogIn = ({ history }) => {
  const adminLogInHandler = useCallback(
    async (e) => {
      e.preventDefault();

      const { email, password } = e.target.elements;

      await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
          const user = userCredential.user;
          if (user.uid === "cm8O7wcc6UZcd5FiMQgJ0k56hS92") {
            user
              .updateProfile({
                displayName: "Admin",
              })
              .then(history.push("/"));
          } else {
            alert("You are not an admin!");
          }
        });
    },
    [history]
  );

  return (
    <>
      <div className={classes.Login}>
        <h2>Hello Admin, log in to proceed.</h2>
        <form onSubmit={adminLogInHandler}>
          <div className={classes.control}></div>
          <div className={classes.control}>
            <label>
              Email
              <input name="email" type="email" placeholder="Email" />
            </label>
          </div>
          <div className={classes.control}>
            <label>
              Password
              <input name="password" type="password" placeholder="Password" />
            </label>
          </div>

          <button type="submit">Log In</button>
          <div>
            <p>
              You're not an Admin? <Link to="/login">Log in</Link> as User.
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default withRouter(AdminLogIn);