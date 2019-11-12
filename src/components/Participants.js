import React from "react";
import Participant from "./Participant";

export default function Participants(props) {
  return (
    props.participants.filter(participant => {
            return participant.inSession;
    }
  )
}
