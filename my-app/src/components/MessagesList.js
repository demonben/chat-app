import Message from "./Message";
import style from './MessagesList.module.css'

const MessagesList = (props) => {
  const { messages } = props;

  const messageListItem = messages.map((message) => (
    <Message key={message.id} message={message} />
  ));
  return <div className={style.List}>{messageListItem}</div>;
};

export default MessagesList;
