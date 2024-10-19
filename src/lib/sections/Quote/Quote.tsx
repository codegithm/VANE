import React from "react";
import styles from "./Quote.module.css";

const Quote: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.imageContainer}></div>
      <div className={styles.quoteContainer}>
        <div className={styles.quoteContent}>
          <p>
            I listened when someone said, &apos;Do what you Love and you will
            never work a day in your life&apos;.
          </p>
          <div className={styles.line}></div>
          <div className={styles.personal}>
            <h2 className={styles.heading}>Tshepi Mbovane</h2>
            <p>Director</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
