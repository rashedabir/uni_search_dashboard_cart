import { Grid } from "@mui/material";
import styles from "./emergingMarket.module.scss";
import { IoIosArrowForward } from "react-icons/io";

export default function EmergingMarket() {
  const state = [
    {
      id: 1,
      item: "Profile-match with students corresponding to your eligibility requirements",
    },
    {
      id: 2,
      item: "View best-fit student profiles and contact students one-to-one through live messaging",
    },
    {
      id: 3,
      item: "Build and manage your university’s profiles and courses with up-to-date information",
    },
    {
      id: 4,
      item: "Get real-time data-driven analytics on student engagement behaviour",
    },
    {
      id: 5,
      item: "Engage students through virtual fairs, discussion boards, blog and vlog posts, and rich media",
    },
    {
      id: 6,
      item: "Create an intuitive pathway for students to complete their program selection and application through a single platform",
    },
  ];

  return (
    <div
      style={{ backgroundImage: "../../public/assets/background.png" }}
      className={styles.emrging_market}
    >
      <div className="container">
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <h2>
              Want to Engage With Your Best-Fit Prospects in Emerging Markets?
            </h2>
            <p>Join UniSearch as a university partner to:</p>
            <div className={styles.list_group}>
              {state.map((item) => (
                <div key={item.id} className={styles.item_group}>
                  <IoIosArrowForward className={styles.icon} />
                  <p>{item.item}</p>
                </div>
              ))}
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <img src="./assets/icon.png" alt="" width="90%" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
