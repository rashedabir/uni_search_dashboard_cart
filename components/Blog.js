import { Card, CardMedia, Divider, Grid, Typography } from "@mui/material";
import styles from "../styles/Home.module.css";

function Blog() {
  return (
    <Card
      className={`${styles.card}`}
      sx={{ maxWidth: "420px", padding: "15px" }}
    >
      <Typography
        sx={{
          color: "#8390b1",
          fontSize: "16px/25px",
          fontWeight: "bold",
          padding: "10px 5px",
        }}
      >
        Blog
      </Typography>
      <Divider />
      <Grid container spacing={2} sx={{ marginTop: "0px" }}>
        <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
          <CardMedia
            component="img"
            image="/assets/blog.PNG"
            width="100%"
            alt=""
          />
        </Grid>
        <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
          <Typography
            sx={{ color: "#8390b1", fontSize: "14px/25px", marginTop: "5px" }}
          >
            9 Scholarships for Malaysian Students
          </Typography>
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
          <CardMedia
            component="img"
            image="/assets/blog.PNG"
            width="100%"
            alt=""
          />
        </Grid>
        <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
          <Typography
            sx={{ color: "#8390b1", fontSize: "14px/25px", marginTop: "5px" }}
          >
            9 Scholarships for Malaysian Students
          </Typography>
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
          <CardMedia
            component="img"
            image="/assets/blog.PNG"
            width="100%"
            alt=""
          />
        </Grid>
        <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
          <Typography
            sx={{ color: "#8390b1", fontSize: "14px/25px", marginTop: "5px" }}
          >
            9 Scholarships for Malaysian Students
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Blog;
