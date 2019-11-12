import React from "react";
import STORE from "../STORE";

export default function inSession(props) {
  const id = STORE.participants.id;
  return <p id={id}>in session</p>;
}
