import React from "react";

import styles from "./Swathi.module.css";
import { getImageUrl } from "../../utils";

export const Swathi = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
      <h1 className={styles.title}>ABOUT ME</h1>
        {/* <h1 className={styles.title}>Software Engineer</h1> */}
        <p className={styles.description}>
        I am a full-stack developer with three years of professional experience in backend development, specializing in Java and cloud-based technologies. Additionally, I have two years of project experience in frontend development, with a focus on JavaScript and React. I would be delighted to meet over a chat to share more about my background and experience.
        </p>
        <a href="mailto:swathi99@terpmail.umd.edu" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("swathi/swathiImage.png")}
        alt="Swathi image of me"
        className={styles.swathiImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};