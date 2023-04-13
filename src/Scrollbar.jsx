import { useState } from "react";

import Password from "./Password";

import "./Scrollbar.css";

function Scrollbar() {

 
  


  return (
    <div className="content">
      <div className="characters">
        <p>Character Length</p>
        <p></p>
      </div>
      <div className="slide-container">
        <div id="slider-track" ></div>

        <input type="range" min="0" max="20" className="slider" id="range"  />
      </div>
    </div>
  );
}

export default Scrollbar;
