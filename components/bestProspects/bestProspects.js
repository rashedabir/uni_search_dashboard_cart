import { Grid } from "@mui/material";
import styles from "./bestProspects.module.scss";
import { IoIosArrowForward } from "react-icons/io";

export default function BestProspects() {
  const state = [
    {
      id: 1,
      item: "Sponsored emails",
    },
    {
      id: 2,
      item: "Institution Spotlights",
    },
    {
      id: 3,
      item: "On-platform notification",
    },
  ];

  return (
    <div className={styles.best_prospectus}>
      <Grid container spacing={4} sx={{ marginBottom: "100px" }}>
        <Grid item md={6} xs={12}>
          <img src="./assets/logo2.png" alt="logo" width="100%" />
        </Grid>
        <Grid className={styles.best_prospectus_details} item md={6} xs={12}>
          <h2>How We Find the Best Prospects for You</h2>
          <p>
            UniSearch’s state-of-the-art algorithm-driven platform screens
            through student profiles to find the prospects that best suit your
            university’s course and eligibility requirements. As we drive these
            students to your profile, we also keep an eye on student engagement
            patterns best predicting application intentions. This means that we
            give you exclusive and one-to-one access to best-fit students with
            the highest likelihood of conversion!{" "}
          </p>
          <button className="btn btn-bg btn-secondary">Get Started</button>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item md={6} xs={12} className={styles.ensure_quality}>
          <h2>How We Ensure Quality</h2>
          <p>
            Out of over 1 million visitors, how do we make sure only the best
            candidates connect with your university?
          </p>
          <div className={styles.list_group}>
            {state.map((item) => (
              <div key={item.id} className={styles.item_group}>
                <IoIosArrowForward className={styles.icon} />
                <p>{item.item}</p>
              </div>
            ))}
          </div>
          <button className="btn btn-bg btn-secondary">Learn More</button>
        </Grid>
        <Grid item md={6} xs={12}>
          <img src="./assets/logo3.png" alt="logo" width="100%" />
        </Grid>
      </Grid>
    </div>
  );
}
