import React, { ReactNode } from "react";
import styles from "./Container.module.css";

interface ContainerProps {
  children: ReactNode;
  customStyling?: object;
}

const Container: React.FC<ContainerProps> = ({ children, customStyling }) => {
  return (
    <div className={styles.container} style={customStyling}>
      {children}
    </div>
  );
};

export default Container;
