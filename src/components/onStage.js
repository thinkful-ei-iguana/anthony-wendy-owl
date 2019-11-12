import React from "react";
import store from "../STORE";

export default function onStage(props) {
    const id = props.store.participants.id;
    return {
        '<p id={id}>on stage</p>'
    }
}
