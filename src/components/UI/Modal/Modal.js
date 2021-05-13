import React from "react";

import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <>
      {props.showModal ? (
        <div className={classes.Modal}>{props.children}</div>
      ) : null}
    </>
  );
};

export default Modal;
