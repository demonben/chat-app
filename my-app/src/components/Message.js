import React from "react";
import style from "./Message.module.css";
import format from 'date-fns/format'
const Message = (props) => {
  const { message } = props;
  // const sender = 
  return (
    <div className={style.Message}>
      <div className={style.UserIcon}>R</div>
      <div className={style.MessageBody}>
        <div className={style.MessageDate}>{format(message.createdDate, 'EEEE p')}</div>
        <div className={style.MessageText}>{message.body}</div>
      </div>
    </div>
  );
};

export default Message;
