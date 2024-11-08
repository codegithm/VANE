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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="var(--background)"
          className="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
        </svg>
      </button>
      <div data-aos="fade-in" className={styles.content}>
        {children}
      </div>
    </ReactModal>
  );
};

export default DynamicModal;
