"use client";

import React, { useState } from "react";
import styles from "./EmailForm.module.css";
import CustomButton from "../CustomButton/CustomButton";

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError("");
      alert("Email is valid!");
      // Handle form submission
    } else {
      setError("Please enter a valid email address.");
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleChange}
        className={styles.input}
        placeholder="email"
      />
      {error && <p className={styles.error}>{error}</p>}
      <CustomButton
        bgColor="var(--buttonColor)"
        textColor="var(--background)"
        type="submit"
      >
        <span>Submit</span>
      </CustomButton>
    </form>
  );
};

export default EmailForm;
