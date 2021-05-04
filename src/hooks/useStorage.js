import { useState, useEffect } from "react";
import { fireStorage, firestore, timestamp } from "../firebase";

const useStorage = (file) => {
  const [progress, setProgress] = useState();
  const [error, setError] = useState();
  const [url, setUrl] = useState();

  useEffect(() => {
    const storageRef = fireStorage.ref(file.name); // reaching to the file inside the storage
    const collectionRef = firestore.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100; // percentage of the upload
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp;
        collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
