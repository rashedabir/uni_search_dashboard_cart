import {
  Card,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import styles from "../styles/Home.module.css";

export default function TopUniversity() {
  return (
    <Card
      className={`${styles.card}`}
      sx={{ maxWidth: "420px", padding: "10px" }}
    >
      <List sx={{ width: "100%" }}>
        <ListItem
          alignItems="flex-start"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "15px",
          }}
        >
          <p className={`${styles.topUniversityHead}`}>Top Universities</p>
          <p
            className={`${styles.topUniversityHead}`}
            sx={{ textAlign: "right" }}
          >
            Rank
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
          <div>
            <p className={`${styles.topUniversityName}`}>McGill University</p>
            <p className={`${styles.topUniversityCity}`}>Ontario</p>
          </div>
          <p
            className={`${styles.topUniversityRank}`}
            sx={{ textAlign: "right" }}
          >
            3
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
          <div>
            <p className={`${styles.topUniversityName}`}>
              University of Calgary
            </p>
            <p className={`${styles.topUniversityCity}`}>Ontario</p>
          </div>
          <p
            className={`${styles.topUniversityRank}`}
            sx={{ textAlign: "right" }}
          >
            7
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
          <div>
            <p className={`${styles.topUniversityName}`}>Mcmaster University</p>
            <p className={`${styles.topUniversityCity}`}>Ontario</p>
          </div>
          <p
            className={`${styles.topUniversityRank}`}
            sx={{ textAlign: "right" }}
          >
            8
          </p>
        </ListItem>
      </List>
    </Card>
  );
}
