import styles from "./navbar.css";
import Draggable from "react-draggable";
import {Button, hiddenE, hiddenP, hiddenD, reset} from "../../common/buttons";


export default function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <div className="buttons">
        <Button F={hiddenD} Icon={"info"} />
        <Button F={reset} Icon={"restart"} />
        <Button F={hiddenP} Icon={"preview"}/>
        <Button F={hiddenE} Icon={"editor"} />
      </div>
    </nav>
  );
}