import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import skills from "../../data/skills.json";
import iskills from "../../data/iskills.json";
import bskills from "../../data/bskills.json";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Skills</h2>
      <h3 className={styles.subheading}>Proficient</h3>
      <div className={styles.content}>
      <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      
      <h6 className={styles.subheading}>Intermediate</h6>
      <div className={styles.content}>
      <div className={styles.content}></div>
      <div className={styles.skills}>
          {iskills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      
      <h4 className={styles.subheading}>Beginner</h4>
      <div className={styles.content}>
      <div className={styles.content}></div>
      <div className={styles.skills}>
          {bskills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};