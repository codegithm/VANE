"use client";
import React from "react";
import ReactModal from "react-modal";
import styles from "./DynamicModal.module.css";

interface DynamicModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const DynamicModal: React.FC<DynamicModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
    >
      <button className={styles.closeButton} onClick={onClose}>
        &times;
      </button>
      <div className={styles.content}>{children}</div>
    </ReactModal>
  );
};

export default DynamicModal;
