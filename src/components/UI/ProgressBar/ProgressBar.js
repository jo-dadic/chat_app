import React, { useEffect } from "react";
import useStorage from "../../../hooks/useStorage";

import classes from "./ProgressBar.module.css";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div
      className={classes.ProgressBar}
      style={{ width: progress + "%" }}
    ></div>
  );
};

export default ProgressBar;
