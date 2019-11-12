import React from "react";
import STORE from "../STORE";

export default function Stage(props) {
  const name = STORE.participants.name;
  const avatar = STORE.participants.avatar;
  const id = STORE.participants.id;
  return (
    <div>
      <div className="stage">{name}</div>
      <img src={avatar} id={id} alt="user avatar" />
    </div>
  );
}
