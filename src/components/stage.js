import React from "react";
import "./Stage.css";

export default function Stage(props) {
  const stage = props.participants.map(participant => {
    if (participant.onStage) {
      return (
        <div className="on-stage">
          <h2 className="stage-person" key={participant.id}>
            {participant.name}
          </h2>
          <img
            src={participant.avatar}
            alt="user avatar"
            className="img-stage"
          />
        </div>
      );
    }
  });
  return <div className="stage">{stage}</div>;
}
Stage.defaultProps = {
  participants: []
};
