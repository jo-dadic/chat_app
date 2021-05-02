import React, { useContext } from "react";
import { AuthContext } from "../../../Auth";

import classes from "./Message.module.css";

const Message = (props) => {
  const { currentUser } = useContext(AuthContext);
  const { text, uid } = props.message;

  return (
    <div className={classes.Message}>
      <h4>{currentUser.displayName} says:</h4>
      <div className={classes.Msg}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Message;
