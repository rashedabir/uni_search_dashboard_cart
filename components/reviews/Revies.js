import { CardMedia, Grid, Rating, Typography } from "@mui/material";
import styles from "./Revies.module.scss";

export default function Revies() {
  return (
    <div style={{ width: "70%", background: "#f7f8fa" }}>
      <Grid container sx={{ margin: "15px 0" }}>
        <Grid
          item
          md={4}
          xl={4}
          lg={4}
          xs={4}
          sm={4}
          sx={{
            border: "1px solid #EBE9F1",
            color: "#8390B1",
            fontSize: "16px",
            fontWeight: "600",
            textAlign: "center",
            padding: "15px 0",
            bgcolor: "#FFFFFF",
          }}
        >
          Country
        </Grid>
        <Grid
          item
          md={1}
          xl={1}
          lg={1}
          xs={1}
          sm={1}
          sx={{
            border: "1px solid #EBE9F1",
            color: "#8390B1",
            fontSize: "16px",
            fontWeight: "600",
            textAlign: "center",
            padding: "15px 0",
            bgcolor: "#FFFFFF",
          }}
        >
          Rating
        </Grid>
        <Grid
          item
          md={7}
          xl={7}
          lg={7}
          xs={7}
          sm={7}
          sx={{
            border: "1px solid #EBE9F1",
            color: "#8390B1",
            fontSize: "16px",
            fontWeight: "600",
            textAlign: "center",
            padding: "15px 0",
            bgcolor: "#FFFFFF",
          }}
        >
          Review
        </Grid>
      </Grid>
      {["1", "2", "3"].map((item) => (
        <Grid container sx={{ margin: "15px 0" }}>
          <Grid
            item
            md={4}
            xl={4}
            lg={4}
            xs={4}
            sm={4}
            sx={{
              border: "1px solid #EBE9F1",
              color: "#8390B1",
              fontSize: "16px",
              fontWeight: "600",
              padding: "15px 0",
              display: "flex",
              alignItems: "center",
              bgcolor: "#FFFFFF",
            }}
          >
            <CardMedia
              component="img"
              image="/assets/logo1.png"
              alt="logo"
              sx={{ width: "53px", height: "35px", margin: "0 10px" }}
            />
            <Typography
              sx={{ fontSize: "14px", color: "#F47F20", fontWeight: "500" }}
            >
              USA
            </Typography>
          </Grid>
          <Grid
            item
            md={1}
            xl={1}
            lg={1}
            xs={1}
            sm={1}
            sx={{
              border: "1px solid #EBE9F1",
              color: "#8390B1",
              fontSize: "16px",
              fontWeight: "600",
              textAlign: "center",
              padding: "15px 0",
              bgcolor: "#FFFFFF",
            }}
          >
            <Rating
              name="half-rating-read"
              defaultValue={3}
              readOnly
              sx={{ fontSize: "15px", textAlign: "left", color: "#F47F20" }}
            />
            <Typography
              sx={{
                color: "#8390B1",
                fontSize: "14px",
              }}
            >
              4.5/5
            </Typography>
          </Grid>
          <Grid
            item
            md={7}
            xl={7}
            lg={7}
            xs={7}
            sm={7}
            sx={{
              border: "1px solid #EBE9F1",
              color: "#8390B1",
              fontSize: "9px",
              fontWeight: "600",
              textAlign: "left",
              padding: "15px 15px",
              bgcolor: "#FFFFFF",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta
            vitae ante ac rhoncus. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Maecenas vehicula
            venenatis cursus. Donec vehicula a mi quis pulvinar. Praesent ac leo
            condimentum, luctus orci nec, dapibus nisi. Nam sollicitudin purus
            in tellus fermentum, nec blandit purus rhoncus. Phasellus eu ligula
            dui. Morbi volutpat, diam eget tempor elementum, ex lacus tincidunt
            odio, sed consequat mi ipsum cursus libero.
          </Grid>
        </Grid>
      ))}
    </div>
  );
}
