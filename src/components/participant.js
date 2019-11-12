import React from "react";
import store from "../STORE";
import OnStage from "./onStage";
import InSession from "./inSession";

export default function Participant(props) {
  if (props.store.participants.onStage) {
    return (
      <div className="App">
        <section className="participant-box">
          <li className="user">
            <img src={props.participants.avatar} alt="user avatar" />
            <h5>{props.participants.name}</h5>
            <OnStage />
          </li>
        </section>
      </div>
    );
  } else {
    return (
      <div className="App">
        <section className="participant-box">
          <li className="user">
            <img src={props.participants.avatar} alt="user avatar" />
            <h5>{props.participants.name}</h5>
            <InSession />
          </li>
        </section>
      </div>
    );
  }
}
