import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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

initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // Google Access Token
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, "Error Code");
      console.log(errorMessage, "Error Message");
      console.log(email, "Email");
      console.log(credential, "Credential");
    });
