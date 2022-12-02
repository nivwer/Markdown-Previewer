import styles from "./container.css";
import { Document } from "../../common/md-document/md-document";
import { Markedown } from "../../common/markdown/markdown";


export default function Container() {
  return (
    <div className="Container">
      <Document />
      <Markedown />
    </div>
  );
}
