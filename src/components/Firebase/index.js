import FirebaseContext from "./context";
// export default Firebase;
// export { FirebaseContext };

import firebase from "firebase";
import "@firebase/firestore";
import ReduxSagaFirebase from "redux-saga-firebase";
import { firebaseConfig } from "../../config/key";
// import cities from "../../city.list";
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// const ts = cities.map(city => {
//   const name = `${city.name}, ${city.country}`;
//   return {
//     id: city.id,
//     name,
//     label: `${city.name}, ${city.country}`,
//     value: `${city.name
//       .replace(" ", "")
//       .toLowerCase()}-${city.country.toLocaleLowerCase()}`
//   };
// });
// console.log('ts', ts);
// db.collection("cities").get().then(function(querySnapshot) {
//   querySnapshot.forEach(function(doc) {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
//   });
// });

// db.collection("cities")
//   .doc(ts[1].id.toString())
//   .set(ts[1])
//   .then(function(docRef) {
//     console.log("Document written with ID: ", docRef);
//   });
//
// db.collection("cities")
//   .doc(ts[2].id.toString())
//   .set(ts[2])
//   .then(function(docRef) {
//     console.log("Document written with ID: ", docRef);
//   });

const rsf = new ReduxSagaFirebase(firebaseApp);

export default rsf;
