import { useState } from "react";
import styles from "./NewMessageForm.module.css";

const NewMessageForm = (props) => {
  const { onNewMessage } = props;
  const [text, setText] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const newMessage = {
      id: Date.now(),
      body: text,
      createdDate: Date.now(),
      sender: "Dima",
      senderId: "1",
    };
    onNewMessage(newMessage)
    setText("");
  };
  return (
    <form onSubmit={submitHandler} className={styles.Form}>
      <input
        className={styles.Input}
        placeholder="type youre message.."
        type="text"
        name="text"
        id="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button className={styles.Button} type="submit">
        add
      </button>
    </form>
  );
};

export default NewMessageForm;
