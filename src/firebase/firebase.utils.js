import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const querySnapshot = await getDocs(collection(firestore, "users"));
  querySnapshot.forEach((doc) => {
    console.log(doc, "DOCUMENT");
    console.log(`${doc.id} => ${doc.data()}`);
  });

  console.log(userAuth, "UID");
  const docRef = doc(firestore, "users", userAuth.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    console.log("Creating User");
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(docRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
      console.log("User created successfully");
    } catch (err) {
      console.log("Error creating user", err.message);
    }
  }
};
