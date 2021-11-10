import { Card, Divider, List, ListItem } from "@mui/material";
import styles from "../styles/Home.module.css";

export default function CourseDetails() {
  return (
    <Card
      className={`${styles.card}`}
      sx={{ maxWidth: "420px", padding: "10px" }}
    >
      <List sx={{ width: "100%" }}>
        <ListItem alignItems="flex-start" sx={{ paddingBottom: "15px" }}>
          <p className={`${styles.topUniversityHead}`}>Course Details</p>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem
          alignItems="flex-start"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className={`${styles.topUniversityName}`}>Avg. Course Duration</p>
          <p
            className={`${styles.topUniversityRank}`}
            sx={{ textAlign: "right" }}
          >
            30 Months
          </p>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem
          alignItems="flex-start"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className={`${styles.topUniversityName}`}>University of Calgary</p>
          <p
            className={`${styles.topUniversityRank}`}
            sx={{ textAlign: "right" }}
          >
            $17.55k
          </p>
        </ListItem>
      </List>
    </Card>
  );
}
