// import { Textfit } from "react-textfit";
import "./Screen.css";

const Screen = ({ value }) => {
  return (
    <div className="screen">
      <div className="output"> {value}</div>
    </div>
  );
};

export default Screen;
