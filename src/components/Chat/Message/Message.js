import React, { useContext } from "react";
import { AuthContext } from "../../../Auth-context";

import classes from "./Message.module.css";

const Message = (props) => {
  const { currentUser } = useContext(AuthContext);
  const { text, uid, nickname, url } = props.message;

  const msgClass =
    uid === currentUser.uid ? classes.MessageSent : classes.MessageReceived;

  let img = null;
  if (url) {
    img = (
      <img
        src={url}
        alt="new-img"
        style={{ width: "150px", height: "200px" }}
      />
    );
  }

  return (
    <div className={`${msgClass}`}>
      <h4>{nickname} says:</h4>
      <div className={classes.Msg}>
        <p>{text}</p>
        {img}
      </div>
    </div>
  );
};

export default Message;
