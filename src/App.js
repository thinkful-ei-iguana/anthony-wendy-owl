import React from "react";
import Stage from "./components/Stage";
import "./App.css";
import STORE from "./STORE";
import Participants from "./components/Participants";


function App() {
  
  return (
    <div className="App">
      <Participants participants={STORE.participants[0].name} />
      
      <Stage />
    </div>
  );
}

export default App;

// key={STORE.participants.id}
// name={STORE.participants.name}
// avatar={STORE.participants.avatar} 
// inSession={STORE.participants.inSession}
// onStage={STORE.participants.onStage} />