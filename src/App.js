import React from "react";
import Participants from "./components/Participants";
import ChatLog from "./components/ChatLog";
import Stage from "./components/Stage";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <Participants participants={props.store.participants} />
      <ChatLog
        chatEvents={props.store.chatEvents}
        participants={props.store.participants}
      />
      <Stage participants={props.store.participants} />
    </div>
  );
}

export default App;
