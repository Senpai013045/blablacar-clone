import React from "react";
import styles from "./hero.module.css";
import heroImage from "../../images/heroImage.svg";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div
        className={styles.bg}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)),url(${heroImage})`,
        }}
      >
        <h1>Your ride. Your choice.</h1>
      </div>
    </section>
  );
};

export default Hero;
