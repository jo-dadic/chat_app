import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import { adminLogIn } from "../../../store/logIn";
import Spinner from "../../UI/Spinner/Spinner";

import classes from "../Login.module.css";

const AdminLogIn = ({ history }) => {
  const [spinner, setSpinner] = useState(false);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.login.error);
  const admin = useSelector((state) => state.login.isAdmin);

  const adminLogInHandler = (e) => {
    e.preventDefault();
    setSpinner(true);

    const { email, password } = e.target.elements;

    dispatch(adminLogIn(email, password, history));
    setSpinner(false);
    console.log(admin);
  };

  return (
    <>
      <div className={classes.Login}>
        <h2>Hello Admin, log in to proceed.</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={adminLogInHandler}>
          <div className={classes.control}></div>
          <div className={classes.control}>
            <label>
              Email
              <input name="email" type="email" placeholder="Enter email" />
            </label>
          </div>
          <div className={classes.control}>
            <label>
              Password
              <input
                name="password"
                type="password"
                placeholder="Enter password"
              />
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
      {spinner && <Spinner />}
    </>
  );
};

export default withRouter(AdminLogIn);
