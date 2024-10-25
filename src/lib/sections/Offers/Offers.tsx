import React from "react";
import styles from "./Offers.module.css";
import SkillsCarousel from "@/lib/SkillsCarousel/SkillsCarousel";

const Offers: React.FC = () => {
  return (
    <section className={styles.container}>
      <SkillsCarousel />
    </section>
  );
};

export default Offers;
