import React from "react";
import styles from "./NewMessageForm.module.css";

const NewMessageForm = () => {
  return (
    <form className={styles.Form}>
      <input
        className={styles.Input}
        placeholder="type youre message.."
        type="text"
        name="text"
        id="text"
      />
      <button className={styles.Button} type="submit">
        add
      </button>
    </form>
  );
};

export default NewMessageForm;
