import React, { useState, useContext } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { AuthContext } from "../../Auth";
import firebase from "firebase/app";
import { firestore } from "../../firebase";

import Message from "./Message/Message";

import classes from "./Chat.module.css";

const Messages = () => {
  const { currentUser } = useContext(AuthContext);
  const [value, setValue] = useState("");

  const sendMessageHandler = async (e) => {
    e.preventDefault();

    const { uid, displayName } = currentUser;

    await messagesFirebase.add({
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      nickname: displayName,
    });

    window.scrollTo(0, 0);
    setValue("");
  };

  const messagesFirebase = firestore.collection("messages");
  const query = messagesFirebase.orderBy("createdAt").limitToLast(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  return (
    <div className={classes.Chat}>
      <div className={classes.Messages}>
        {messages &&
          messages.map((msg) => <Message key={msg.id} message={msg} />)}
      </div>
      <form onSubmit={sendMessageHandler}>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          name="new-message"
          placeholder="Say something"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Messages;
