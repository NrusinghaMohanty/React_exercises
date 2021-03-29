import React, { useState } from "react";

function Figma() {
  const [value, setvalue] = useState(12);

  return (
    <div>
      {/* <label for="car">car</label> */}
      <select id="car">
        <option value="indica">indica</option>
        <option value="swift">swift</option>
        </select>
      <button className="count_btn" onClick={() => setvalue(value - 1)}>-</button>
      <span>{value}px</span>
      <button className="count_btn" onClick={() => setvalue(value + 1)}>+</button>
      <p style={{ fontSize: `${value}px` }}>Welocme to neogcamp</p>
    </div>
  );
}

export default Figma;
