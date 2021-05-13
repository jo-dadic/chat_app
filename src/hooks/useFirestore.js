// import { useState, useEffect } from "react";
// import { firestore } from "../firebase";

// const useFirestore = (collection) => {
//   const [docs, setDocs] = useState([]);

//   useEffect(() => {
//     const unsub = firestore
//       .collection(collection)
//       //   .orderBy("createdAt", "desc")
//       .onSnapshot((snap) => {
//         let documents = [];
//         snap.forEach((doc) => {
//           // cycle through each document in database at that exact time
//           documents.push({ ...doc.data(), id: doc.id });
//         });
//         setDocs(documents);
//       });

//     return () => unsub(); // unsubscribe from the collectzion when we no longer use it
//   }, [collection]);

//   return { docs };
// };

// export default useFirestore;
