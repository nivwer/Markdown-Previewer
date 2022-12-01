import styles from "./navbar.css";
import Draggable from "react-draggable";
import {Button, hiddenE, hiddenP} from "../../common/Buttons";


export default function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <div className="buttons">
        <Button F={hiddenE} Icon={"info"} />
        <Button F={hiddenE} Icon={"restart"} />
        <Button F={hiddenE} Icon={"editor"} />
        <Button F={hiddenP} Icon={"text"}/>
      </div>
    </nav>
  );
}