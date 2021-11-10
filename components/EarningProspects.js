import { Card, CardContent, Divider, Typography } from "@mui/material";
import styles from "../styles/Home.module.css";

export default function EarningProspects() {
  return (
    <Card
      className={`${styles.card}`}
      sx={{ maxWidth: "420px", padding: "0px 20px", paddingTop: "10px" }}
    >
      <Typography
        sx={{
          color: "#8390b1",
          fontSize: "16px/25px",
          fontWeight: "bold",
          padding: "10px 0px",
        }}
      >
        Earning Prospects
      </Typography>
      <Divider />
      <CardContent
        className={`${styles.chooseCountry}`}
        sx={{ padding: 0, margin: 0 }}
      >
        <table style={{ marginTop: "10px" }}>
          <tbody>
            <tr>
              <td className={`${styles.earningProspoctesTitle}`}>
                Computer and information systems...
              </td>
              <td align="right" className={`${styles.listScore}`}>
                1/5
              </td>
            </tr>
            <tr>
              <td className={`${styles.earningProspoctesTitle}`}>
                Database analysts and data admin...
              </td>
              <td align="right" className={`${styles.listScore}`}>
                2/5
              </td>
            </tr>
            <tr>
              <td className={`${styles.earningProspoctesTitle}`}>
                Information systems analyst
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
