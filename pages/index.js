import Blog from "../components/Blog";
import CountryScore from "../components/CountryScore";
import CourseDetails from "../components/CourseDetails";
import EarningProspects from "../components/EarningProspects";
import MentorReview from "../components/MentorReview";
import SpecializationCard from "../components/SpecializationCard";
import TopUniversity from "../components/TopUniversity";
import UniversityCard from "../components/UniversityCard";
import Video from "../components/Video";
import WhyCountry from "../components/WhyCountry";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <CountryScore />
      <TopUniversity />
      <WhyCountry country="Canada" />
      <MentorReview />
      <Video />
      <Blog />
      <SpecializationCard />
      <CourseDetails />
      <EarningProspects />
      <UniversityCard />
    </div>
  );
}
