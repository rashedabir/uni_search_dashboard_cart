import styles from "./recruiterToolCard.module.scss";

export default function RecruiterToolCard({ item, index }) {
  return (
    <div className={styles.card_wrapper}>
      <div>
        <span>{item.icon}</span>
        <h2>{item.title}</h2>
        <p>{item.text}</p>
      </div>
      {index === 2 ? null : <div className={styles.border_right}></div>}
    </div>
  );
}
