import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
    </div>
  );
};

export default Header;
