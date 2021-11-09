import { Card, CardContent, Divider, Rating, Typography } from "@mui/material";
import styles from "../styles/Home.module.css";

export default function WhyCountry({ country }) {
  return (
    <Card
      className={`${styles.card}`}
      sx={{ maxWidth: "420px", padding: "5px 20px" }}
    >
      <Typography
        sx={{
          color: "#8390b1",
          fontSize: "16px/25px",
          fontWeight: "bold",
          padding: "10px 0px",
        }}
      >
        Why {country}?
      </Typography>
      <Divider />
      <CardContent
        className={`${styles.chooseCountry}`}
        sx={{ padding: 0, margin: 0 }}
      >
        <table style={{ marginTop: "10px" }}>
          <tbody>
            <tr>
              <td className={`${styles.listHeading}`}>
                Immigrant Friendliness
              </td>
              <td>
                <Rating
                  name="rating-read"
                  className={`${styles.rating}`}
                  defaultValue={0.7}
                  readOnly
                />
              </td>
              <td align="right" className={`${styles.listScore}`}>
                1/5
              </td>
            </tr>
            <tr>
              <td className={`${styles.listHeading}`}>Post Study Work Score</td>
              <td>
                <Rating
                  name="rating-read"
                  className={`${styles.rating}`}
                  defaultValue={2.4}
                  readOnly
                />
              </td>
              <td align="right" className={`${styles.listScore}`}>
                2/5
              </td>
            </tr>
            <tr>
              <td className={`${styles.listHeading}`}>Average Fee Score</td>
              <td>
                <Rating
                  name="rating-read"
                  className={`${styles.rating}`}
                  defaultValue={4.3}
                  readOnly
                />
              </td>
              <td align="right" className={`${styles.listScore}`}>
                4/5
              </td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
