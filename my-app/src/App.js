import MessagesList from "./components/MessagesList";
import Navbar from "./components/Navbar";
import NewMessageForm from "./components/NewMessageForm";
import styles from "./App.module.css";
import { messages as MockMessage } from "./mockDate";
import { useState } from "react";

function App() {
  const [messages, setMessages] = useState(MockMessage);
  const handleOnNewMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
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
