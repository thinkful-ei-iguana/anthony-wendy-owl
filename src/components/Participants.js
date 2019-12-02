import React from "react";
import Participant from "./Participant";
import "./Participants.css";

export default function Participants(props) {
  const pList = props.participants.map(participant => (
    <Participant
      key={participant.id}
      name={participant.name}
      avatar={participant.avatar}
      inSession={participant.inSession}
      onStage={participant.onStage}
    />
  ));
  return (
    <div className="participant-panel">
      <h1>Participants</h1>
      <div className="p-list">
        <li>{pList}</li>
      </div>
    </div>
  );
}
Participants.defaultProps = {
  participants: []
};
