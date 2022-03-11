import { useContext, useState } from "react";
import { AuthContext } from "context/AuthContex";
import styles from "./NewMessageForm.module.css";

const NewMessageForm = (props) => {
  const authContex = useContext(AuthContext);
  const { onNewMessage } = props;
  const [text, setText] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const newMessage = {
      body: text,
      createdDate: Date.now(),
      senderId: authContex.authUser.uid,
    };
    onNewMessage(newMessage);
    setText("");
  };
  return (
    <form onSubmit={submitHandler} className={styles.Form}>
      <input
        className={styles.Input}
        placeholder=" Type youre message.."
        type="text"
        name="text"
        id="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button className={styles.Button} type="submit">
        Send
      </button>
    </form>
  );
};

export default NewMessageForm;
