import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Auth-context";

import Modal from "../../UI/Modal/Modal";

import classes from "./Message.module.css";

const Message = (props) => {
  const { currentUser } = useContext(AuthContext);
  const { text, uid, nickname, url } = props.message;
  const [showModal, setShowModal] = useState(false);

  const msgClass =
    uid === currentUser.uid ? classes.MessageSent : classes.MessageReceived;

  const modalHandler = () => {
    setShowModal((prev) => !prev);
  };

  let img = null;
  if (url) {
    img = (
      <img
        src={url}
        alt="new-img"
        style={{ maxWidth: "500px", maxHeight: "70vh" }}
        onClick={modalHandler}
      />
    );
  }

  return (
    <>
      <div className={`${msgClass}`}>
        <h4>{nickname} says:</h4>
        <div className={classes.Msg}>
          <p>{text}</p>
          {img}
        </div>
      </div>
      <Modal showModal={showModal}>{img}</Modal>
    </>
  );
};

export default Message;
