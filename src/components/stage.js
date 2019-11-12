import React from "react";

export default function Stage(props) {
  const name = props.store.participants.name
  const avatar = props.store.participants.avatar
  const id = props.store.participants.id;
  return (

    <div>
      <div className="stage">{name}</div>
      <img src={avatar} id={id} alt="user avatar"/>
    </div>
  )
}
