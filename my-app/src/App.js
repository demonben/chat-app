import { useState, useEffect } from "react";
import MessagesList from "./components/MessagesList";
import Navbar from "./components/Navbar";
import NewMessageForm from "./components/NewMessageForm";
import styles from "./App.module.css";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

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
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("messages")
      .orderBy("createdDate", "desc")
      .onSnapshot((snap) => {
        const messages = snap.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMessages(messages);
      });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleOnNewMessage = async (newMessage) => {
    await firebase.firestore().collection("messages").add(newMessage);
  };
  return (
    <div className={styles.App}>
      <Navbar />
      <MessagesList messages={messages} />
      <NewMessageForm onNewMessage={handleOnNewMessage} />
    </div>
  );
}

export default App;
