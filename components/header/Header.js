import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import Logo from "../logo";
import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <nav className={styles.header}>
      <div className="container">
        <div className={styles.navLinks}>
          <Link href="/" style={{ flexGrow: 1 }}>
            <Logo />
          </Link>
          <ul className={`${styles.listGroup}`}>
            <li>
              <Link href="#">
                <a>DIVEERSIFY</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>QUALITY CONTROL</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>DATA ANALYTICS</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>SIGN IN</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="btn btn-bg btn-secondary">Book for Demo</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
