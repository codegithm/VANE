import React from "react";
import styles from "./LandingPage.module.css";
import Header from "@/lib/Header/Header";
import Container from "@/lib/Container/Container";
import Footer from "@/lib/Footer/Footer";
import EmailForm from "@/lib/EmailForm/EmailForm";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <section className={styles.section} id="landing">
        <Container>
          <div
            className={styles.containerContent}
            style={{ gap: "22px", position: "absolute", bottom: "18%" }}
          >
            <div className={styles.containerContent}>
              <h2>
                It&apos;s In{" "}
                <span className={styles.primaryText}>Our Blood.</span>
              </h2>
              <p>
                Let us help you ensure quality design tailored to your
                <br />
                <span className={styles.newLine}>unique business.</span>
              </p>
            </div>
            <div className={styles.containerContent}>
              <p>Receive updates on our latest promotions.</p>
              <EmailForm />
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default LandingPage;
