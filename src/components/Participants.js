import React from "react";

export default function Participants(props) {
  const participantsList = props.participants.filter(participant =>
    <Participants key={participant.id} name={participant.name} />
    )
  return (
    <div>
      <li>
       {participantsList}
       </li>
      </div>
    )
}

