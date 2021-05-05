import React, { useState } from "react";

import ProgressBar from "../../UI/ProgressBar/ProgressBar";

import classes from "./UploadPhoto.module.css";

const UploadPhoto = (props) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  };

  return (
    <form className={classes.UploadPhoto}>
      <label htmlFor="file">
        <i className="fas fa-upload"></i>Send a photo
        <input type="file" id="file" onChange={changeHandler} />
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadPhoto;
