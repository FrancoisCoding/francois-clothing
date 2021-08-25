import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Routes from "./utils/Routes";
import { auth } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [unsubscribeFromAuth, setUnsubscribeFromAuth] = useState();

  useEffect(() => {
    setUnsubscribeFromAuth(
      auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
      })
    );

    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribeFromAuth();
    };
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
