import { useState, useEffect, useContext } from "react";
import { fireStorage, firestore, timestamp } from "../firebase";
import { AuthContext } from "../Auth-context";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0); // upload progress
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null); // image url

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const storageRef = fireStorage.ref(file.name); // reaching to the file inside the storage
    const collectionRef = firestore.collection("messages");

    const { displayName, uid } = currentUser;

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100; // percentage of the upload
        setProgress(percentage);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp;
        const nickname = displayName;
        collectionRef.add({ url, createdAt, nickname, uid });
        setUrl(url);
      }
    );
  }, [file, currentUser]);

  return { progress, url, error };
};

export default useStorage;
