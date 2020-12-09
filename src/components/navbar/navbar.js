import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.link}>
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          aria-hidden="true"
        >
          <g
            fill="none"
            stroke="#00AFF5"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          >
            <line x1="22" y1="22" x2="16.4" y2="16.4"></line>
            <circle cx="10" cy="10" r="9"></circle>
          </g>
        </svg>
        <span>Find a ride</span>
      </NavLink>
      <NavLink to="/" className={styles.link}>
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          aria-hidden="true"
        >
          <g
            fill="none"
            stroke="#00AFF5"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          >
            <circle cx="12" cy="12" r="11"></circle>
            <path d="M12 7v10M17 12H7"></path>
          </g>
        </svg>
        <span>Offer a ride</span>
      </NavLink>
      <NavLink to="/" className={styles.link}>
        Sign up
      </NavLink>
      <NavLink to="/" className={styles.link}>
        Log in
      </NavLink>
    </nav>
  );
};

export default Navbar;
