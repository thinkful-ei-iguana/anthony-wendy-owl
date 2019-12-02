import React from "react";
import "./Participant.css";

export default function Participant(props) {
  return (
    <div className="side-bar">
      <section className="participant-box">
        <li className="user">
          <img src={props.avatar} alt="user avatar" />
          <div className="participant-info">
            <h5>{props.name}</h5>
            {props.onStage && <p>on stage</p>}
          </div>
        </li>
      </section>
    </div>
  );
}
