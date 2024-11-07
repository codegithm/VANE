"use client";
import React, { useState } from "react";
import styles from "./Offers.module.css";
import SkillsCarousel from "@/lib/SkillsCarousel/SkillsCarousel";
import DynamicModal from "@/lib/DynamicModal/DynamicModal";
import LetsChat from "@/lib/LetsChatModal/LetsChat";

const Offers: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className={styles.container}>
      <SkillsCarousel setIsModalOpen={setIsModalOpen} />
      <DynamicModal
        section="offers"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <LetsChat />
      </DynamicModal>
    </section>
  );
};

export default Offers;
