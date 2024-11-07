"use client";
import React from "react";
import ReactModal from "react-modal";
import styles from "./DynamicModal.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface DynamicModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  section: string;
}

const DynamicModal: React.FC<DynamicModalProps> = ({
  isOpen,
  onClose,
  children,
  section,
}) => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={`${styles.modal} ${
        section === "banner" ? styles.banner : styles.offers
      }`}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
      data-aos="fade-in"
    >
      <button
        className={`${styles.closeButton} ${
          section === "banner" ? styles.banner : styles.offers
        }`}
        onClick={onClose}
      >
        &times;
      </button>
      <div data-aos="fade-in" className={styles.content}>
        {children}
      </div>
    </ReactModal>
  );
};

export default DynamicModal;
