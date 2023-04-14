import { useState } from "react";
import Strong from "./assets/strong.png";
import Medium from "./assets/medium.png";
import Weak from "./assets/weak.png";
import TooWeak from "./assets/tooweak.png";



import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Strength.css";

function Strength() {
  const [checkedBoxes, setCheckedBoxes] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedBoxes([...checkedBoxes, value]);
    } else {
      setCheckedBoxes(checkedBoxes.filter((item) => item !== value));
    }
  };

  const getImage = () => {
    const numChecked = checkedBoxes.length;
    if (numChecked === 1) {
      return <img src={TooWeak} />;
    } else if (numChecked === 2) {
      return <img src={Weak} />;
    } else if (numChecked === 3) {
      return <img src={Medium} />;
    } else if (numChecked === 4) {
      return <img src={Strong} />;
    }
  };

  const generatePsw = (e)=>{

  }
  return (
    <div className="points">
      <form>
        <label for="uppercase" class="container">
          Include Uppercase Letters
          <input
            type="checkbox"
            id="uppercase"
            name="uppercase"
            value="upper"
            onChange={handleCheckboxChange}
          />
          <span class="checkmark"></span>
        </label>

        <label for="lowercase" class="container">
          Include Lowercase Letters
          <input
            type="checkbox"
            id="lowercase"
            name="lowercase"
            value="lower"
            onChange={handleCheckboxChange}
          />
          <span class="checkmark"></span>
        </label>

        <label for="numbers" class="container">
          Include Numbers
          <input
            type="checkbox"
            id="numbers"
            name="numbers"
            value="nums"
            onChange={handleCheckboxChange}
          />
          <span class="checkmark"></span>
        </label>

        <label for="symbols" class="container">
          Include Symbols
          <input
            type="checkbox"
            id="symbols"
            name="symbols"
            value="sym"
            onChange={handleCheckboxChange}
          />
          <span class="checkmark"></span>
        </label>
      </form>
      <div className="img-container">{getImage()}</div>
      <button onClick={generatePsw}>
        <p>GENERATE </p> <ArrowForwardIcon className="arrow" />
      </button>
    </div>
  );
}

export default Strength;
