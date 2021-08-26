import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Routes from "./utils/Routes";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./actions";
import { onSnapshot } from "firebase/firestore";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);

  useEffect(() => {
    onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        onSnapshot(userRef, (snapshot) => {
          dispatch(setUser({ id: userAuth.uid, ...snapshot.data() }));
        });
      }
      dispatch(setUser(userAuth));
    });
  }, []);

  return (
    <div>
      <Header />
      <Routes />
    </div>
  );
}

export default App;
