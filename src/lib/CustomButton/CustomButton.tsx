import React, { ReactNode } from "react";
import styles from "./CustomButton.module.css";

interface CustomButtonProps {
  bgColor?: string; // Optional: Allow overriding the default color
  textColor?: string; // Optional: Allow overriding the default text color
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  widthSize?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  bgColor,
  textColor,
  children,
  type = "button",
  widthSize,
  onClick,
}) => {
  const buttonStyle = {
    backgroundColor: bgColor || "var(--accentColor)",
    color: textColor || "white",
    width: widthSize || "200px",
  };

  return (
    <button
      type={type}
      className={styles.button}
      style={buttonStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
