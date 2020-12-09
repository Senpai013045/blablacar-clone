import React from "react";
import Logo from "../logo/logo";
import Navbar from "../navbar/navbar";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
