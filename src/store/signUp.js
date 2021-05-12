import { createSlice } from "@reduxjs/toolkit";

import app from "../firebase";

const signUpSlice = createSlice({
  name: "signup",
  initialState: { name: "", error: null },
  reducers: {
    saveName(state, action) {
      state.name = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const signInActions = signUpSlice.actions;

export const signUp = (email, password, history, name) => {
  return async (dispatch) => {
    await app
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        user.updateProfile({
          displayName: name,
        });
      })
      .then(history.push("/"))
      .catch((error) => {
        app.auth().signOut();
        dispatch(signInActions.setError(error));
        // alert(error);
        history.push("/signup");
      });
  };
};

export default signUpSlice.reducer;
