import { createSlice } from "@reduxjs/toolkit";

import app, { adminId } from "../firebase";

const logInSlice = createSlice({
  name: "login",
  initialState: { error: null, isAdmin: null },
  reducers: {
    setError(state, action) {
      state.error = action.payload;
    },
    setAdmin(state) {
      state.isAdmin = adminId;
    },
  },
});

export const logInActions = logInSlice.actions;

export const logIn = (email, password, history) => {
  return async (dispatch) => {
    try {
      await app.auth().signInWithEmailAndPassword(email.value, password.value);

      history.push("/");
    } catch (error) {
      dispatch(logInActions.setError(error.message));
      // alert(error);
    }
  };
};

export const adminLogIn = (email, password, history) => {
  return async (dispatch) => {
    try {
      await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
          const user = userCredential.user;
          if (user.uid === adminId) {
            user
              .updateProfile({
                displayName: "Admin",
              })
              .then(dispatch(logInActions.setAdmin()))
              .then(history.push("/"));
          } else {
            dispatch(
              logInActions.setError(
                "You are not an admin. Please sign up or log in."
              )
            );
            // alert("You are not an admin. Please sign up or log in.");
          }
        });
    } catch (error) {
      dispatch(logInActions.setError(error.message));
    }
  };
};

export default logInSlice.reducer;
