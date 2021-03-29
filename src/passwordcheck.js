import React, { useState } from "react";

function Passwordcheck() {
  const [btn, setbtn] = useState(true);
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [showbtn, setshowbtn] = useState("show");
  const [type, setType] = useState("password");
  const [msg, setmsg] = useState("");

  function passwordmatch(event) {
    setconfirmpassword(event.target.value);
    setconfirmpassword((event) => {
      password === event ? setbtn(false) : setbtn(true);
    });
  }

  function passwordshow() {
    if (showbtn === "show") {
      setshowbtn("hide");
      setType("text");
    } else {
      setshowbtn("show");
      setType("password");
    }
  }

  return (
    <div id="sign_container">
      <h2>Password Matching</h2>
      <input
        className="input_div"
        placeholder="Enter your password"
        type={type}
        onChange={(event) => {
          setpassword(event.target.value);
          if (event.target.value.match(/\d+/g)) {
            setmsg("");
          } else {
            setmsg("Its should contain a number");
          }
        }}
      />
      <input
        className="input_div"
        placeholder="Re-enter your password"
        type={type}
        onChange={passwordmatch}
      />{" "}
      <div className="btn_container">
        <button className="btn" onClick={passwordshow}>
          {showbtn}
        </button>
        <button className="btn" disabled={btn}>
          Submit
        </button>
        <p>{msg}</p>
      </div>
    </div>
  );
}

export default Passwordcheck;
