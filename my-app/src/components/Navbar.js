import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <h3>Chat</h3>
      <div className={styles.UserIcon}>R</div>
    </div>
  );
};

export default Navbar;
