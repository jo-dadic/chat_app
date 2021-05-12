import { configureStore } from "@reduxjs/toolkit";

import signUpReducer from "./signUp";
import logInReducer from "./logIn";
// import sendMsgReducer from "./sendMsg";
// import uploadPhotoReducer from "./uploadPhoto";

const store = configureStore({
  reducer: {
    signup: signUpReducer,
    login: logInReducer,
    // sendMsg: sendMsgReducer,
    // uploadPhoto: uploadPhotoReducer,
  },
});

export default store;
