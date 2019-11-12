import React from "react";
import store from "../STORE";

export default function inSession(props) {
    const id = props.store.participants.id;
    return {
        '<p id={id}>in session</p>'
    }
}
