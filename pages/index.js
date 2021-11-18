import { Container, Grid } from "@mui/material";
import Card from "../components/featuresCard/Card";
import Header from "../components/header/Header";
import { GiSandsOfTime, GiQueenCrown, GiCycle } from "react-icons/gi";
import { GrPowerCycle } from "react-icons/gr";
import { ImLibrary } from "react-icons/im";
import { BiLike } from "react-icons/bi";
import { BsJournalBookmark } from "react-icons/bs";
import styles from "../styles/Home.module.css";
import RegionalMarket from "../components/regionalMarket/RegionalMarket";

export default function Home() {
  const state = [
    {
      id: 1,
      icon: <GiSandsOfTime />,
      name: "Cutting-Edge Profile Matching",
      description:
        "Screen the best prospects matching your eligibility requirements and drive engagement to your profile",
    },
    {
      id: 2,
      icon: <BsJournalBookmark />,
      name: "Boost Conversion Success",
      description:
        "Find the prospects with the highest likelihood of conversion to active applicants in a few clicks",
    },
    {
      id: 3,
      icon: <BiLike />,
      name: "Complete Application Tracking and Support",
      description:
        "Track applications in real-time and connect with students one-to-one to ensure completion and admissions success",
    },
    {
      id: 4,
      icon: <GiCycle />,
      name: "Foster Brand Awareness and Recognition",
      description:
        "Curate courses, manage your university profile, post blogs and rich media, host online events, and more to establish your unique brand voice to students",
    },
    {
      id: 5,
      icon: <GiQueenCrown />,
      name: "Choose Student Representatives",
      description:
        "Select international students or alumni from your student body to engage with prospective students one-to-one",
    },
    {
      id: 6,
      icon: <ImLibrary />,
      name: "Collaborate with UniSearch Experts",
      description:
        "Get personalised and detailed insight about your target audience and collaborate for application success with our dedicated team of experienced counsellors",
    },
  ];

  return (
    <div>
      <Header />
      <div className="container">
        <Grid container spacing={3}>
          {state.map((item) => (
            <Grid item md={4} xs={12} sm={12}>
              <Card item={item} />
            </Grid>
          ))}
        </Grid>
      </div>
      <RegionalMarket />
    </div>
  );
}
