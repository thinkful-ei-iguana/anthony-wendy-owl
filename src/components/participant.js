import React from "react";
import OnStage from "./onStage";
import InSession from "./inSession";

export default function Participant(props) {
  return (
    <div className="App">
      <section className="participant-box">
        <li className="user">
          <img src={props.list.avatar} alt="user avatar" />
          <h5>{props.list.name}</h5>
          <OnStage />
        </li>
      </section>
    </div>
  );
}
// } else {
//   return (
//     <div className="App">
//       <section className="participant-box">
//         <li className="user">
//           <img src={STORE.participants.avatar} alt="user avatar" />
//           <h5>{STORE.participants.name}</h5>
//           <InSession />
//         </li>
//       </section>
//     </div>
//   );
// }
