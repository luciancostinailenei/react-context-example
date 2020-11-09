import React from "react";

import styles from "./Sidebar.module.css";

import { Link } from "react-router-dom";

const Sidebar = () => (
  <ul className={styles.sidebar}>
    <Link className={styles.link} to="/">
      Home
    </Link>
    <Link className={styles.link} to="/profile">
      Profile
    </Link>
    <Link className={styles.link} to="/ref-example">
      RefExample
    </Link>
  </ul>
);

export default Sidebar;
