import React, { useContext } from "react";
import { UserContext } from "../../contexts";

import styles from "./Header.module.css";

const Header = () => {
  const {
    state: { user },
  } = useContext(UserContext);

  return (
    <div className={styles.header}>
      <div className={styles.right}>
        <div className={styles.avatar}>{user[0]}</div>
        <span className={styles.username}>{user}</span>
      </div>
    </div>
  );
};

export default Header;
