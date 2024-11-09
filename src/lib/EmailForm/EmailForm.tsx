"use client";

import React, { useState } from "react";
import styles from "./EmailForm.module.css";
import CustomButton from "../CustomButton/CustomButton";
import Loader from "../Loader/Loader";

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert("Your email is invalid");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/pending", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit email");
      }

      const data = await response.json();
      console.log(data);
      setIsLoading(false);
      alert("Email successfully submitted!");
    } catch (error) {
      setIsLoading(false);
      alert("Failed to submit email. Please try again later.");
      throw Error("messager: " + error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {isLoading ? <Loader /> : ""}
      <input
        type="email"
        id="email"
        value={email}
        required
        onChange={handleChange}
        className={styles.input}
        placeholder="email"
      />
      <CustomButton
        bgColor="var(--buttonColor)"
        textColor="var(--background)"
        type="submit"
        widthSize="auto"
      >
        <span>Submit</span>
      </CustomButton>
    </form>
  );
};

export default EmailForm;
