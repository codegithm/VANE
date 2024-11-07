"use client";

import React, { useState } from "react";
import styles from "./EmailForm.module.css";
import CustomButton from "../CustomButton/CustomButton";
import Loader from "../Loader/Loader";

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, seIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(email)) alert("Your email is invalid");
    seIsLoading(true);
    try {
      fetch("/api/pending", {
        method: "POST",
        body: JSON.stringify({
          email,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          seIsLoading(false);
        });
    } catch {
      seIsLoading(false);
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
        widthSize="106px"
      >
        <span>Submit</span>
      </CustomButton>
    </form>
  );
};

export default EmailForm;
