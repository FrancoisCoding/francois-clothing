import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Routes from "./utils/Routes";
import { auth } from "./firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [unsubscribeFromAuth, setUnsubscribeFromAuth] = useState();

  useEffect(() => {
    setUnsubscribeFromAuth(
      onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
      })
    );

    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  console.log(currentUser, "CURRENT USER");
  return (
    <div>
      <Header currentUser={currentUser} />
      <Routes />
    </div>
  );
}

export default App;
