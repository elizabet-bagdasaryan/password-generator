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
      }






  return (
    <div className="points">
      <form>
        <div class="container">
          <label for="uppercase">Include Uppercase Letters</label>
          <input
            type="checkbox"
            id="uppercase"
            name="uppercase"
            value="upper"
            onChange={handleCheckboxChange}
          />
          <span class="checkmark"></span>
        </div>
        <div class="container">
          <label for="lowercase">Include Lowercase Letters</label>
          <input
            type="checkbox"
            id="lowercase"
            name="lowercase"
            value="lower"
            onChange={handleCheckboxChange}
          />
          <span class="checkmark"></span>
        </div>
        <div class="container">
          <label for="numbers">Include Numbers</label>
          <input type="checkbox" id="numbers" name="numbers" value="nums"  onChange={handleCheckboxChange} />
          <span class="checkmark"></span>
        </div>
        <div class="container">
          <label for="symbols">Include Symbols</label>
          <input type="checkbox" id="symbols" name="symbols" value="sym"  onChange={handleCheckboxChange} />
          <span class="checkmark"></span>
        </div>
      </form>
      <div className="img-container">
      {getImage()}
      </div>
      <button>
        <p>GENERATE </p> <ArrowForwardIcon className="arrow" />
      </button>
    </div>
  );
}

export default Strength;
