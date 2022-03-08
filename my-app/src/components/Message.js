import React from "react";
import style from "./Message.module.css";

const Message = () => {
  return (
    <div className={style.Message}>
      <div className={style.UserIcon}>R</div>
      <div className={style.MessageBody}>
        <div className={style.MessageDate}>sunday 13:13AM</div>
        <div className={style.MessageText}>blabalbal</div>
      </div>
    </div>
  );
};

export default Message;
