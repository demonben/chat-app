import React from "react";
import Message from "./Message";

const MessagesList = (props) => {
  const { messages } = props;

  const messageListItem = messages.map((message) => (
    <Message key={message.id} message={message} />
  ));
  return <div>{messageListItem}</div>;
};

export default MessagesList;
