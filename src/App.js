import React from "react";
import Stage from "./components/Stage";
import "./App.css";
import STORE from "./STORE";
import Participant from "./components/Participant";

function App() {
  return (
    <div className="App">
      <Participant list={STORE.participants} />
      <Stage />
    </div>
  );
}

export default App;
