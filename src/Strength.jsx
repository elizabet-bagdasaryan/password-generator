import { useState } from "react";
import Strong from "./assets/strong.png";
import Medium from "./assets/medium.png";
import Weak from "./assets/weak.png";
import TooWeak from "./assets/tooweak.png";
import Empty from "./assets/empty.png";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";

import "./Strength.css";
import "./Password.css";
import "./Scrollbar.css";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { upperCase, lowerCase, numbers, symbols } from "./characters";

function Strength() {
  const [scrollbarValue, setScrollbarValue] = useState(0);

  const handleScrollbarChange = (event) => {
    setScrollbarValue(parseInt(event.target.value));
  };

  const scrollbarThumbStyle = {
    width: `${scrollbarValue * 4.8}% `,
  };

  const getParagraphText = () => {
    return scrollbarValue;
  };
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
    } else if (numChecked === 0) {
      return <img src={Empty} />;
    }
  };

  const [password, setPassword] = useState("");
  const [includeUpper, setIncludeUpper] = useState(false);
  const [includeLower, setIncludeLower] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeSymbol, setIncludeSymbol] = useState(false);

  const generatePsw = (e) => {
    let charList = " ";
    if (includeUpper) {
      charList = charList + upperCase;
    }

    if (includeLower) {
      charList = charList + lowerCase;
    }

    if (includeNumber) {
      charList = charList + numbers;
    }

    if (includeSymbol) {
      charList = charList + symbols;
    }

    setPassword(createPassword(charList));
  };

  const createPassword = (charList) => {
    let passwordd = " ";
    const charListLength = charList.length;

    for (let i = 0; i < scrollbarValue; i++) {
      const charIndex = Math.round(Math.random() * charListLength);
      passwordd = passwordd + charList.charAt(charIndex);
    }
    return passwordd;
  };


  const [isClicked, setIsClicked] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  function handleGenerate() {
    setIsGenerated(true);
  }

  function handleClick() {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 3000);
  }

  const handleBoth = () => {
    handleClick();
    copyPsw();
  };

  const copy = () => {
    const newTxtArea = document.createElement("textarea");
    newTxtArea.innerHTML = password;
    document.body.appendChild(newTxtArea);
    newTxtArea.select();
    document.execCommand("copy");
    newTxtArea.remove();
  };
  const copyPsw = (e) => {
    copy();
  };



  const handleButton = () => {
    handleGenerate();
    generatePsw();
  };

  return (
    <div className="body">
          <div className="main">
          {isGenerated && <div>{password}</div>}
          {!isGenerated && <div id="placeholder">P4$5W0rD!</div>}
           <div id="copied">
           {isClicked && <div>COPIED</div>}
            <FileCopyOutlinedIcon className="logo" onClick={handleBoth} />
    </div>
  </div>

      <div className="points">
        <div className="content">
          <div className="characters">
            <p>Character Length</p>
            <p>{getParagraphText()}</p>
          </div>
          <div className="slide-container">
            <div id="slider-track" style={scrollbarThumbStyle}></div>

            <input
              type="range"
              min="0"
              max="20"
              className="slider"
              id="range"
              value={scrollbarValue}
              onChange={handleScrollbarChange}
            />
          </div>
        </div>
        <form>
          <label class="container">
            <label for="uppercase">Include Uppercase Letters</label>
            <input
              checked={includeUpper}
              onChangeCapture={(e) => setIncludeUpper(e.target.checked)}
              type="checkbox"
              id="uppercase"
              name="uppercase"
              value="upper"
              onChange={handleCheckboxChange}
            />
            <span class="checkmark"></span>
          </label>

          <label class="container">
            <label for="lowercase">Include Lowercase Letters</label>
            <input
              checked={includeLower}
              onChangeCapture={(e) => setIncludeLower(e.target.checked)}
              type="checkbox"
              id="lowercase"
              name="lowercase"
              value="lower"
              onChange={handleCheckboxChange}
            />
            <span class="checkmark"></span>
          </label>

          <label class="container">
            <label for="numbers">Include Numbers</label>
            <input
              checked={includeNumber}
              onChangeCapture={(e) => setIncludeNumber(e.target.checked)}
              type="checkbox"
              id="numbers"
              name="numbers"
              value="nums"
              onChange={handleCheckboxChange}
            />
            <span class="checkmark"></span>
          </label>

          <label class="container">
            <label for="symbols">Include Symbols</label>
            <input
              checked={includeSymbol}
              onChangeCapture={(e) => setIncludeSymbol(e.target.checked)}
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
        <button onClick={handleButton}>
          <p>GENERATE </p> <ArrowForwardIcon className="arrow" />
        </button>
      </div>
    </div>
  );
}

export default Strength;
