import React from "react";
import styles from "./Testimony.module.css";
import CustomCarousel from "@/lib/CustomCarousel/CustomCarousel";

const Testimony: React.FC = () => {
  return (
    <section className={styles.testimonySection}>
      <div className={styles.headingContainer}>
        <h2 className={styles.header}>Hear from our Clients</h2>
        <p className={styles.paragraph}>
          Explore authentic stories from diverse clients and discover how
          Vane&apos;s strategies can unlock new possibilities and transform your
          life.
        </p>
      </div>
      <CustomCarousel />
    </section>
  );
};

export default Testimony;
