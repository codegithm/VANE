"use client";
import React, { useState } from "react";
import styles from "./Banner.module.css";
import CustomButton from "@/lib/CustomButton/CustomButton";
import DynamicModal from "../DynamicModal/DynamicModal";
import CallBackForm from "../CallBackForm/CallBackForm";

const Banner: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          onClick={() => setIsModalOpen(true)}
        >
          Schedule a Call
        </CustomButton>
        <p className={styles.callText}>Or call: 076 569 2831</p>
      </div>
      <DynamicModal
        section="banner"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <h2 className={styles.largeModalText}>We will call you back</h2>
        <CallBackForm>
          <CustomButton
            bgColor="var(--buttonColor)"
            textColor="var(--background)"
            type="submit"
            widthSize="106px"
          >
            <span>Submit</span>
          </CustomButton>
        </CallBackForm>
      </DynamicModal>
    </div>
  );
};

export default Banner;
