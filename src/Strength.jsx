import { useState } from "react";
import Strong from "./assets/strong.png";
import Medium from "./assets/medium.png";
import Weak from "./assets/weak.png";
import TooWeak from "./assets/tooweak.png";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Strength.css";

function Strength() {
   





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
          
          />
          <span class="checkmark"></span>
        </div>
        <div class="container">
          <label for="numbers">Include Numbers</label>
          <input type="checkbox" id="numbers" name="numbers" value="nums"   />
          <span class="checkmark"></span>
        </div>
        <div class="container">
          <label for="symbols">Include Symbols</label>
          <input type="checkbox" id="symbols" name="symbols" value="sym"   />
          <span class="checkmark"></span>
        </div>
      </form>
      <div className="img-container">
       
      </div>
      <button>
        <p>GENERATE </p> <ArrowForwardIcon className="arrow" />
      </button>
    </div>
  );
}

export default Strength;
