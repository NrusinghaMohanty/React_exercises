import React, { useState } from "react";

function Toast() {
  const [input, setinput] = useState("none");
  return (
    <div>
      <button id="show_btn" onClick={() => setinput("block")}>
        Show
      </button>
      <div
        className="container"
        style={{ display: input, border: "2px solid black" }}
      >
        <p>This is a toast</p>
        <button id="hide_btn" onClick={() => setinput("none")}>
          Hide
        </button>
      </div>
    </div>
  );
}

export default Toast;
