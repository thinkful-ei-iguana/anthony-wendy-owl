import react from "react";
import store from "../../STORE";

export default function thumbsUp(props) {
  const type = props.store.chatEvents.type;
  const userName = props.store.chatEvents.name;

  if (type === "thumbs-up") {
    return "";
  }
}
