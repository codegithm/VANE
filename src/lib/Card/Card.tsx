/* eslint-disable */
import React from "react";
import Image from "next/image";
import styles from "./Card.module.css";

interface CardProps {
  imageSrc: string;
  name: string;
  profession: string;
  testimony: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  name,
  profession,
  testimony,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt={name}
          width={100}
          height={100}
          className={styles.image}
        />
      </div>
      <div className={styles.person}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.profession}>{profession}</p>
      </div>
      <p className={styles.testimony}>{testimony}</p>
    </div>
  );
};

export default Card;
