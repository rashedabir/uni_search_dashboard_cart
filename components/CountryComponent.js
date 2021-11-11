import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import styles from "../styles/Home.module.css";
import { AiOutlineHeart } from "react-icons/ai";

export default function CountryComponent() {
  return (
    <Card className={`${styles.countryCard}`} sx={{ maxWidth: "252px" }}>
      <div className={`${styles.countryCardImg}`}>
        <CardMedia
          component="img"
          image="/assets/univerisity.jpg"
          alt="university"
          sx={{ width: "252px", height: "150px", objectFit: "cover" }}
        />
        <div className={`${styles.universityCardIcons}`}>
          <IconButton
            sx={{
              bgcolor: "#fff",
              marginLeft: "5px",
              ":hover": {
                bgcolor: "#fff",
              },
            }}
          >
            <AiOutlineHeart className={`${styles.universityCardIcon}`} />
          </IconButton>
        </div>
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
          USA
        </Typography>
      </CardContent>
    </Card>
  );
}
