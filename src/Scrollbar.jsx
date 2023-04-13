import { useState } from "react";

import Password from "./Password";

import "./Scrollbar.css";

function Scrollbar() {

  const [scrollbarValue, setScrollbarValue] = useState(0);

  const handleScrollbarChange = (event) => {
    setScrollbarValue(parseInt(event.target.value));
  };


  const scrollbarThumbStyle = {
    width: `${scrollbarValue*4.8}% `,
  };
  

 
  const getParagraphText = () => {
    return  scrollbarValue;
  };
  


  return (
    <div className="content">
      <div className="characters">
        <p>Character Length</p>
        <p>{getParagraphText()}</p>
      </div>
      <div className="slide-container">
        <div id="slider-track" style={scrollbarThumbStyle}></div>

        <input type="range" min="0" max="20" className="slider" id="range"   value={scrollbarValue}
        onChange={handleScrollbarChange}/>
      </div>
    </div>
  );
}

export default Scrollbar;
