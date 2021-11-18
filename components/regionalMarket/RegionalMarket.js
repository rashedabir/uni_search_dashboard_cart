import { Grid } from "@mui/material";
import Styles from "./Regional.module.scss";
import { RiDatabase2Fill } from "react-icons/ri";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import RecruiterCard from "../recruiter_card/recruiterCard";

export default function RegionalMarket() {
  const state = [
    {
      id: 1,
      icon: <RiDatabase2Fill />,
      text: "All programme data is updated for you",
    },
    {
      id: 2,
      icon: <FaRegQuestionCircle />,
      text: "We field all counsellor questions",
    },
    {
      id: 3,
      icon: <MdOutlineAdminPanelSettings />,
      text: "Gain time with less repetitive admin",
    },
  ];

  return (
    <section>
      <div className="container">
        <Grid container spacing={4} alignItems="center">
          <Grid item md={6} xs={12}>
            <div className="image_wrapper">
              <img src="/assets/regional.png" alt="img" width="100%" />
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <h2>We nurture our recruiters, so they deliver the best</h2>
            <p style={{ marginBottom: "25px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              lectus sed pharetra erat enim. Nulla in ullamcorper sit ut
              facilisi lobortis feugiat. Amet, ac eget porttitor amet.
            </p>
            <p>
              Mauris, vestibulum condimentum ridiculus nullam lectus tortor
              praesent volutpat est. Diam turpis tellus id sed cras ultrices
              arcu lectus tincidunt. Vitae leo elit, id nulla sit neque est sit
              eget. Enim commodo accumsan magna dui amet adipiscing sapien. Leo
              magna sed dolor vel eu rhoncus risus.
            </p>
          </Grid>
        </Grid>
        <div className={Styles.recruit_wrapper}>
          <h2 className={Styles.head}>
            Recruit at scale, with one point of contact
          </h2>
          <p className={Styles.content}>
            Access more recruiters with less stress. Adventus.io is your one
            point of contact to 4,500+ vetted recruitment agents.
          </p>
          <Grid container spacing={4} sx={{ marginTop: "20px" }}>
            {state.map((item) => (
              <Grid item md={4} xs={12}>
                <RecruiterCard item={item} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </section>
  );
}
