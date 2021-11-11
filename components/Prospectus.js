import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import styles from "../styles/Home.module.css";

function Prospectus() {
  return (
    <Card className={`${styles.prospectusCard}`} sx={{ maxWidth: "230px" }}>
      <div className={`${styles.countryCardImg}`}>
        <CardMedia
          component="img"
          image="/assets/univerisity.jpg"
          alt="university"
          sx={{
            width: "230px",
            height: "278px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </div>
      <CardContent>
        <Typography
          sx={{
            color: "#8390B1",
            fontSize: "14px",
            fontWeight: "500",
            marginBottom: "10px",
            textAlign: "center",
            padding: "0 15px",
          }}
        >
          University Of South Australia
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Prospectus;
