import React from "react";
import styles from "./Offers.module.css";
import SkillsCarousel from "@/lib/SkillsCarousel/SkillsCarousel";

const Offers: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.sectionsContainer}>
        <div className={styles.leftSection}></div>
        <div className={styles.rightSection}></div>
      </div>
      <SkillsCarousel />
    </section>
  );
};

export default Offers;
