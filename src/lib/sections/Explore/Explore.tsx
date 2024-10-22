import React from "react";
import Image from "next/image";
import styles from "./Explore.module.css";
import CustomButton from "@/lib/CustomButton/CustomButton";
import Container from "@/lib/Container/Container";

const Explore: React.FC = () => {
  return (
    <section className={styles.containerdiv} id="explore">
      <Container>
        <div className={styles.parent}>
          <Image
            src="/assets/Rectangle 6344.png"
            alt="Creative Design"
            width={300}
            height={300}
            className={styles.image}
            layout="fixed"
          />

          <div className={styles.textContainer}>
            <h2>
              Designing Beyond Boundaries, Shaping{" "}
              <span className={styles.primaryText}>Ideas into Reality</span>
            </h2>
            <p>
              We blend creativity with innovation to craft unique, impactful
              designs that elevate brands. Our team is dedicated to turning
              ideas into stunning visuals, using the latest technology and a
              deep understanding of modern trends to deliver solutions that
              engage and inspire.
            </p>
            <CustomButton
              bgColor="var(--buttonColor)"
              textColor="var(--background)"
              type="button"
            >
              Explore
            </CustomButton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Explore;
