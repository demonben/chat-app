import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/auth";
import ChatRoom from "./components/ChatRoom";
import Login from "./components/Login";
import { AuthContext } from "./context/AuthContex";

const firebaseConfig = {
  apiKey: "AIzaSyBLATOMAS_t-TLsuwsRwZJzxZe5rStXsGU",
  authDomain: "dima-ben-project.firebaseapp.com",
  projectId: "dima-ben-project",
  storageBucket: "dima-ben-project.appspot.com",
  messagingSenderId: "17483853397",
  appId: "1:17483853397:web:3b21cecdff4949275e6edc",
};

firebase.initializeApp(firebaseConfig);

function App() {
  const [authUser, setAuthUser] = useState(null);

  const login = async (authUser) => {
    setAuthUser(authUser);
    await firebase
      .firestore()
      .collection("users")
      .doc(authUser.uid)
      .set({ name: authUser.displayName });
  };
  const logout = async () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setAuthUser(null);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authUser,
        login,
        logout,
      }}
    >
      {authUser ? <ChatRoom /> : <Login />}
    </AuthContext.Provider>
  );
}

export default App;
