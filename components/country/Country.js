import { Card, CardMedia, Rating, Typography } from "@mui/material";
import styles from "./Country.module.scss";

function Country() {
  return (
    <Card
      sx={{
        maxWidth: "303px",
        boxShadow: "none",
        border: "1px solid #EBE9F1",
        padding: "10px",
      }}
    >
      <div className={`${styles.countryImg}`}>
        <img src="/assets/logo1.png" alt="logo" />
        <Typography
          sx={{
            color: "#8390B1",
            fontSize: "16px",
            fontWeight: "600",
            margin: "15px 0",
          }}
        >
          USA
        </Typography>
        <Rating
          name="half-rating-read"
          defaultValue={3}
          readOnly
          sx={{ fontSize: "15px", textAlign: "left", color: "#F47F20" }}
        />
        <Typography
          sx={{
            color: "#8390B1",
            fontSize: "10px",
          }}
        >
          4.5/5
        </Typography>
      </div>
      <Typography sx={{ color: "#8390B1", fontSize: "9px", marginTop: "15px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta vitae
        ante ac rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Maecenas vehicula venenatis cursus.
        Donec vehicula a mi quis pulvinar. Praesent ac leo condimentum, luctus
        orci nec, dapibus nisi. Nam sollicitudin purus in tellus fermentum, nec
        blandit purus rhoncus. Phasellus eu ligula dui. Morbi volutpat, diam
        eget tempor elementum, ex lacus tincidunt odio, sed consequat mi ipsum
        cursus libero.
      </Typography>
      <div className={`${styles.button}`}>
        <button>View More</button>
      </div>
    </Card>
  );
}

export default Country;
