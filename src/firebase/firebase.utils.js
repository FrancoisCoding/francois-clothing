import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCPp65qkZ6L7XfwI0VPx56fA-KjC-ntwMQ",
  authDomain: "clothing-db-7d723.firebaseapp.com",
  projectId: "clothing-db-7d723",
  storageBucket: "clothing-db-7d723.appspot.com",
  messagingSenderId: "334777715821",
  appId: "1:334777715821:web:c4b8b0d790636c9ab34364",
  measurementId: "G-NGQCZMYLBY",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
