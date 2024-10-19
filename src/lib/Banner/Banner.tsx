import React from "react";
import styles from "./Banner.module.css";
import CustomButton from "@/lib/CustomButton/CustomButton";

const Banner: React.FC = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.textContainer}>
        <p className={styles.smallText}>Take the first step</p>
        <p className={styles.largeText}>
          Do you have any questions about Vane Media Designs? Connect with a
          qualified consultant.
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <CustomButton
          bgColor="var(--background)"
          textColor="var(--buttonColor)"
          type="button"
        >
          Schedule a Call
        </CustomButton>
        <p className={styles.callText}>Or call: 076 569 2831</p>
      </div>
    </div>
  );
};

export default Banner;
