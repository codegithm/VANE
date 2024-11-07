import React from "react";
import styles from "./LetsChat.module.css";
import CustomButton from "../CustomButton/CustomButton";

const LetsChat: React.FC = () => {
  return (
    <div className={styles.parent}>
      <div className={`${styles.child} ${styles.callContainer}`}>
        <div className={styles.textContainer}>
          <h1 className={`${styles.header} ${styles.call}`}>Give us a Call</h1>
          <p className={`${styles.subHeader} ${styles.callSubHeader}`}>
            You&apos;re welcome to give us a call anytime!
          </p>
        </div>
        <CustomButton
          bgColor="var(--buttonColor)"
          textColor="var(--background)"
        >
          Call
        </CustomButton>
      </div>
      <div className={`${styles.child} ${styles.emailContainer}`}>
        <div className={styles.textContainer}>
          <h1 className={`${styles.header} ${styles.email}`}>Email us</h1>
          <p className={`${styles.subHeader} ${styles.emailSubHeader}`}>
            Don&apos;t hesitate to drop us an email!
          </p>
        </div>
        <CustomButton
          bgColor="var(--buttonColor)"
          textColor="var(--background)"
        >
          Email
        </CustomButton>
      </div>
    </div>
  );
};

export default LetsChat;
