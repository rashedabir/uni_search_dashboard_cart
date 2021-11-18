import Styles from "./Card.module.scss";
import { GiSandsOfTime } from "react-icons/gi";

export default function Card({ item }) {
  return (
    <div className={Styles.card}>
      <div className={Styles.borderTop}></div>
      <span className={Styles.logo}>{item.icon}</span>
      <h4 className={Styles.title}>{item.name}</h4>
      <p className={Styles.description}>{item.description}</p>
    </div>
  );
}
