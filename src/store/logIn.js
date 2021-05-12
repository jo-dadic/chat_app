import { createSlice } from "@reduxjs/toolkit";

import app from "../firebase";

const logInSlice = createSlice({
  name: "login",
  initialState: { error: null },
  reducers: {
    setError(state, action) {
      state.error = action.payload;
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
    await app
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.uid === "xB3QSxC7WthkNWFesEf285heBzi1") {
          user
            .updateProfile({
              displayName: "Admin",
            })
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
  };
};

export default logInSlice.reducer;
