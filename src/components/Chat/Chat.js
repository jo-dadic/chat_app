import React, { useState, useContext, useRef, useEffect } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { AuthContext } from "../../Auth";
import { firestore, timestamp } from "../../firebase";

import Message from "./Message/Message";
import UploadPhoto from "./UploadPhoto/UploadPhoto";

import classes from "./Chat.module.css";

const Messages = () => {
  const { currentUser } = useContext(AuthContext);
  const [value, setValue] = useState("");
  const msgEndRef = useRef(null);

  const sendMessageHandler = async (e) => {
    e.preventDefault();

    const { uid, displayName } = currentUser;

    await messagesFirebase.add({
      text: value,
      createdAt: timestamp,
      uid,
      nickname: displayName,
    });

    setValue("");
  };

  const messagesFirebase = firestore.collection("messages");
  const query = messagesFirebase.orderBy("createdAt").limitToLast(25);

  const [messages] = useCollectionData(query, { idField: "id" });
  console.log(messages);

  // to scroll to the last message:
  const scrollToBottom = () => {
    msgEndRef.current.scrollIntoView({ behaviour: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className={classes.Chat}>
      <div className={classes.Messages}>
        {messages &&
          messages.map((msg) => <Message key={msg.id} message={msg} />)}
        <div ref={msgEndRef} />
      </div>
      <div className={classes.MsgForm}>
        <form onSubmit={sendMessageHandler}>
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            name="new-message"
            placeholder="Say something"
            autoComplete="off"
          />
          <button className={classes.Submit} type="submit">
            Send
          </button>
        </form>
      </div>
      <div>
        <UploadPhoto />
      </div>
    </div>
  );
};

export default Messages;
