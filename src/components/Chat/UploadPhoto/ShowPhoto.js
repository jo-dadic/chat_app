// import React from "react";
// import useFirestore from "../../../hooks/useFirestore";

// const ShowPhoto = (props) => {
//   const { docs } = useFirestore("images");
//   console.log(docs);

//   let image = null;

//   if (docs) {
//     image = docs.map((img) => {
//       return (
//         <img
//           key={img.id}
//           src={img.url}
//           alt="new-img"
//           style={{ width: "100px", height: "130px" }}
//         />
//       );
//     });
//   }

//   return (
//     <div>
//       <h4>{docs.user} says:</h4>
//       {image}
//     </div>
//   );
// };

// export default ShowPhoto;
