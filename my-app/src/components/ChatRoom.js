import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import Navbar from "./Navbar";
import MessagesList from "./MessagesList";
import NewMessageForm from "./NewMessageForm";
import styles from './ChatRoom.module.css'

const ChatRoom = () => {
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
    <div className={styles.ChatRoom}>
      <Navbar />
      <MessagesList messages={messages} />
      <NewMessageForm onNewMessage={handleOnNewMessage} />
    </div>
  );
};

export default ChatRoom;
