import React from "react";
import ChatItem from "./ChatItem";
import "./ChatLog.css";

export default function ChatLog(props) {
  const cList = props.chatEvents.map(item => (
    <ChatItem
      key={item.participantId}
      type={item.type}
      message={item.message}
      time={item.time}
      timestamp={item.timestamp}
    />
  ));
  return (
    <div className="chat-panel">
      <h1>Chat</h1>
      <div className="c-list">
        <li>{cList}</li>
      </div>
    </div>
  );
}
ChatLog.defaultProps = {
  chatEvents: []
};
