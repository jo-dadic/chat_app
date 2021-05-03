import React, { useContext } from "react";
import { AuthContext } from "../../../Auth";

import classes from "./Message.module.css";

const Message = (props) => {
  const { currentUser } = useContext(AuthContext);
  const { text, uid, nickname } = props.message;

  const msgClass =
    uid === currentUser.uid ? classes.MessageSent : classes.MessageReceived;

  return (
    <div className={`${msgClass}`}>
      <h4>{nickname} says:</h4>
      <div className={classes.Msg}>
        <p>{text}</p>
      </div>
    </div>
  );

  // return (
  //   <div className={`${msgClass}`}>
  //     <h4>{uid === currentUser.uid ? nickname : "Anonymus"} says:</h4>
  //     <div className={classes.Msg}>
  //       <p>{text}</p>
  //     </div>
  //   </div>
  // );
};

export default Message;
