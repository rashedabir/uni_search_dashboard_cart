import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import styles from "../styles/Home.module.css";
import { BiShuffle } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineEventNote } from "react-icons/md";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

export default function UniversityCard() {
  return (
    <Card className={`${styles.universityCard}`} sx={{ maxWidth: "252px" }}>
      <div className={`${styles.universityCardImg}`}>
        <CardMedia
          component="img"
          image="/assets/univerisity.jpg"
          alt="university"
          sx={{ width: "252px", height: "150px", objectFit: "cover" }}
        />
        <CardMedia
          component="img"
          image="/assets/universityLogo.png"
          alt="logo"
          sx={{
            position: "absolute",
            left: 15,
            bottom: 15,
            width: "52px",
            height: "25px",
            borderRadius: "3px",
          }}
        />
        <div className={`${styles.universityCardIcons}`}>
          <IconButton
            sx={{
              bgcolor: "#fff",
              marginRight: "5px",
              ":hover": {
                bgcolor: "#fff",
              },
            }}
          >
            <BiShuffle className={`${styles.universityCardIcon}`} />
          </IconButton>
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
            color: "#f47f20",
            fontSize: "16px",
            fontWeight: "600",
            marginBottom: "10px",
          }}
        >
          York University
        </Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaMapMarkerAlt style={{ color: "#8390B1", fontSize: "15px" }} />
          <Typography
            sx={{ fontSize: "12px", color: "#8390B1", marginLeft: "7px" }}
          >
            Toronto, Ontario
          </Typography>
        </div>
        <Typography
          sx={{ color: "#0F1041", fontSize: "13px", margin: "10px 0" }}
        >
          Bachelor Of Arts + Bachelor Of Science - Information Technology
        </Typography>
        <Grid container spacing={3} sx={{ marginBottom: "10px" }}>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <MdOutlineEventNote
              style={{ color: "#8390B1", fontSize: "15px" }}
            />
            <Typography
              sx={{ color: "#8390B1", fontSize: "14px", marginLeft: "10px" }}
            >
              4 Years
            </Typography>
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <MdOutlineStickyNote2
              style={{ color: "#8390B1", fontSize: "15px" }}
            />
            <Typography
              sx={{ color: "#8390B1", fontSize: "14px", marginLeft: "10px" }}
            >
              6.5+
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <FaRegAddressCard style={{ color: "#8390B1", fontSize: "15px" }} />
            <Typography
              sx={{ color: "#8390B1", fontSize: "14px", marginLeft: "10px" }}
            >
              100%
            </Typography>
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <RiMoneyDollarBoxLine
              style={{ color: "#8390B1", fontSize: "15px" }}
            />
            <Typography
              sx={{ color: "#8390B1", fontSize: "14px", marginLeft: "10px" }}
            >
              $89.6k
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <div className={`${styles.universityCardButton}`}>
        <Button
          sx={{
            bgcolor: "#f47f20",
            color: "#fff",
            fontSize: "9px",
            borderRadius: "25px",
            padding: "5px 10px",
            ":hover": {
              bgcolor: "#f47f20",
            },
          }}
        >
          View 1 more course
        </Button>
      </div>
    </Card>
  );
}
