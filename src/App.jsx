import "./App.css";

import Strength from "./Strength";
import { Padding } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
      <p className="generator-text">Password Generator</p>

      <div className="func-section">
        <Strength />
      </div>
    </div>
  );
}

export default App;
