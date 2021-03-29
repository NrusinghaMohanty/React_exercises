import React, { useState } from "react";

function Counter() {
  const [input, setinput] = useState(0);
  return (
    <div>
      <h2>COUNTER</h2>
      <button
        className="count_btn"
        onClick={() => (input === 0 ? setinput(0) : setinput(input - 1))}
      >
        -
      </button>
      <span>{input}</span>
      <button className="count_btn" onClick={() => setinput(input + 1)}>
        +
      </button>
    </div>
  );
}

export default Counter;
