import { Card, CardContent, Rating } from "@mui/material";
import styles from "../styles/Home.module.css";

export default function CountryScore() {
  return (
    <Card className={`${styles.card}`} sx={{ maxWidth: "420px" }}>
      <div className={`${styles.imgContent}`}>
        <img width="100px" src="/assets/logo1.png" alt="" />
        <div>
          <p className={`${styles.cardContentText} bold`}>Canada</p>
          <p className={`${styles.cardContentText} over_score`}>
            Overall Country Score
          </p>
          <p className={`${styles.cardContentText} score`}>6.6/10</p>
        </div>
      </div>
      <CardContent className={`${styles.cardContent}`}>
        <table>
          <tbody>
            <tr>
              <td className={`${styles.listHeading}`}>Corporate Reputation</td>
              <td>
                <Rating
                  name="half-rating-read"
                  className={`${styles.rating}`}
                  defaultValue={0.7}
                  precision={0.5}
                  readOnly
                />
              </td>
              <td align="right" className={`${styles.listScore}`}>
                0.7
              </td>
            </tr>
            <tr>
              <td className={`${styles.listHeading}`}>Employability Rating</td>
              <td>
                <Rating
                  name="half-rating-read"
                  className={`${styles.rating}`}
                  defaultValue={2.4}
                  precision={0.5}
                  readOnly
                />
              </td>
              <td align="right" className={`${styles.listScore}`}>
                2.4
              </td>
            </tr>
            <tr>
              <td className={`${styles.listHeading}`}>Mentor Reviews</td>
              <td>
                <Rating
                  name="half-rating-read"
                  className={`${styles.rating}`}
                  defaultValue={4.3}
                  precision={0.5}
                  readOnly
                />
              </td>
              <td align="right" className={`${styles.listScore}`}>
                4.3
              </td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
