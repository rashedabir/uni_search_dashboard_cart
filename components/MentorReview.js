import {
  Avatar,
  Card,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";
import styles from "../styles/Home.module.css";

export default function MentorReview() {
  return (
    <Card
      className={`${styles.card}`}
      sx={{ maxWidth: "420px", padding: "10px" }}
    >
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Typography
          sx={{
            color: "#8390b1",
            fontSize: "16px/25px",
            fontWeight: "bold",
            padding: "10px 18px",
          }}
        >
          Mentor Reviews (2)
        </Typography>
        <Divider />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="/assets/avatar.jpg"
              sx={{ width: "50px", height: "50px" }}
            />
          </ListItemAvatar>
          <ListItemText
            primary="Saptarshi"
            sx={{
              color: "#8390B1",
              fontSize: "14px/26px",
              fontFamily: "Poppins",
            }}
            secondary={
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                  sx={{ fontSize: "20px", marginTop: "5px", color: "#f47f20" }}
                />
                <Typography
                  component="span"
                  variant="body2"
                  color="text.secondary"
                  sx={{ color: "38390B1" }}
                >
                  4.5/5
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    color: "#8390B1",
                    fontSize: "9px/13px",
                    fontFamily: "Poppins",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  porta vitae ante ac rhoncus. Vestibulum ante ipsum primis in
                  faucibus orci luctus et ultrices posuere cubilia curae;
                  Maecenas vehicula venenatis cursus.
                </Typography>
              </div>
            }
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="/assets/avatar.jpg"
              sx={{ width: "50px", height: "50px" }}
            />
          </ListItemAvatar>
          <ListItemText
            primary="Saptarshi"
            sx={{
              color: "#8390B1",
              fontSize: "14px/26px",
              fontFamily: "Poppins",
            }}
            secondary={
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                  sx={{ fontSize: "20px", marginTop: "5px", color: "#f47f20" }}
                />
                <Typography
                  component="span"
                  variant="body2"
                  color="text.secondary"
                  sx={{ color: "38390B1" }}
                >
                  4.5/5
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    color: "#8390B1",
                    fontSize: "9px/13px",
                    fontFamily: "Poppins",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  porta vitae ante ac rhoncus. Vestibulum ante ipsum primis in
                  faucibus orci luctus et ultrices posuere cubilia curae;
                  Maecenas vehicula venenatis cursus.
                </Typography>
              </div>
            }
          />
        </ListItem>
      </List>
    </Card>
  );
}
