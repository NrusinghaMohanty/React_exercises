import React, { useState } from "react";

function Charcounter() {
  const [input, setinput] = useState("");

  return (
    <div className="char_container">
      <textarea
        rows="5"
        cols="40"
        value={input}
        onChange={(event) => setinput(event.target.value)}
      />
      <h4>Character Number : {input.length}</h4>
    </div>
  );
}

export default Charcounter;
