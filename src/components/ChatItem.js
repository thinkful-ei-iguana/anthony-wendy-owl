import React from "react";

export default function ChatItem(props) {
  return (
    <div className="side-bar">
      <section className="chat-box">
        <li className="user">
          <img src={props.avatar} alt="user avatar" />
          <div className="chat-info">
            <h5>{props.message}</h5>
          </div>
        </li>
      </section>
    </div>
  );
}
