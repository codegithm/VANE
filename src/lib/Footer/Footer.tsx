import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src="/assets/companies/Conscious-Companies_Bold-Logo-01-e1601974793644-300x109 copy.png"
          alt="Footer Image 1"
          width={100}
          height={100}
        />
        <Image
          className={styles.image}
          src="/assets/companies/Agni-Logo-White.png"
          alt="Footer Image 2"
          width={100}
          height={100}
        />
        <Image
          className={styles.image}
          src="/assets/companies/Entity Solutions - Logo landscape-05.png"
          alt="Footer Image 3"
          width={100}
          height={100}
        />
        <Image
          className={styles.image}
          src="/assets/companies/MeetSA.png"
          alt="Footer Image 4"
          width={100}
          height={100}
        />
        <Image
          className={styles.image}
          src="/assets/companies/3PT Logo copy.png"
          alt="Footer Image 5"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default Footer;
