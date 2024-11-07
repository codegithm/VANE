"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import DynamicModal from "../DynamicModal/DynamicModal";
import LetsChat from "../LetsChatModal/LetsChat";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <nav className={styles.nav}>
      <DynamicModal
        section="offers"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <LetsChat />
      </DynamicModal>
      <div className={styles.container}>
        <Image
          className={styles.logo}
          src="/assets/VANE 3.png"
          alt="Logo"
          width={120}
          height={50}
        />
        <div
          onClick={() => {
            setIsModalOpen(true);
          }}
          className={styles.chat}
        >
          Let&#39;s Chat
        </div>
      </div>
    </nav>
  );
};

export default Header;
