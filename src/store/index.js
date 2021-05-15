import { configureStore } from "@reduxjs/toolkit";

import signUpReducer from "./signUp";
import logInReducer from "./logIn";
import roomsReducer from "./room";

const store = configureStore({
  reducer: {
    signup: signUpReducer,
    login: logInReducer,
    rooms: roomsReducer,
  },
});

export default store;
