import MessagesList from "./components/MessagesList";
import Navbar from "./components/Navbar";
import NewMessageForm from "./components/NewMessageForm";

const users = [
  {
    id: 1,
    name: "Dima",
  },
  { id: 2, name: "Lisa" },
];

const messages = [
  {
    id: 1,
    body: "Hello Lisa",
    createdDate: Date.now(),
    sender: "Dima",
    senderId: 1,
  },
  {
    id: 2,
    body: "Hello Dima",
    createdDate: Date.now(),
    sender: "Lisa",
    senderId: 2,
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <MessagesList messages={messages} />
      <NewMessageForm />
    </div>
  );
}

export default App;
