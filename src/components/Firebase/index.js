import FirebaseContext from './context';
import Firebase from './Firebase';
// export default Firebase;
// export { FirebaseContext };

import firebase from 'firebase'
import '@firebase/firestore'
import ReduxSagaFirebase from 'redux-saga-firebase'
import config from "../../config/key";

const firebaseApp = firebase.initializeApp(config);

const rsf = new ReduxSagaFirebase(firebaseApp);

export default rsf
