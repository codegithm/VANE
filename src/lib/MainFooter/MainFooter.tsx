"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./MainFooter.module.css";
import Image from "next/image";
import Container from "../Container/Container";
import axios from "axios";
import { SubscriberEmail } from "../../../models/SubscriberEmail";

const MainFooter: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  //   const handleChangePolicy = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     // setPolicy(e.target.value);
  //   };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const email = formData.get("email") as string;
    const policy = formData.get("privacyPolicy");
    const subscriber: SubscriberEmail = {
      email: email,
      subscribe: policy === "on",
    };

    try {
      await axios.post("/api/subscribe", { subscriber });
      setSuccess("You’ve successfully subscribed!");
      console.log(success);
    } catch (er) {
      setError("There was an error subscribing. Please try again.");
      console.log(`${error} : ${er}`);
    }
  };

  return (
    <footer className={styles.footer}>
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
                  onChange={handleChange}
                  className={styles.input}
                />
                <div className={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    id="privacyPolicy"
                    name="privacyPolicy"
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
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.icon}
                  >
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.icon}
                  >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.icon}
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.icon}
                  >
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.icon}
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
