"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./MainFooter.module.css";
import Image from "next/image";
import Container from "../Container/Container";
import Loader from "../Loader/Loader";

const MainFooter: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, seIsLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  //   const handleChangePolicy = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     // setPolicy(e.target.value);
  //   };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) alert("Your email is invalid");
    seIsLoading(true);
    try {
      fetch("/api/newsletter", {
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
    } catch (er) {
      setError("There was an error subscribing. Please try again.");
      console.log(`${error} : ${er}`);
      seIsLoading(false);
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  return (
    <footer className={styles.footer}>
      {isLoading ? <Loader /> : ""}
      <Container>
        <div className={styles.parentContainer}>
          <div className={styles.container}>
            <div className={styles.logoFormContainer}>
              {/* Replace with your logo */}
              <Image
                src="/assets/VANE 3.png"
                alt="Logo"
                width={120}
                height={34}
              />
              <form onSubmit={handleSubmit} className={styles.form}>
                <label className={styles.label}>Signup: Promo Newsletter</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  required
                  onChange={handleChange}
                  className={styles.input}
                />
                <div className={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    id="privacyPolicy"
                    name="privacyPolicy"
                    required
                    className={styles.checkbox}
                  />
                  <label
                    htmlFor="privacyPolicy"
                    className={styles.checkboxLabel}
                  >
                    I agree to the Privacy Policy
                  </label>
                </div>
                <button type="submit" className={styles.button}>
                  Submit
                </button>
              </form>
            </div>
            <div className={styles.infoContainer}>
              <h2 className={styles.title}>
                It&apos;s in <span className={styles.blood}>our Blood</span>
              </h2>
              <div className={styles.socialContainer}>
                <h3 className={styles.subtitle}>Say Hello</h3>
                <div className={styles.icons}>
                  <a
                    href="https://www.facebook.com/vanemediadesign"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vane-media-designs-886993218/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faXTwitter} size="2x" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@vanemediadesign"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faTiktok} size="2x" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.designer}>
            <p>
              Vane Media Designs{" "}
              <span style={{ color: "#e0e0e0" }}>
                © 2024. All Rights Reserved.
              </span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default MainFooter;
