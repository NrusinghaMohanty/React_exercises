import "./styles.css";
import Counter from "./counter";
import Charcounter from "./CharCounter";
import Darkmode from "./darkmode";
import Figma from "./figma";
import Passwordcheck from "./passwordcheck";
import Toast from "./Toast";
import Switch from "./Switch";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <Charcounter />
      <hr />
      <Darkmode />
      <hr />
      <Figma />
      <hr />
      <Passwordcheck />
      <hr />
      <Switch />
      <hr />
      <Toast />
      <hr />
    </div>
  );
}
