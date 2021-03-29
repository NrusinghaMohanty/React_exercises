import React, { useState } from "react";

const itemarr = ["Home", "About", "Profile"];

function Switch() {
  const [value, setvalue] = useState("");

  const Home = ({ text }) => {
    return <div>{text}</div>;
  };
  const About = ({ text }) => {
    return <div>{text}</div>;
  };
  const Profile = ({ text }) => {
    return <div>{text}</div>;
  };

  return (
    <div>
      <div>
        {itemarr.map((item) => {
          return (
            <button className="btn" onClick={() => setvalue(item)}>
              {item}
            </button>
          );
        })}
      </div>
      <h2>{value === "Home" && <Home text="This is home section" />}</h2>
      <h2>{value === "About" && <About text="This is About section" />}</h2>
      <h2>
        {value === "Profile" && <Profile text="This is profile section" />}
      </h2>
    </div>
  );
}

export default Switch;
