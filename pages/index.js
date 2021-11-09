import CountryScore from "../components/CountryScore";
import MentorReview from "../components/MentorReview";
import TopUniversity from "../components/TopUniversity";
import WhyCountry from "../components/WhyCountry";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <CountryScore />
      <TopUniversity />
      <WhyCountry country="Canada" />
      <MentorReview />
    </div>
  );
}
