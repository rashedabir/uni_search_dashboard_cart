import styles from "./recruitertools.module.scss";
import { MdOutlinePhonelinkSetup } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { RiFlowChart } from "react-icons/ri";
import { Grid } from "@mui/material";
import RecruiterToolCard from "../recruiterToolCard.js/recruiterToolCard";

function RecruiterTools() {
  const state = [
    {
      id: 1,
      icon: <MdOutlinePhonelinkSetup />,
      title: "Document manager",
      text: "Recruiters have access to the latest forms and documents, reducing repetitive enquiries.",
    },
    {
      id: 2,
      icon: <FaWpforms />,
      title: "Dynamic application form",
      text: "Entry requirements and application details are automatically generated and always up to date.",
    },
    {
      id: 3,
      icon: <RiFlowChart />,
      title: "Results-driven processes",
      text: "Structured processes in place to  help recruiters mitigate common application errors",
    },
  ];

  return (
    <div className={styles.card_wrapper}>
      <Grid container spacing={4}>
        {state.map((item, index) => (
          <Grid item md={4} xs={12} ke={index}>
            <RecruiterToolCard item={item} index={index} />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={4}>
        <Grid item md={6} xs={12}>
          <h2>Our Institution partners get immediate results</h2>
          <p>
            “We only had about six Sri Lankan students when I started working
            with Adventus.io and we’ve got more than 10x than that right now.”
          </p>
          <p>
            – CALLUM SAWATZKY- INTERNATIONAL RECRUITMENT, HUMBER COLLEGE, CANADA
          </p>
          <button className="btn btn-bg btn-secondary">Learn More</button>
        </Grid>
        <Grid item md={6} xs={12}>
          <div className="image_wrapper">
            <img src="./assets/institude.png" alt="logo" width="100%" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default RecruiterTools;
