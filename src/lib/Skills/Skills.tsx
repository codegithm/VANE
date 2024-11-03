import React from "react";
import Image from "next/image"; // Or "react-image" depending on your setup
import styles from "./Skills.module.css";
import CustomButton from "../CustomButton/CustomButton";

interface SkillsProps {
  header: string;
  subHeader: string;
  paragraph: string;
  imageUrl: string;
}

const Skills: React.FC<SkillsProps> = ({
  header,
  subHeader,
  paragraph,
  imageUrl,
}) => {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.textContainer}>
        <h1 className={styles.header}>{header}</h1>
        <h2 className={styles.subHeader}>{subHeader}</h2>
        <p className={styles.paragraph}>{paragraph}</p>
        <CustomButton
          bgColor="var(--buttonColor)"
          textColor="var(--background)"
          type="button"
        >
          Let&apos;s chat
        </CustomButton>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt="Skills Image"
          width={500}
          height={500}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Skills;
