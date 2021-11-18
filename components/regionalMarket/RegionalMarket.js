import { Grid } from "@mui/material";
import styles from "./Regional.module.scss";

export default function RegionalMarket() {
  return (
    <div className="container">
      <div style={{ padding: "0 200px" }}>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <img src="/assets/regional.png" alt="img" width="100%" />
          </Grid>
          <Grid item md={6}>
            <h2>We nurture our recruiters, so they deliver the best</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              lectus sed pharetra erat enim. Nulla in ullamcorper sit ut
              facilisi lobortis feugiat. Amet, ac eget porttitor amet.
            </p>
            <br />
            <br />
            <p>
              Mauris, vestibulum condimentum ridiculus nullam lectus tortor
              praesent volutpat est. Diam turpis tellus id sed cras ultrices
              arcu lectus tincidunt. Vitae leo elit, id nulla sit neque est sit
              eget. Enim commodo accumsan magna dui amet adipiscing sapien. Leo
              magna sed dolor vel eu rhoncus risus.
            </p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
