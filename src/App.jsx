import { useState } from "react";

import "./App.css";

import Password from "./Password";
import Scrollbar from "./Scrollbar";
import Strength from "./Strength";

function App() {
  return (
    <div className="App">
      <p className="generator-text">Password Generator</p>
      <Password />
      <div className="func-section">
        <Scrollbar />
        <Strength />
      </div>
    </div>
  );
}

export default App;
