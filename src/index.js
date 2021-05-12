import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Auth-context";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store/index";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </Router>,
  document.getElementById("root")
);
