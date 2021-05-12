import React, { useEffect, useState } from "react";
import app from "./firebase";

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
