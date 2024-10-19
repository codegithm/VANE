import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Image
          className={styles.logo}
          src="/assets/VANE 3.png"
          alt="Logo"
          width={120}
          height={50}
        />
        <div className={styles.chat}>Let&#39;s Chat</div>
      </div>
    </nav>
  );
};

export default Header;
