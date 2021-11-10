import {
  Card,
  FormControl,
  Grid,
  MenuItem,
  OutlinedInput,
  Rating,
  Select,
  Typography,
} from "@mui/material";
import styles from "../styles/Home.module.css";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export default function SpecializationCard() {
  return (
    <Card
      className={`${styles.card}`}
      sx={{ maxWidth: "420px", padding: "25px" }}
    >
      <Grid
        container
        spacing={2}
        sx={{ alignItems: "center", marginBottom: "30px" }}
      >
        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
          <Typography sx={{ color: "#8390B1", font: "14px/21px" }}>
            Specialization
          </Typography>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
          <FormControl sx={{ width: "100%" }}>
            <Select
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                padding: "-0px 10px",
                margin: "0px",
                borderRadius: "25px",
                bgcolor: "#f47f20",
                font: "9px/13px",
                color: "#fff",
                ".MuiSvgIcon-root": {
                  color: "white",
                },
                "&:hover, .MuiSvgIcon-root": {
                  color: "white",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #f47f20",
                },
                "& .MuiSelect-outlined": {
                  padding: "8px 5px",
                },
              }}
            >
              <MenuItem selected disabled value="">
                <em>Placeholder</em>
              </MenuItem>
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Typography className={`${styles.subject}`}>
        Information Technology
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "5px 0",
        }}
      >
        <Typography sx={{ color: "#8390B1", font: "14px/21px" }}>
          Overall Program Score
        </Typography>
        <Typography sx={{ color: "#8390B1", font: "14px/21px" }}>
          10/10
        </Typography>
      </div>
      <table style={{ marginTop: "17px" }}>
        <tbody>
          <tr>
            <td className={`${styles.listHeading}`}>Percentage</td>
            <td>
              <Rating
                name="rating-read"
                className={`${styles.rating}`}
                defaultValue={0.7}
                readOnly
              />
            </td>
            <td align="right" className={`${styles.listScore}`}>
              0%
            </td>
          </tr>
          <tr>
            <td className={`${styles.listHeading}`}>GRE Score</td>
            <td>
              <Rating
                name="rating-read"
                className={`${styles.rating}`}
                defaultValue={2.4}
                readOnly
              />
            </td>
            <td align="right" className={`${styles.listScore}`}>
              0
            </td>
          </tr>
          <tr>
            <td className={`${styles.listHeading}`}>TOEFL Score</td>
            <td>
              <Rating
                name="rating-read"
                className={`${styles.rating}`}
                defaultValue={4.3}
                readOnly
              />
            </td>
            <td align="right" className={`${styles.listScore}`}>
              0
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
}
