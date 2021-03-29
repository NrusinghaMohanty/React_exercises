import React, { useState } from "react";

function Darkmode() {
  const [btn, setbtn] = useState("click for light mode");
  const [bgcolor, setbgcolor] = useState("black");
  const [color, setcolor] = useState("white");

  const clickHandler = () => {
    if (btn === "click for light mode") {
      setbtn("click for dark mode");
      setbgcolor("white");
      setcolor("black");
    } else {
      setbtn("click for light mode");
      setbgcolor("black");
      setcolor("white");
    }
  };
  return (
    <div>
      <div id="dark_container" style={{ background: bgcolor, color: color }}>
        <h1>Dark Mode</h1>
        <p>Press the below button to change its mode </p>
        <button id="dark_btn" onClick={clickHandler}>
          {btn}
        </button>
      </div>
    </div>
  );
}

export default Darkmode;
