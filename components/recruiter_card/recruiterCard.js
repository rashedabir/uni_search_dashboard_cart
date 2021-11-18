import styles from "./recruiterCard.module.scss";

function RecruiterCard({ item }) {
  return (
    <div className={styles.card_wrapper}>
      <span>{item.icon}</span>
      <h2>{item.text}</h2>
    </div>
  );
}

export default RecruiterCard;
