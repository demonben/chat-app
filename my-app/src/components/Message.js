import React from "react";
import style from "./Message.module.css";
import format from "date-fns/format";
import { users } from "../mockDate";

const Message = (props) => {
  const { message } = props;
  const sender = users.find((user) => user.id === message.senderId);
  return (
    <div className={style.Message}>
      <div className={style.UserIcon}>{sender.name.substring(0, 1)}</div>
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
