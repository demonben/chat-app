import React, { useEffect, useState } from "react";
import style from "./Message.module.css";
import format from "date-fns/format";
import firebase from "firebase/compat/app";
import { logDOM } from "@testing-library/react";

const Message = (props) => {
  const [sender, setSender] = useState(null);
  const { message } = props;
  const { senderId } = message;
  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(senderId)
      .get()
      .then((doc) => {
        const sender = {
          ...doc.data(),
          id: doc.id,
        };
        setSender(sender);
      });
  }, [senderId]);
  return (
    <div className={style.Message}>
      <div className={style.UserIcon}>
        {sender ? sender.name.substring(0, 1) : ""}
      </div>
      <div className={style.MessageBody}>
        <div className={style.MessageDate}>
          {format(message.createdDate, "EEEE p")}
        </div>
        <div className={style.MessageText}>{message.body}</div>
      </div>
    </div>
  );
};

export default Message;
